<?php 
/*****************************************************
 * login.php                                         *
 * @author 流浪                                      *
 * @contact 434684601                                *
 * @date 2023-01-13                                  *
 * @remarks 不懂不要乱修改哦 完全明文无后门 仅供学习 *
 *****************************************************/
$file=dirname(__FILE__).'/data.php';if(file_exists($file)){include_once $file;}
include_once dirname(__FILE__).'/lib/validate/validate.php';

$action=filter_input(INPUT_GET, 'action');session_start();
switch ($action){ 
   case  "validate":  //验证码
      $_vc = new ValidateCode();		
      $_SESSION['authnum_session'] = $_vc->getCode();
      break;
   case  "logout":    //退出登录  
      if(!empty($_SESSION['hashstr'])){unset($_SESSION['hashstr']);unset($_SESSION['username']);}  
      ShowMsg('注销登录成功！',"./");
      exit;
      
   default : //登录 
       if(!filter_has_var(INPUT_POST, 'username') || !filter_has_var(INPUT_POST, 'password')){ ShowMsg('用户和密码没填写完整!','-1'); exit(); } 
       if(strtolower(filter_input(INPUT_POST, 'validate'))!==strtolower($_SESSION['authnum_session'])){ ShowMsg('验证码错误!','-1'); exit(); } 
       $username = htmlspecialchars(filter_input(INPUT_POST, 'username'));  
       $password = MD5(filter_input(INPUT_POST, 'password')); 
       $user1=$config['user'];
       $pass2=MD5($config['pass']);
         if($username==$user1&&$password==$pass2)
         {     //登录成功  
                $hashstr=md5($username.$password);       //构造session安全码
                $_SESSION['hashstr']=$hashstr; $_SESSION['username']=$username;
	            ShowMsg('成功登录，正在转向管理管理主页！',"./");	
	            exit();
         }else{  
                ShowMsg('用户名或密码错误！',"-1");
	       exit();
         }
          
}




 