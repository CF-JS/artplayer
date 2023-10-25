<?php
class sql {
    public static $sql ;
    private static $type ;
    
    function __construct($type) {
        global $dbconfig ;
        self::$type = $type;
        if ($type === 'mysql') {
            
            self::mysql数据库连接($dbconfig['host'],$dbconfig['user'],$dbconfig['pwd'],$dbconfig['dbname']);
        } 
        if ($type === 'sqlite') {
            self::sqlite数据库连接($dbconfig['host']);
        }
        
    }

    private static function mysql数据库连接($hostname,$username,$password,$db) {
        try {
            $sql = new PDO("mysql:host=$hostname;dbname=$db;", $username, $password);
            $sql->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$sql = $sql ;
        } catch (PDOException $e) {
            showmessage(-1,'数据库错误:'.$e->getMessage());
        }
    }
    
    private static function sqlite数据库连接($path) {
        try {
            $sql = new PDO("sqlite:$path");
            $sql->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$sql = $sql ;
        } catch (PDOException $e) {
            showmessage(-1,'数据库错误:'.$e->getMessage());
        }
    }
    
    public static function 插入_弹幕($data){
        try {
            $query = null;
            if (self::$type == 'sqlite') $query = ' OR';
            $stmt = self::$sql->prepare("INSERT{$query} IGNORE INTO danmaku_list (id, type, text, color, size, videotime,referer,ip, time) VALUES (:id, :type, :text, :color,:size, :videotime,:referer,:ip, :time)");
            $stmt->bindParam(':text', strip_tags($data['text']));
            $stmt->bindParam(':id', strip_tags($data['id']));
            $stmt->bindParam(':type', strip_tags($data['type']));
            $stmt->bindParam(':color', strip_tags($data['color']));
            $stmt->bindParam(':size', strip_tags($data['size']));
            $stmt->bindParam(':videotime', strip_tags($data['time']));
            $stmt->bindParam(':referer', strip_tags($data['referer']));
            $stmt->bindParam(':ip', $_SERVER['REMOTE_ADDR']);
            //@$stmt->bindParam(':time', date('m-d H:i',time()));
            @$stmt->bindParam(':time', time());
            $stmt->execute();
        } catch (PDOException $e) {
            showmessage(-1,'数据库错误:'.$e->getMessage());
        }
        
    }
    
    public static function 举报_弹幕($text){
        try {
            $query = null;
            if (self::$type == 'sqlite') $query = ' OR';
            $stmt = self::$sql->prepare("INSERT{$query} IGNORE INTO danmaku_report (id,cid,text, type,time,ip,referer) VALUES (:id,:cid,:text, :type,:time,:ip,:referer)");
            $stmt->bindParam(':id', strip_tags($_GET['title']));
            $stmt->bindParam(':cid', strip_tags($_GET['cid']));
            $stmt->bindParam(':text', strip_tags($_GET['text']));
            $stmt->bindParam(':type', strip_tags($_GET['type']));
            //@$stmt->bindParam(':time', date('m-d H:i',time()));
            @$stmt->bindParam(':time', time());
            $stmt->bindParam(':ip', strip_tags($_GET['user']));
            $stmt->bindParam(':referer', strip_tags($_GET['referer']));
            $stmt->execute();
        } catch (PDOException $e) {
            showmessage(-1,'数据库错误:'.$e->getMessage());
        }
    }
    public static function 插入_发送弹幕次数($ip){
        try {
            $query = null;
            if (self::$type == 'sqlite') $query = ' OR';
            $stmt = self::$sql->prepare("INSERT{$query} IGNORE INTO danmaku_ip (ip, time) VALUES (:ip, :time)");
            $stmt->bindParam(':ip', $ip);
            @$stmt->bindParam(':time', time());
            $stmt->execute();
        } catch (PDOException $e) {
            showmessage(-1,'数据库错误:'.$e->getMessage());
        }
    }
    
