<?php
error_reporting(0);
header('Content-type: text/json;charset=utf-8');
echo json_encode(array("code"=>200,"url"=>getUrl()),JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES);
function getUrl() {
    preg_match("/url=(.*)/", $_SERVER['REQUEST_URI'], $url);
    return $url[1];
}