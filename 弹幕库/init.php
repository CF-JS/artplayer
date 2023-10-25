<?php
date_default_timezone_set('Asia/Shanghai'); 
error_reporting(0);
require_once('config.inc.php');
$_config1 = require_once('config.php');
if (!file_exists("install/install.lock")){
    header("Location: install/");
    die();
}
header("Access-Control-Allow-Origin: ".AllowOrigin($_config['允许url']));
header("Content-Type:application/json; charset=utf-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){   //预检请求
    //header("Access-Control-Allow-Credentials: true");  暂时不会用到
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");  //允许的请求方法
    header("Access-Control-Allow-Headers: content-type");   //允许携带的首部字段
}

require_once('./class/pdo.class.php');
new sql('mysql');

function AllowOrigin($domains = []){
    $domain = null;
    if (empty($_SERVER['HTTP_ORIGIN'])) return '*';
    if (empty($domains)) return '*';
    
    foreach ($domains as $v) {
        if($v == $_SERVER['HTTP_ORIGIN']) {
            $domain = $v;
            break;
        }
    }
    return $domain;
}
	

function showmessage($code = 23,$mes = null){
    global $dbconfig;
	if($_GET['ac']=="report"){
		$id = 'report';
		$length = 0;
		$code = 6666; 
	}	elseif($_GET['ac']=="get"){
		$length = count($mes);
	}	elseif($_GET['ac']=="so"){
		$length = count($mes);
        $json = [
            'code' => $code,
		    'count' => $length,
            'data' => $mes
        ];
        die(json_encode($json));
	    exit;
	}	elseif($_GET['ac']=="list"){
		$conn = @new mysqli($dbconfig['host'],$dbconfig['user'],$dbconfig['pwd'],$dbconfig['dbname']);
		$conn -> set_charset('utf8');
		$sql = "select count(*) from danmaku_list ORDER BY time DESC";
		$res = $conn -> query($sql);
		$length = $res ->fetch_row();
		$length = $length[0];
        $json = [
            'code' => $code,
		    'count' => $length,
            'data' => $mes
        ];
        die(json_encode($json));
	    exit;
	}	elseif($_GET['ac']=="reportlist"){
		$conn = @new mysqli($dbconfig['host'],$dbconfig['user'],$dbconfig['pwd'],$dbconfig['dbname']);
		$conn -> set_charset('utf8');
		$sql = "select count(*) from danmaku_report ORDER BY time DESC";
		$res = $conn -> query($sql);
		$length = $res ->fetch_row();
		$length = $length[0];
        $json = [
            'code' => $code,
		    'count' => $length,
            'data' => $mes
        ];
        die(json_encode($json));
	    exit;
	}	elseif($_GET['ac']=="dm"){
	$length = count($mes);
	if($length==0){
		$mov="一条弹幕都没有，赶紧来一发吧！";
	}else{
	$mov="有 $length 条弹幕列队来袭~做好准备吧！";
	}
        $tips = ['text' => "$mov", 'size' => "32px", 'time' => 2, 'ip' => "127.0.0.1", 'id' => "127.0.0.1", 'cid' => "1", 'color' => "rgb(255,255,255)", 'border' => 1, 'mode' => 0];
        $tips1 = ['text' => '请大家遵守弹幕礼仪，文明发送弹幕', 'size' => "32px", 'ip' => "127.0.0.1", 'id' => "127.0.0.1", 'cid' => "1", 'time' =>(float)6, 'color' =>'rgb(251,114,153)', 'border' =>1, 'mode' => 0];
        array_unshift($mes, $tips, $tips1);
	}
	if ($_GET['type'] == "json") {
	$id = $_GET['id'];
    $json = [
        'code' => $code,
        'name' => $id,
		'danum' => $length,
        'danmuku' => $mes
    ];
    die(json_encode($json));
}}
if ($_GET['type'] == "xml") {
        $length = count($mes);
    require_once('admin/data.php');
    header('content-type:text/xml;charset=utf8');  
    $id = $_GET['id'];
    $http_type = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
    $url = $http_type.$_SERVER['HTTP_HOST'].''.$config['dmmulu'].'/dmku/?ac=dm&type=json&id='.$id;  
    $file = file_get_contents($url);  
    $arr = json_decode($file,true);
    $xml = '<?xml version="1.0" encoding="utf-8"?>';  
    $xml.= '<i><code>'.$arr['code'].'</code><name>'.$arr['name'].'</name><danum>'.$arr['danum'].'</danum>';  
    foreach ($arr['danmuku'] as $key => $value) {  
        $xml.= '<d p="'.$value['time'].','.$value['mode'].','.$value['size'].','.hexdec(RGBToHex($value['color'])).','.time().','.$value['ip'].','.$value['id'].','.$value['cid'].'">'.$value['text'].'</d>';  
    }  
    $xml.= '</i>';  
    echo $xml; 

}
function  succeedmsg($code = 23,$mes = null){
    $json = [
        'code' => $code,
        'danmuku' => $mes
    ];
    die(json_encode($json));
}

function get_ip(){
    global $_config ;
    if($_config['is_cdn']){
        if(preg_match('/,/',$_SERVER['HTTP_X_FORWARDED_FOR'])){
            return array_pop(explode(',',$_SERVER['HTTP_X_FORWARDED_FOR']));
        } else {
            return $_SERVER['HTTP_X_FORWARDED_FOR'];
        }
    } else{
        return $_SERVER['REMOTE_ADDR'];
    }
}
function RGBToHex($rgb) {
    $regexp = "/^rgb\(([0-9]{0,3})\,\s*([0-9]{0,3})\,\s*([0-9]{0,3})\)/";
    $re = preg_match ( $regexp, $rgb, $match );
    $re = array_shift ( $match );
    $hexColor = "#";
    $hex = array (
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            'A',
            'B',
            'C',
            'D',
            'E',
            'F' 
    );
    for($i = 0; $i < 3; $i ++) {
        $r = null;
        $c = $match [$i];
        $hexAr = array ();
        
        while ( $c > 16 ) {
            $r = $c % 16;
            $c = ($c / 16) >> 0;
            array_push ( $hexAr, $hex [$r] );
        }
        array_push ( $hexAr, $hex [$c] );
        
        $ret = array_reverse ( $hexAr );
        $item = implode ( '', $ret );
        $item = str_pad ( $item, 2, '0', STR_PAD_LEFT );
        $hexColor .= $item;
    }
    return $hexColor;
}