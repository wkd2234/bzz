<?php

require(__DIR__.'/config.php');

Class DB_Connect{
    private $mysqli;

    function __construct(){
        $this->mysqli = $this->dbConnect();
    }

    private function dbConnect(){
        try {
            $mysqli = new mysqli(DB_SEVER,DB_USER,DB_PSW,DB_SCHEMA);
            $mysqli->set_charset('utf-8');
 	    } catch(mysqli_sql_exception $e) {
            throw $e;
        }
        return $mysqli;
    }

    public function getDbConnection(){
        return $this->mysqli;
    }
}
