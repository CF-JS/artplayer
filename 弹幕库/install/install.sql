DROP TABLE IF EXISTS `danmaku_report`;</explode>
create table `danmaku_report` (
`cid` int(8) NOT NULL COMMENT '弹幕ID',
`id` varchar(128) NOT NULL COMMENT '弹幕池id',
`text` varchar(128) NOT NULL COMMENT '举报内容',
`type` varchar(128) NOT NULL COMMENT '举报类型',
`time` varchar(128) NOT NULL COMMENT '举报时间',
`ip` varchar(12) NOT NULL COMMENT '发送弹幕的IP地址',
`referer` text NOT NULL COMMENT '弹幕来源网址',
PRIMARY KEY (`text`),
KEY `id` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;</explode>

DROP TABLE IF EXISTS `danmaku_ip`;</explode>
CREATE TABLE `danmaku_ip` (
  `ip` varchar(12) NOT NULL COMMENT '发送弹幕的IP地址',
  `c` int(1) NOT NULL DEFAULT '1' COMMENT '规定时间内的发送次数',
  `time` int(10) NOT NULL,
  PRIMARY KEY (`ip`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;</explode>

DROP TABLE IF EXISTS `danmaku_list`;</explode>
CREATE TABLE `danmaku_list` (
  `id` varchar(32) NOT NULL COMMENT '弹幕池id',
  `cid` int(8) NOT NULL AUTO_INCREMENT COMMENT '弹幕id',
  `type` varchar(128) NOT NULL COMMENT '弹幕类型',
  `text` varchar(128) NOT NULL COMMENT '弹幕内容',
  `color` varchar(128) NOT NULL COMMENT '弹幕颜色',
  `size` varchar(128) NOT NULL COMMENT '弹幕大小',
  `videotime` float(24,3) NOT NULL COMMENT '时间点',
  `ip` varchar(128) NOT NULL COMMENT '用户ip',
  `time` int(10) NOT NULL COMMENT '发送时间',
  `referer` text NOT NULL COMMENT '弹幕来源网址',
  PRIMARY KEY (`cid`),
  KEY `id` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;</explode>

DROP TABLE IF EXISTS `danmaku_config`;</explode>
create table `danmaku_config` (
`k` varchar(32) NOT NULL,
`v` text NULL,

PRIMARY KEY  (`k`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;</explode>

INSERT INTO `danmaku_config` (`k`, `v`) VALUES
('Artplayer播放器api版', 'QQ434684601');