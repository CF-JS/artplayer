<?php 
/*****************************************************
 * post.php                                          *
 * @author 流浪                                      *
 * @contact 434684601                                *
 * @date 2023-01-13                                  *
 * @remarks 不懂不要乱修改哦 完全明文无后门 仅供学习 *
 *****************************************************/
if (isset($_GET['act']) && $_GET['act'] == 'setting' && isset($_POST['edit']) && $_POST['edit'] == 1 ) {
    $datas = $_POST;
    $data = $datas['config'];

    if (file_put_contents('data.php', "<?php \n \$config =  ".var_export($data, true)."\n?>")) {
        echo "{code:1,msg:保存成功}";
    } else {
        echo "<script>alert('修改失败！可能是文件权限问题，请给予data.php写入权限！');location.href='".$_SERVER["HTTP_REFERER"]."';</script>";
    }
    $config = $data;
}