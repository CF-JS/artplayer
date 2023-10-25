<?php
/**
 * @author 流浪
 * @contact 434684601
 * @date 2023-02-17
 */
include_once './config.php';
class Http{

    public static function geturl($url){
        $headerArray =array("Content-type:application/json;","Accept:application/json");
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch,CURLOPT_HTTPHEADER,$headerArray);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        $output = curl_exec($ch);
        curl_close($ch);
        $output = json_decode($output,true);
        return $output;
    }

    public static function posturl($url,$data){
        $data  = json_encode($data);
        $headerArray =array("Content-type:application/json;charset='utf-8'","Accept:application/json");
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST,FALSE);
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        curl_setopt($curl,CURLOPT_HTTPHEADER,$headerArray);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($curl);
        curl_close($curl);
        return json_decode($output,true);
    }

    public static function fail(){
        header('HTTP/1.2 404 Not Found');
        die;
    }
}
//限制IP每分钟访问频率
$redis = new Redis();
$redis->connect('127.0.0.1', 6379);
//key记录该ip的访问次数
$key=get_real_ip();
//限制次数
$limit = $config['iptime'];
$check = $redis->exists($key);
if($check){
  $redis->incr($key);
  $count = $redis->get($key);
  if($count > $config['iptime']){
  header('Content-type:text/json;charset=utf-8');
  exit(json_encode(["code"=>100,"msg"=>"当前IP[60]秒内请求次数已达到限制的[$config[iptime]]次,请耐心等待下一个[60]秒."],456));
  //  exit('该IP请求太频繁，请稍后再试！');
}
}else{
  $redis->incr($key);
  //限制时间为60秒
  $redis->expire($key,60);
}
$count = $redis->get($key);
//echo '第 '.$count.' 次请求';
//获取客户端真实ip地址
function get_real_ip(){
  static $realip;
  if(isset($_SERVER)){
    if(isset($_SERVER['HTTP_X_FORWARDED_FOR'])){
      $realip=$_SERVER['HTTP_X_FORWARDED_FOR'];
    }else if(isset($_SERVER['HTTP_CLIENT_IP'])){
      $realip=$_SERVER['HTTP_CLIENT_IP'];
    }else{
      $realip=$_SERVER['REMOTE_ADDR'];
    }
  }else{
    if(getenv('HTTP_X_FORWARDED_FOR')){
      $realip=getenv('HTTP_X_FORWARDED_FOR');
    }else if(getenv('HTTP_CLIENT_IP')){
      $realip=getenv('HTTP_CLIENT_IP');
    }else{
      $realip=getenv('REMOTE_ADDR');
    }
  }
  return $realip;
}
function check_wap() {  
    if (isset($_SERVER['HTTP_VIA'])) return true;  
    if (isset($_SERVER['HTTP_X_NOKIA_CONNECTION_MODE'])) return true;  
    if (isset($_SERVER['HTTP_X_UP_CALLING_LINE_ID'])) return true;  
    if (strpos(strtoupper($_SERVER['HTTP_ACCEPT']),"VND.WAP.WML") > 0) {  
        // Check whether the browser/gateway says it accepts WML.  
        $br = "WML";  
    } else {  
        $browser = isset($_SERVER['HTTP_USER_AGENT']) ? trim($_SERVER['HTTP_USER_AGENT']) : '';  
        if(empty($browser)) return true;
        $mobile_os_list=array('Google Wireless Transcoder','Windows CE','WindowsCE','Symbian','Android','armv6l','armv5','Mobile','CentOS','mowser','AvantGo','Opera Mobi','J2ME/MIDP','Smartphone','Go.Web','Palm','iPAQ','okhttp');  
              
        $mobile_token_list=array('Profile/MIDP','Configuration/CLDC-','160×160','176×220','240×240','240×320','320×240','UP.Browser','UP.Link','SymbianOS','PalmOS','PocketPC','SonyEricsson','Nokia','BlackBerry','Vodafone','BenQ','Novarra-Vision','Iris','NetFront','HTC_','Xda_','SAMSUNG-SGH','Wapaka','DoCoMo','iPhone','iPod');  
              
        $found_mobile=checkSubstrs($mobile_os_list,$browser) ||  
                  checkSubstrs($mobile_token_list,$browser); 
    if($found_mobile)
      $br ="WML";
    else $br = "WWW";
    }  
    if($br == "WML") {  
        return true;  
    } else {  
        return false;  
    }  
}

