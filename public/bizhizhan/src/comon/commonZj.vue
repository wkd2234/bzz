<template>
    <d-form :cols="3" :schema='gridSchema' :label-width="170">
        <d-select-field position="bottom" property="search1" :model='model' :label-width="11" :placeh="sel"></d-select-field>

        <d-text-field :editor-width="250" property="search2" :model="model" v-if="showTimePic"></d-text-field>
        <d-select-field :editor-width="250" property="search3" :model="model" v-if="showSel" parent-property="search1"></d-select-field>
        <d-text-field :editor-width="250" property="search4" :model="model" v-if="showText" ></d-text-field>

        <d-field :label-width="100">
            <!-------------------------------------------TODO----------------------------------------->
            <d-button type="primary" @click="search()">搜索</d-button>
            <!-------------------------------------------TODO----------------------------------------->
            <d-button type="primary" @click="mutipledel()">批量删除</d-button>
            <d-button type="primary" @click="editZJ(null,null,true,this)">添加壁纸专辑</d-button>
        </d-field>

    </d-form>

    <d-grid :data="gridData" :schema="gridSchema" height="700" :fit='true' :selection.sync="selection">
        <d-grid-column type="selection"></d-grid-column>
        <d-grid-column property="id" :width="width/10"></d-grid-column>
        <d-grid-column property="ZhuanJi" :width="width/10"></d-grid-column>
        <d-grid-column property="classes" :width="width/10"></d-grid-column>
        <d-grid-column property="childClass" :width="width/10"></d-grid-column>
        <d-grid-column property="sort" :width="width/20"></d-grid-column>
        <d-grid-column property="date" :width="width/7"></d-grid-column>
        <d-grid-column property="status" :width="width/20"></d-grid-column>
        <d-grid-column label="操作" type="operate" :width="width/5">
            <d-button @click="$parent.$parent.$parent.bizhiGuanli(row.id,row.classes)">壁纸管理</d-button>
            <d-button @click="$parent.$parent.$parent.editZJ(row.ZhuanJi,row.id,false,$parent.$parent.$parent)">编辑</d-button>
            <d-button @click="$parent.$parent.$parent.del(row.id)">删除</d-button>
        </d-grid-column>
    </d-grid>

    <d-pagination :item-count="itemCount" :current-page="1"></d-pagination>
</template>

<script>
    import { Schema } from 'vue-desktop'
    import {editZhuanJi,historyZjid,editCls} from '../../store/actions'
    import {MessageBox} from 'vue-desktop'
    import {bzDelete,isInArr} from '../../common/bzcommon'

    var griddata = [];
    var search1 = ['id','nm','cls','c_cls','sort','date'];
    var searchSel = new Object();
    var width = document.body.offsetWidth;


    var inSchema = {
        id: {
            label: 'ID',
        },
        ZhuanJi: {
            label: '专辑名称',
        },
        classes: {
            label: '分类',
        },
        childClass: {
            label: '子类',
        },
        sort: {
            label: '排序',
        },
        date: {
            label: '添加时间',
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
                '专辑名称': 1,
                '分类': 2,
                '子类': 3,
                '排序': 4,
                '添加时间': 5,
            }
        },
        search2:{
            label:'请输入想要搜索的内容:',
            type: 'date',
            default() {
                return new Date();
            }
        },
        search3:{
            label:'请输入想要搜索的内容:',
            mapping:function(model) {
                return new Promise(function(resolve) {
                    var xhr = new XMLHttpRequest();
                    var output;
                    xhr.open('GET', './php/getAllCls.php', true);
                    xhr.onload = function(response) {
                        var remoteMapping = model.search1;
                        output = JSON.parse(response.target.responseText)[remoteMapping];
                        for(var key in output){
                            var newKey = output[key]
                            searchSel[newKey] = key;
                        }
                        console.log(searchSel)
                        resolve(JSON.parse(response.target.responseText)[remoteMapping]);
                    };
                    xhr.send();
                });
            }
        },
        search4:{
            label:'请输入想要搜索的内容:',
        }
    }


    var gridSchema = new Schema(inSchema);

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
            }
        },
        data() {
            return {
                sel:'请选择想要搜索的项目',
                title: 'PC',
                level:'zhuanji',
                visible: true,
                selection: [],
                pageTotal:10,
                search1:search1,
                model: gridSchema.newModel(),
                gridSchema: gridSchema,
                gridData:gridSchema.format([]),
                showTimePic:false,
                showText:true,
                showSel:false,
                width:width
            };
        },
        ready(){
            this.gridData = gridSchema.format(this.data);
        },
       /* computed:{
            getData:function(){
                this.gridSchema
                return gridSchema.format(this.data)
            }
        },*/
        methods: {
            del(id){
                var _self = this;
                MessageBox({
                    title: 'Alert',
                    message: '确认删除'+id+'?',
                    showCancelButton: true,
                    type: 'warning'
                },function(action){
                    if (action==='confirm'){
                        bzDelete(_self,id,_self.custer,_self.url[1]).singleDel();
                    }
                    else {
                        MessageBox('未删除')
                    }
                });
            },
            bizhiGuanli(id,cls){
                var data = new Object();
                switch (this.custer) {
                    case 'pc':
                        data.pczjid = id;
                        break;
                    case 'sj':
                        data.sjzjid = id;
                        break;
                    case 'ip':
                        data.ipzjid = id;
                        break;
                    default:
                        break;
                }
                this.editCls(cls);
                this.historyZjid(id);
                this.$route.router.go({name:this.custer+'BZGL',query:data})
            },
            //批量删除
            mutipledel(){
                var id = null;
                bzDelete(this,id,this.custer,this.url[1]).mutipleDel();
            },
            search(){
                var _self = this;
                var index = this.model.search1;
                var col = this.search1[index];
                var content;

                //todo switch
                if(index == 0 || index == 1 || index == 4){
                    content = this.model.search4;
                }else if(index == 2 || index == 3){
                    content = searchSel[this.model.search3];
                }else if(index == 5){
                    content = this.model.search2;
                    var date = new Date(content)
                    var day = date.getDate();
                    if(day<10){
                        day = '0'+day
                    }
                    content = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+day
                }


                $.ajax({
                    type:'post',
                    url:_self.url[2],
                    data:{
                        custer:_self.custer,
                        table:'zhuanji',
                        col:col,
                        content:content
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
        vuex:{
            actions:{
                editZJ:editZhuanJi,
                historyZjid:historyZjid,
                editCls:editCls
            }
        },
        watch:{
            'model.search1':function(val,oldVal){
                var hash = this.model.search1;

                this.showText = isInArr(hash,[0,1,4])
                this.showSel = isInArr(hash,[2,3])
                this.showTimePic = this.model.search1 == 5
            },
            'data':function(val,oldVal){
                this.gridData = gridSchema.format(this.data)
            }
        }
    };
</script>