    public static function 搜索_弹幕池($key){
        try {
            $stmt = self::$sql->prepare("SELECT * FROM danmaku_list WHERE text like '%$key%' or id like '%$key%' ORDER BY time DESC");
            $stmt->bindParam(':key', $key);
            $stmt->execute();
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $data = $stmt->fetchAll();
            return $data;
        } catch (PDOException $e) {
            showmessage(-1,'数据库错误:'.$e->getMessage());
        }
    }
    public static function 查询_弹幕池($id){
        try {
            $stmt = self::$sql->prepare("SELECT * FROM danmaku_list WHERE id=:id ORDER BY videotime asc");
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $data = $stmt->fetchAll();
            return $data;
        } catch (PDOException $e) {
            showmessage(-1,'数据库错误:'.$e->getMessage());
        }
    }
    public static function 显示_弹幕列表(){
        try {
			global $dbconfig ;
			$page = 1;
			if(isset($_GET['page'])){
				$page = $_GET['page'];
			}
			$limit=$_GET['limit'];
			$conn = @new mysqli($dbconfig['host'],$dbconfig['user'],$dbconfig['pwd'],$dbconfig['dbname']);
			$conn -> set_charset('utf8');
			$sql = "select count(*) from danmaku_list ORDER BY time DESC";
			$res = $conn -> query($sql);
			$length = $res ->fetch_row();
			$count = $length[0];
			$index = ($page-1)*$limit;
            $stmt = self::$sql->prepare("SELECT * FROM danmaku_list ORDER BY time DESC limit $index,".$limit);
            $stmt->execute();
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $data = $stmt->fetchAll();
           return $data;
         } catch (PDOException $e) {
            showmessage(-1,'数据库错误:'.$e->getMessage());
        }
    }
    public static function 显示_举报列表(){
        try {
			global $dbconfig ;
			$page = 1;
			if(isset($_GET['page'])){
				$page = $_GET['page'];
			}
			$limit=$_GET['limit'];
			$conn = @new mysqli($dbconfig['host'],$dbconfig['user'],$dbconfig['pwd'],$dbconfig['dbname']);
			$conn -> set_charset('utf8');
			$sql = "select count(*) from danmaku_report ORDER BY time DESC";
			$res = $conn -> query($sql);
			$length = $res ->fetch_row();
			$count = $length[0];
			$index = ($page-1)*$limit;
            $stmt = self::$sql->prepare("SELECT * FROM danmaku_report ORDER BY time DESC limit $index,".$limit);
            $stmt->execute();
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $data = $stmt->fetchAll();
           return $data;
         } catch (PDOException $e) {
            showmessage(-1,'数据库错误:'.$e->getMessage());
        }
    }
    public static function 删除_弹幕数据($id){
        try {
            global $dbconfig ;
			$conn = @new mysqli($dbconfig['host'],$dbconfig['user'],$dbconfig['pwd'],$dbconfig['dbname']);
            $conn -> set_charset('utf8');
            if($_GET['type']=="list"){
                $sql="DELETE FROM danmaku_report WHERE cid={$id}";
                $result="DELETE FROM danmaku_list WHERE cid={$id}";
                $conn -> query($sql);
                $conn -> query($result);
            }else if($_GET['type']=="report"){
                $sql="DELETE FROM danmaku_report WHERE cid={$id}";
               $conn -> query($sql); 
            }
        } catch (PDOException $e) {
            showmessage(-1,'数据库错误:'.$e->getMessage());
        }
    }
    public static function 编辑_弹幕($cid){
        try {
            global $dbconfig ;
            $text = $_POST['text'];
            $color = $_POST['color'];
			$conn = @new mysqli($dbconfig['host'],$dbconfig['user'],$dbconfig['pwd'],$dbconfig['dbname']);
            $conn -> set_charset('utf8');
            $sql="UPDATE danmaku_list SET text='$text',color='$color' WHERE cid=$cid";
            $result="UPDATE danmaku_report SET text='$text',color='$color' WHERE cid=$cid";
            $conn -> query($sql);
            $conn -> query($result);
            
        } catch (PDOException $e) {
            showmessage(-1,'数据库错误:'.$e->getMessage());
        }
    }
    
    public static function 查询_发送弹幕次数($ip){
        try {
            $stmt = self::$sql->prepare("SELECT * FROM danmaku_ip WHERE ip=:ip LIMIT 1");
            $stmt->bindParam(':ip', $ip);
            $stmt->execute();
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $data = $stmt->fetchAll();
            return $data;
        } catch (PDOException $e) {
            showmessage(-1,'数据库错误:'.$e->getMessage());
        }
    }
    
    public static function 更新_发送弹幕次数($ip,$time = 'time'){
        try {
            $query = "UPDATE danmaku_ip SET c=c+1,time=$time WHERE ip = :ip";
            if (is_int($time)) $query = "UPDATE danmaku_ip SET c=1,time=$time WHERE ip = :ip"; 
            $stmt = self::$sql->prepare($query);
            
            $stmt->bindParam(':ip', $ip);
            $stmt->execute();
        } catch (PDOException $e) {
            showmessage(-1,'数据库错误:'.$e->getMessage());
        }
    }
	
} 