function checkSubstrs($list,$str){
  $flag = false;
  for($i=0;$i<count($list);$i++){
    if(strpos($str,$list[$i]) > 0){
      $flag = true;
      break;
    }
  }
  return $flag;
}
$home='<!DOCTYPE html>
<html class="">
<head>
    <meta charset="utf-8">
    <title>'.$config['name'].'</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="x5-orientation" content="portrait">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="artplayer/css/home.css" rel="stylesheet">
    <style>
    body,html{
    	font: 24px "Microsoft YaHei", Arial, Lucida Grande, Tahoma, sans-serif;
    	width: 100%;
    	height: 100%;
    	padding: 0;
    	margin: 0;
    	overflow-x: hidden;
    	overflow-y: hidden;
    	background-color: black;
    }
    #loading{
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        text-align:center;
        display:table; /*acts like a table*/
        position: absolute;
        z-index: 10000000001;
        background-size: 100% 100%; 
    }
    h1 {
        color: #ffffff;
        font-size: 1.2rem;
        margin:0;
        padding:0;
        vertical-align:middle; /*middle centred*/
        display:table-cell; /*acts like a table cell*/
        font-family: Microsoft Jhenghei;
    }
    </style>
    <script src="artplayer/js/home.js"></script>
</head>
<body>
    <div class="video-panel">
        <div style="background-image: url(artplayer/img/GEBDGDCAJSP4DhK.png);" class="video-panel-bg-image"></div>
        <div class="video-panel-video-wrapper">
       <video id="js-panel-video" class="video-panel-bg-video" loop muted preload="none" x5-playsinline="" playsinline="" webkit-playsinline=""><source src="'.$config['video'].'" type="video/mp4"> </video>
        </div>
    </div>
    <div id="loading" class="center">
    <h1 >仅供内部交流研究，不以盈利为目的　切勿用于商业如有涉及商业请自行负责...</h1>
    
    </div>
</body>
</html>';
$homewap='<!DOCTYPE html>
<html class="">
<head>
    <meta charset="utf-8">
    <title>'.$config['name'].'</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="x5-orientation" content="portrait">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="artplayer/css/home.css" rel="stylesheet">
    <style>
    body,html{
    	font: 24px "Microsoft YaHei", Arial, Lucida Grande, Tahoma, sans-serif;
    	width: 100%;
    	height: 100%;
    	padding: 0;
    	margin: 0;
    	overflow-x: hidden;
    	overflow-y: hidden;
    	background-color: black;
    }
    #loading{
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        text-align:center;
        display:table; /*acts like a table*/
        position: absolute;
        z-index: 10000000001;
        background-size: 100% 100%; 
    }
    h1 {
        color: #ffffff;
        font-size: 1.2rem;
        margin:0;
        padding:0;
        vertical-align:middle; /*middle centred*/
        display:table-cell; /*acts like a table cell*/
        font-family: Microsoft Jhenghei;
    }
    </style>
    <script src="artplayer/js/home.js"></script>
</head>
<body>
    <div class="video-panel">
        <div style="background-image: url(artplayer/img/GEBDGDCAJSP4DhK.png);" class="video-panel-bg-image"></div>
        <div class="video-panel-video-wrapper">
       <video id="js-panel-video" class="video-panel-bg-video" loop muted preload="none" x5-playsinline="" playsinline="" webkit-playsinline=""><source src="" type="video/mp4"> </video>
        </div>
    </div>
    <div id="loading" class="center">
    <h1 >仅供内部交流研究，不以盈利为目的　切勿用于商业如有涉及商业请自行负责...</h1>
    
    </div>
</body>
</html>';