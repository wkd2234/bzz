<template>

    <d-form :cols="3" :schema='gridSchema' :label-width="170">
        <d-select-field position="bottom" property="search1" :model='model'  :editor-width="300" :label-width="11" :placeh="sel"></d-select-field>
        <d-text-field :editor-width="200" property="search2" :model="model" v-if="showTimePic"></d-text-field>
        <d-text-field :editor-width="200" property="search4" :model="model" v-if="showText" ></d-text-field>
        <d-field :label-width="10">
            <!-------------------------------------------TODO----------------------------------------->
            <d-button type="primary" @click="search()">搜索</d-button>
            <!-------------------------------------------TODO----------------------------------------->
            <d-button type="primary" @click="mutipledel()">批量删除</d-button>

            <d-button type="primary" @click="addPaper()">添加壁纸</d-button>
            <d-button type="primary" @click="goback()">返回上一级</d-button>
            </d-field>
    </d-form>

    <d-grid :data="gridData" :schema="gridSchema" height="700" :fit="true">
        <d-grid-column type="selection"></d-grid-column>
        <d-grid-column property="id" :width="width/15"></d-grid-column>
        <d-grid-column property="classes" :width="width/12"></d-grid-column>
        <d-grid-column property="childClass" :width="width/12"></d-grid-column>
        <d-grid-column property="BiZhi" :width="width/12"></d-grid-column>
        <d-grid-column property="ZhuanJi" :width="width/12"></d-grid-column>
        <d-grid-column property="count" :width="width/20"></d-grid-column>
        <d-grid-column property="sort" :width="width/20"></d-grid-column>
        <d-grid-column property="date" :width="width/8"></d-grid-column>
        <d-grid-column property="status" :width="width/20"></d-grid-column>
        <d-grid-column label="操作" :width="width/8">
            <d-button @click="$parent.$parent.$parent.wenjianGuanli(row.id)">管理文件</d-button>
            <!-------------------------------------------TODO----------------------------------------->
            <d-button @click="$parent.$parent.$parent.del(row.id)">删除</d-button>
        </d-grid-column>
    </d-grid>

    <d-dialog title="添加壁纸" :visible.sync="dialogShow" width="500">
        <d-form :cols="1" :schema='gridSchema2' :data="gridDate2">
            <d-field property="ZhuanJi">{{zhuanJi}}</d-field>
            <d-text-field property="BiZhi" :model="dialogModel"></d-text-field>
            <d-text-field property="classes" :model="dialogModel"></d-text-field>
            <d-text-field property="sortValue" :model="dialogModel"></d-text-field>
            <d-radiogroup-field property="status" :model="dialogModel"></d-radiogroup-field>
            <d-field>
                <d-button type="primary" @click="sub()">确定</d-button>
                <d-button type="warning" @click="addPaper()">取消</d-button>
            </d-field>
        </d-form>
    </d-dialog>

    <d-pagination :item-count="itemCount" :current-page="1"></d-pagination>
</template>


<style>

