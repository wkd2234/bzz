<template>
    <d-form :cols="3" :schema='gridSchema' :label-width="170">
        <d-select-field position="bottom" property="search1" :model='model'  :editor-width="300" :label-width="11" :placeh="sel"></d-select-field>
        <d-text-field :editor-width="200" property="search2" :model="model" v-show="showTimePic"></d-text-field>
        <d-text-field :editor-width="200" property="search3" :model="model" v-show="showText" ></d-text-field>

        <d-field :label-width="10">
            <!-------------------------------------------TODO----------------------------------------->
            <d-button type="primary">搜索</d-button>
            <!-------------------------------------------TODO----------------------------------------->
            <d-button type="primary" @click="mutipledel()">批量删除</d-button>
            <d-button type="primary"  @click="addClass()">添加分类</d-button>
            <d-button type="primary" @click="goback()">返回上一级</d-button>

        </d-field>

    </d-form>

    <d-grid :data="gridData" :schema="gridSchema" height="700">
        <d-grid-column type="selection"></d-grid-column>
        <d-grid-column property="id"></d-grid-column>
        <d-grid-column property="parent"></d-grid-column>
        <d-grid-column property="child"></d-grid-column>
        <d-grid-column property="sort"></d-grid-column>
        <d-grid-column property="date"></d-grid-column>
        <d-grid-column property="status"></d-grid-column>
        <d-grid-column label="操作">
            <!-------------------------------------------TODO----------------------------------------->
            <d-button>编辑</d-button>
            <d-button @click="$parent.$parent.$parent.del(row.id)">删除</d-button>
        </d-grid-column>
    </d-grid>

    <d-dialog title="子类管理" :visible.sync="dialogShow" width="300">
        <d-form :cols="1" label-width="80" :schema="dialogSchema">
            <d-text-field property="name" :model="dialogModel"></d-text-field>
            <d-text-field property="sort" :model="dialogModel"></d-text-field>
            <d-field>
                <d-button type="primary" @click="sub()">确定</d-button>
                <d-button type="warning" @click="addClass()">取消</d-button>
            </d-field>
        </d-form>
    </d-dialog>

    <d-pagination :item-count="itemCount" :current-page="1"></d-pagination>

</template>

<script>
    import { Schema } from 'vue-desktop'
    import {MessageBox} from 'vue-desktop'
    import {bzDelete,isInArr} from '../../common/bzcommon'

    var search1 = ['id','c_clsnm','sort','date'];
    var width = document.body.offsetWidth;

    var gridSchema = new Schema({
        id: {
            label: 'ID',
        },
        parent: {
            label: '父类名称',
        },
        child: {
            label: '子类名称',
        },
        sort: {
            label: '排序',
        },
        date: {
            label: '添加时间'
        },
        status: {
            label: '状态',
            mapping: {
                '正常': '0',
                '锁定': '1'
            }
        },
        search1: {
            mapping: {
                'id': 0,
                '子类名称': 1,
                '排序': 2,
                '添加时间': 3,
            }
        },
        search2:{
            label:'请输入想要搜索的时间:',
            type:'date',
            default(){
                return new Date()
            }
        },
        search3:{
            label:'请输入想要搜索的内容:'
        }
    });

    var dialogSchema = new Schema({
        name:{
            label:'子类名称:'
        },
        sort:{
            label:'排序值:',
            default:1000
        }
    })


    export default {

        data() {
            return {
                level:'',
                sel:'请选择想要搜索的项目',
                visible: true,
                selection: [],
                pageTotal:10,
                search1:search1,
                model: gridSchema.newModel(),
                dialogModel:dialogSchema.newModel(),
                dialogSchema:dialogSchema,
                gridSchema: gridSchema,
                gridData:gridSchema.format([]),
                dialogShow:false,
                showTimePic:false,
                showText:true,
                width:width
            };
        },
        methods: {
            addClass(){
                this.dialogShow = !this.dialogShow;
            },
            goback: function () {
                window.history.go(-1)
            },
            sub(){
                var _self = this;
                var clsid = this.$route.query.clsid;

                var name = this.dialogModel.name;
                var sort = this.dialogModel.sort
                $.ajax({
                    type:'post',
                    url:'./php/addCcls.php',
                    data:{
                        clsid:clsid,
                        c_clsnm:name,
                        sort:sort
                    },
                    success:function(msh){
                        console.log(msh)
                        _self.dialogShow = !_self.dialogShow;
                        setTimeout(function(){
                            top.location.reload();
                        },500)
                    },
                    error:function(XMLHttpRequest,textStatus,errorThrown) {
                        console.log(XMLHttpRequest.status);
                        console.log(XMLHttpRequest.readyState);
                        console.log(textStatus);
                    }
                })
            },
            del(id){
                var _self = this;
                MessageBox({
                    title: 'Alert',
                    message: '确认删除'+id+'?',
                    showCancelButton: true,
                    type: 'warning'
                },function(action){
                    if (action==='confirm'){
                        $.ajax({
                            type: "POST",
                            url: "./php/bzfl_del.php",
                            data: {
                                id:id,
                                level:'ccls'
                            },
                            success: function(msh){
                                MessageBox({
                                    title: 'Alert',
                                    message:'已删除'+id
                                });
                                var arr = _self.gridData.filter(function(item){
                                    return item['id'] != id
                                })

                                _self.gridData = arr;

                            },
                            error:function(XMLHttpRequest,textStatus,errorThrown) {
                                console.log(XMLHttpRequest.status);
                                console.log(XMLHttpRequest.readyState);
                                console.log(textStatus);
                            }
                        })
                    }
                    else {
                        MessageBox('未删除')
                    }
                });
            },
            mutipledel(){
                var id = null;
                bzDelete(this,id,'bz_c_cls','./php/cs_del.php').mutipleDel();
            },
        },
        components: {
            pagintion: require('../pagination.vue')
        },
        route:{
            data: function (transition) {
                $.ajax.call(this,{
                    type:'POST',
                    url: "./php/bizhifenlei.php",
                    data:{
                        table:'zilei',
                        clsid:this.$route.query.clsid
                    },
                    success: function(msh){
                        var json = [];
                        for (var i = 0;i<msh.length;i++) {
                            json[i] = {}
                            for(var key in msh[i]){
                                json[i][key] = msh[i][key]
                            }
                        }
                        transition.next({gridData:gridSchema.format(json)})
                    },
                    error:function(XMLHttpRequest,textStatus,errorThrown) {
                        console.log(XMLHttpRequest.status);
                        console.log(XMLHttpRequest.readyState);
                        console.log(textStatus);
                    }
                });
            }
        },
        watch:{
            'model.search1':function(val,oldVal){
                var hash = this.model.search1;

                this.showTimePic = hash == 3;
                this.showText = !this.showTimePic
            }
        }

    };
</script>
