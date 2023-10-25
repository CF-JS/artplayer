<?php
/**
 * @author 流浪
 * @contact 434684601
 * @date 2023-02-18
 */
error_reporting(0); //抑制所有错误信息
include_once './config.php';
include_once './class/Http.php';
/*/////////返回模式1调用以下数据/////////*/
if($config['fanhuileixing']=="1"){ 
    if (isset($_POST['url'])) {
    $url = $_POST['url'];
}else{
    Http::fail();
}
$u = $config['interface'].$url;
$result = Http::geturl($u);
if($result['code'] == 200){
/*后辍*/    
if(strstr($result['url'],'.m3u8')){
        $houchuo="m3u8";
}
if(strstr($result['url'],'.flv')){
        $houchuo="flv";
}
if(strstr($result['url'],'.mp4')){
        $houchuo="mp4";
}
if(strstr($result['url'],'video_mp4')){
        $houchuo="mp4";
}
if(strstr($result['url'],'/video/tos/cn/')){
        $houchuo="mp4";
}
if(strstr($result['url'],'.ts')){
        $houchuo="ts";
}
if(strstr($result['url'],'.mpd')){
        $houchuo="mpd";
}
    header('Content-Type: application/json');
			$result['type'] = $houchuo;
			$result['url'] = openssl_encrypt($result['url'],'AES-128-CBC',$config['aes_key'],0,$config['aes_iv']);
			$result['time'] = date('Y-m-d H:i:s');
			$result['user-agent'] = $_SERVER['HTTP_USER_AGENT'];
			$result['ip'] = get_real_ip();
			$result['iptime'] = '当前IP[60]秒内第['.$count.']次请求-可请求['.$config['iptime'].']次';
    die(json_encode($result,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES));
}
if($config['Standby']){
    $s = explode(",",$config['Standby']);
    foreach ($s as $v){
        $api = "$v$url";
        $result =  Http::geturl($api);
        if($result['code'] ==200){
/*后辍*/    
if(strstr($result['url'],'.m3u8')){
        $houchuo="m3u8";
}
if(strstr($result['url'],'.flv')){
        $houchuo="flv";
}
if(strstr($result['url'],'.mp4')){
        $houchuo="mp4";
}
if(strstr($result['url'],'video_mp4')){
        $houchuo="mp4";
}
if(strstr($result['url'],'/video/tos/cn/')){
        $houchuo="mp4";
}
if(strstr($result['url'],'.ts')){
        $houchuo="ts";
}
if(strstr($result['url'],'.mpd')){
        $houchuo="mpd";
}
    header('Content-Type: application/json');
			$result['type'] = $houchuo;
			$result['url'] = openssl_encrypt($result['url'],'AES-128-CBC',$config['aes_key'],0,$config['aes_iv']);
			$result['time'] = date('Y-m-d H:i:s');
			$result['user-agent'] = $_SERVER['HTTP_USER_AGENT'];
			$result['ip'] = get_real_ip();
			$result['iptime'] = '当前IP[60]秒内第['.$count.']次请求-可请求['.$config['iptime'].']次';
    die(json_encode($result,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES));
        }
    }
}
header('Content-Type: application/json');
die(json_encode(['code' => 404,'msg' =>$result['msg'] ?? '解析失败,请刷新重试！'],JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES));
}
/*/////////返回模式2调用以下数据/////////*/
if($config['fanhuileixing']=="2"){ 
    if (isset($_POST['url'])) {
    $url = $_POST['url'];
    }elseif (isset($_GET['url'])) {
    $url = $_GET['url'];
if($config['token_ua']){
    $token_ua=$config['token_ua'];
    if( $_SERVER['HTTP_USER_AGENT'] != $token_ua )
{
 header('Content-Type: application/json');
 
 if($config['fangdaoleixing']=="0"){ 
 die(json_encode(['code' => 404,'msg' =>'触发ua防盗' ?? '解析失败,请刷新重试！'],JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES));
 }
 if($config['fangdaoleixing']=="1"){ 
   die(json_encode(['code' => 200,'url' => $config['token_url'],'msg' =>'触发ua防盗' ?? '解析失败,请刷新重试！'],JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES)); 
}}}
    $key = $_GET['key'];
if($config['token_key']){
    if($key==$config['token_key']){
}else{
 //   Http::fail();
 header('Content-Type: application/json');
 
 if($config['fangdaoleixing']=="0"){ 
 die(json_encode(['code' => 404,'msg' =>'密钥错误' ?? '解析失败,请刷新重试！'],JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES));
 }
 if($config['fangdaoleixing']=="1"){ 
   die(json_encode(['code' => 200,'url' => $config['token_url'],'msg' =>'密钥错误' ?? '解析失败,请刷新重试！'],JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES)); 
}}}
$u = $config['interface'].$url;
$result = Http::geturl($u);
if($result['code'] == 200){
/*后辍*/    
if(strstr($result['url'],'.m3u8')){
        $houchuo="m3u8";
}
if(strstr($result['url'],'.flv')){
        $houchuo="flv";
}
if(strstr($result['url'],'.mp4')){
        $houchuo="mp4";
}
if(strstr($result['url'],'video_mp4')){
        $houchuo="mp4";
}
if(strstr($result['url'],'/video/tos/cn/')){
        $houchuo="mp4";
}
if(strstr($result['url'],'.ts')){
        $houchuo="ts";
}
if(strstr($result['url'],'.mpd')){
        $houchuo="mpd";
}
    header('Content-Type: application/json');
			$result['type'] = $houchuo;
			$result['url'] = $result['url'];
			$result['time'] = date('Y-m-d H:i:s');
			$result['user-agent'] = $_SERVER['HTTP_USER_AGENT'];
			$result['ip'] = get_real_ip();
			$result['iptime'] = '当前IP[60]秒内第['.$count.']次请求-可请求['.$config['iptime'].']次';
    die(json_encode($result,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES));
}
if($config['Standby']){
    $s = explode(",",$config['Standby']);
    foreach ($s as $v){
        $api = "$v$url";
        $result =  Http::geturl($api);
        if($result['code'] ==200){
/*后辍*/    
if(strstr($result['url'],'.m3u8')){
        $houchuo="m3u8";
}
if(strstr($result['url'],'.flv')){
        $houchuo="flv";
}
if(strstr($result['url'],'.mp4')){
        $houchuo="mp4";
}
if(strstr($result['url'],'video_mp4')){
        $houchuo="mp4";
}
if(strstr($result['url'],'/video/tos/cn/')){
        $houchuo="mp4";
}
if(strstr($result['url'],'.ts')){
        $houchuo="ts";
}
if(strstr($result['url'],'.mpd')){
        $houchuo="mpd";
}
    header('Content-Type: application/json');
			$result['type'] = $houchuo;
			$result['url'] = $result['url'];
			$result['time'] = date('Y-m-d H:i:s');
			$result['user-agent'] = $_SERVER['HTTP_USER_AGENT'];
			$result['ip'] = get_real_ip();
			$result['iptime'] = '当前IP[60]秒内第['.$count.']次请求-可请求['.$config['iptime'].']次';
    die(json_encode($result,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES));
        }
    }
}}

header('Content-Type: application/json');
die(json_encode(['code' => 404,'msg' =>$result['msg'] ?? '解析失败,请刷新重试！'],JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES));
}