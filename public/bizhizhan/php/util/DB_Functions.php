<?php
require(__DIR__.'/DB_Connect.php');

class DB_Functions{
    private $mysqli;

    function __construct(){
        $dbc = new DB_Connect();
        $this->mysqli = $dbc->getDbConnection();

    }

    /*
     * @func select_multiple 查询多条信息
     *  @table 表的名称
     *  @now   查询位置 默认0
     *  @limit 查询条数 默认6
     */
    public function select_multiple($table,$now=0,$limit=6){
        $sql = "select * from `{$table}` limit {$now},{$limit};";

        if($query = $this->mysqli->query($sql)){
            return $query;
        }else{
            throw new Exception('查询失败');
        }
    }

    /*
     * @func select_single 查询单个信息
     *  @id     id
     *  @table  表名
     */
    public function select_single($id,$table){
        $sql = "select * from `{$table}` where `id` = {$id};";

        if($query = $this->mysqli->query($sql)){
            return $query;
        }else{
            throw new Exception('查询失败');
        }
    }

    /*
     * @func select_by_sort 查询多条且排序 从0开始
     *  @table 表名
     *  @item  排序的字段
     *  @end   查询条数
     */
    public function select_by_sort($table,$item,$end){
        $sql = "select * from `{$table}` order by `{$item}` desc limit 0,{$end}";

        if($query = $this->mysqli->query($sql)){
            return $query;
        }else{
            throw new Exception('查询失败');
        }
    }

    /*
     * @func select_where 条件查询 从0开始
     *  @query_item 查询条件,可以是单个字段 也可以是多个字段的数组
     *  @query_content  查询内容
     *  @table          表名
     *  @sort           排序的字段
     *  @end            查询条数
     */
    public function select_where($query_item,$query_content,$table,$sort,$end=15){
        if(!is_array($query_item))
            $query_item = array($query_item);
        if(!is_array($query_content))
            $query_content = array($query_content);

        if(sizeof($query_content) != sizeof($query_item))
            throw new Exception('查询项与查询内容个数不一致');

        $sql = "select * from `{$table}` where ";

        for($i = 0 ;$i<sizeof($query_item);$i++){
            $sql .= "`{$query_item[$i]}` = '{$query_content[$i]}'";
            if($i != sizeof($query_item)-1)
                $sql .= " and ";
        }

        if(isset($sort))
            $sql .= " order by `{$sort}` desc limit 0,{$end}";

        if($query = $this->mysqli->query($sql)){
            return $query;
        }else{
            throw new Exception('查询失败');
        }
    }

    /*
     * sort
     * limit
     */
    public function select_union_all($table,$querys){
        $len = sizeof($querys);
        if(sizeof($table) != $len)
            return $this;

        $sql = '';
        for($i=0;$i<$len;$i++){
            $sql .= "(select * from `{$table[$i]}` order by `{$querys[$i]['sort']}` limit {$querys[$i]['start']} , {$querys[$i]['end']})";
            if($i<$len-1){
                $sql .= " union all ";
            }
        }


        if($query = $this->mysqli->query($sql)){
            return $query;
        }else{
            throw new Exception('查询失败');
        }
    }
}