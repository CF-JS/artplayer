<?php
/*****************************************************
 * load.php                                          *
 * @author 流浪                                      *
 * @contact 434684601                                *
 * @date 2023-01-13                                  *
 * @remarks 不懂不要乱修改哦 完全明文无后门 仅供学习 *
 *****************************************************/
$url=trim(filter_input(INPUT_GET, 'url'));
if(preg_match('/^\w+\.htm$/i', $url)){
  $file="./html/".filter_input(INPUT_GET, 'url');
  if(file_exists($file)){include $file; exit;}else{exit("404 not found");}	
}else{
	 exit("input error!");	
}