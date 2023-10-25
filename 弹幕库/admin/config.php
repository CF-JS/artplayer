<?php 
/*****************************************************
 * config.php                                      *
 * @author 流浪                                      *
 * @contact 434684601                                *
 * @date 2023-01-13                                  *
 * @remarks 不懂不要乱修改哦 完全明文无后门 仅供学习 *
 *****************************************************/
if(file_exists('data.php')){include 'data.php';}
session_start(); 
if(empty($_SESSION['hashstr']) || 
$_SESSION['hashstr']!==md5(($config["user"]).(MD5($config["pass"]))))
{echo "<script>location.href='load.php?url=login.htm'</script>";exit();}
$username=$_SESSION['username'];