</style>
<script>
    import { Schema } from 'vue-desktop'
    import {editZhuanJi} from '../../store/actions'
    import {getClass} from '../../store/getters'
    import {MessageBox} from 'vue-desktop'
    import {bzDelete,isInArr} from '../../common/bzcommon'

    var griddata = [];
    var search1 = ['id','bznm','count','sort','date'];
    var searchSel = new Object();
    var width = document.body.offsetWidth;

    var gridSchema = new Schema({

        id: {
            label: 'ID',
            required: true
        },

        ZhuanJi: {
            label: '专辑名称',
            required: true
        },

        BiZhi: {
            label: '壁纸名称'
        },

        classes: {
            label: '分类',
            required: true
        },

        childClass: {
            label: '子类',
            required: true
        },

        count: {
            label: '数量',
        },

        sort: {
            label: '排序'
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
                '壁纸名称':1,
                '数量':2,
                '排序': 3,
                '添加时间': 4,
            }
        },
        search2:{
            label:'请输入想要搜索的内容:',
            type: 'date',
            default() {
                return new Date();
            }
        },
        search4:{
            label:'请输入想要搜索的内容:',
        }
    });

    var gridSchema2 = new Schema({

        ZhuanJi: {
            label: '专辑名称:',
            require: true
        },

        BiZhi: {
            label: '壁纸名称:',
            require: true
        },

        classes: {
            label: '分类:',
            require: true
        },

        sortValue: {
            label: '排序值:',
            require: true,
            default(){
                return 1000
            }
        },

        status: {
            label: '状态:',
            mapping: {
                '正常': '0',
                '锁定': '1'
            },
            default:'0'
        }

    });

    export default {
        props:{
            custer:{
                type:String
            },
            url:{
                type:Array
            },
            data:{
                type:Array
            },
            zhuanJi:{
                type:String
            }
        },
        vuex:{
            getters:{
                getCls:getClass,
            }
        },
        data() {
            return {
                sel:'请选择想要搜索的项目',
                level:'bizhi',
                visible: true,
                selection: [],
                pageTotal:10,
                model: gridSchema.newModel(),
                dialogModel:gridSchema2.newModel(),
                gridSchema: gridSchema,
                gridSchema2: gridSchema2,
                dialogShow: false,
                gridData: gridSchema.format([]),
                search1:search1,
                showTimePic:false,
                showText:true,
                showSel:false,
                width:width
            };
        },
        methods: {
            addPaper(){
                if(this.gridData.length !== 0){
                    this.zhuanJi = this.gridData[0].ZhuanJi
                }
                this.dialogShow = !this.dialogShow;
            },
            goback: function () {
                this.$route.router.go({name:this.custer+'ZJGL'})
            },
            wenjianGuanli:function(id){
                var data = new Object();
                switch (this.custer) {
                    case 'pc':
                        data.pcbzid = id;
                        break;
                    case 'sj':
                        data.sjbzid = id;
                        break;
                    case 'ip':
                        data.ipbzid = id;
                        break;
                    default:
                        break;
                }
                this.$route.router.go({name:this.custer+'WJGL',query:data})
            },
            sub(){
                var _self = this;
                var zjid = this.$route.query[this.custer+'zjid'],
                        bznm = this.dialogModel.BiZhi,
                        cls = this.dialogModel.classes,
                        sort = Number(this.dialogModel.sortValue),
                        status = Number(this.dialogModel.status);

                $.ajax({
                    type:'POST',
                    url: "./php/addbizhi.php",
                    data:{
                        custer:_self.custer,
                        zjid:zjid,
                        bznm:bznm,
                        cls:cls,
                        sort:sort,
                        status:status
                    },
                    success: function(msh){
                        for(var key in _self.dialogModel){
                            _self.dialogModel[key] = '';
                        }
                        _self.dialogShow = !_self.dialogShow;
                        var json = [];
                        for (var i = 0;i<msh.length;i++) {
                            json[i] = {}
                            for(var key in msh[i]){
                                json[i][key] = msh[i][key]
                            }
                        }
                        _self.gridData = gridSchema.format(json);
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
                        bzDelete(_self,id,_self.custer,'./php/pc_del.php').singleDel();
                    }
                    else {
                        MessageBox('未删除')
                    }
                });
            },
            mutipledel(){
                var id = null;
                bzDelete(this,id,this.custer,'./php/pc_del.php').mutipleDel();
            },
            search(){
                var _self = this;
                var zjid = this.$route.query[this.custer+'zjid'];
                var index = this.model.search1;
                var col = this.search1[index];
                var content;

                if(index == 4){
                    content = this.model.search2;
                    var date = new Date(content)
                    var day = date.getDate();
                    if(day<10){
                        day = '0'+day
                    }
                    content = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+day
                }else {
                    content = this.model.search4;
                }

                $.ajax({
                    type:'post',
                    url:'./php/search.php',
                    data:{
                        id:zjid,
                        table:'bizhi',
                        col:col,
                        content:content,
                        custer:_self.custer,
                    },
                    success:function(msh){
                        var json = [];
                        for (var i = 0;i<msh.length;i++) {
                            json[i] = {}
                            for(var key in msh[i]){
                                json[i][key] = msh[i][key]
                            }
                        }
                        _self.gridData = gridSchema.format(json);
                    },
                    error:function(XMLHttpRequest,textStatus,errorThrown) {
                        console.log(XMLHttpRequest.status);
                        console.log(XMLHttpRequest.readyState);
                        console.log(textStatus);
                    }
                })
            }
        },
        ready(){
            this.dialogModel.classes = this.getCls.cls;
        },
        watch:{
            'model.search1':function(val,oldVal){
                var hash = this.model.search1;

                this.showTimePic = hash == 4
                this.showText = !this.showTimePic;
            },
            'data':function(val,oldVal){
                this.gridData = gridSchema.format(this.data)
            }
        }
    };
</script>
