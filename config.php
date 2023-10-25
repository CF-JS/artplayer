<?php
$config =  array (
    'name' => '一款优秀的 HTML5 播放器', //播放器名称。
    
    'video' => 'https://res11.bignox.com/player/www/101ae5b183a03384c8005e2a827bc4fc/GDCHDGCCHrh8FpZ.mp4', //无地址引导页背景视频地址。
    
    'aes_key' => 'ARTPLAYER2023217',//aeskey16位需修改setting.js底部一致。
    
    'aes_iv' => 'Artplayerapiban1',//aesiv16位需修改setting.js底部一致。
    
    'interface' => '',//JSON接口。
    
    'Standby' => '',//备用json接口多个请使用,号隔开。
    
    'fanhuileixing' => '1', //播放器返回模式，参数1为网页播放器，参数2为json。(api.php?url=地址访问)
    
    'iptime' => '20', //限制每个IP每分钟访问次数。
    
    'fangdaoleixing' => '',//返回模式为2时，留空不需带key直接访问，0密钥错误时输出404，1带自定义输出url。
    
    'token_ua' => '',//返回模式为2时，限制指定UA来源访问，留空不开启
    
    'token_key' => '123456789',//返回模式为2时，防盗类型为0或者1时，访问api.php?key=12345678&url=地址
    
    'token_url' => 'https://www.baidu.com',//返回模式为2时，防盗类型为1时，限制UA开启时，输出的自定义链接
    
    'theme' => '#165DFF',//播放器进度条颜色设置。
    
    'background' => 'artplayer/img/background.jpg',//播放器背景图片。
    
    'loading' => 'artplayer/img/load.gif',//播放器加载图片。
    
    'zantingguanggaoqidong' => '0',//暂停播放时的广告启动开关，1为启动，0为关闭。
    
    'zantingguanggaourl' => 'artplayer/img/guanggao.png',//广告图片地址。
    
    'zantingguanggaolianjie' => 'https://www.baidu.com',//广告链接地址。
    
    'danmuqidong' => '1',//播放器弹幕启动开关，参数1为开启，参数0为关闭。
    
    'dmapi' => 'https://bjson.cf/dmku/',//弹幕库地址,可用远程弹幕库需支持xml，例如http://www.baidu.com/dmku/。
    
    'sendtime' => 3,//发送弹幕的间隔时间限制，单位为秒。
    
    'pbgjz' => '操ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwsyz',//弹幕敏感关键字限制。
);
    if (!extension_loaded('redis')) {die('php未安装redis扩展插件');exit;}