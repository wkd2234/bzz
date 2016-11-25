<template>
    <d-form :cols="3" :schema='gridSchema' :label-width="180">
        <d-select-field position="bottom" property="search1" :model='model' :editor-width="300" :placeh="sel"></d-select-field>

        <d-text-field :editor-width="300" property="search2" :model="model" v-show="showTimePic"></d-text-field>
        <d-select-field :editor-width="300" property="search3" :model="model" v-show="showSel" parent-property="search1"></d-select-field>
        <d-text-field :editor-width="300" property="search4" :model="model" v-show="showText" ></d-text-field>

        <d-field>
            <!-------------------------------------------TODO----------------------------------------->
            <d-button type="primary" @click="search()">搜索</d-button>
            <!-------------------------------------------TODO----------------------------------------->
            <d-button type="primary" @click="mutipledel()">批量删除</d-button>
            <d-button type="primary" @click="editZJ(null,null,true,this)">添加壁纸专辑</d-button>
        </d-field>

    </d-form>

    <d-grid :data="gridData" :schema="gridSchema" height="700"  :selection.sync="selection">
        <d-grid-column type="selection"></d-grid-column>
        <d-grid-column property="id"></d-grid-column>
        <d-grid-column property="ZhuanJi"></d-grid-column>
        <d-grid-column property="classes"></d-grid-column>
        <d-grid-column property="childClass"></d-grid-column>
        <d-grid-column property="sort"></d-grid-column>
        <d-grid-column property="date"></d-grid-column>
        <d-grid-column property="status"></d-grid-column>
        <d-grid-column label="操作" type="operate">
            <d-button @click="$parent.$parent.$parent.bizhiGuanli(row.id)">壁纸管理</d-button>
            <d-button @click="$parent.$parent.$parent.editZJ(row.ZhuanJi,row.id,false,$parent.$parent.$parent)">编辑</d-button>
            <d-button @click="$parent.$parent.$parent.del(row.id)">删除</d-button>
        </d-grid-column>
    </d-grid>

    <d-pagination :item-count="itemCount" current-page="1"></d-pagination>
</template>

<script>
    import { Schema } from 'vue-desktop'
    import {editZhuanJi} from '../../store/actions'
    import {MessageBox} from 'vue-desktop'
    import {bzDelete,isInArr} from '../../common/bzcommon'

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
            label: '请选择需要搜索的项目:',
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
            label:'请输入想要搜索的内容',
            type: 'date',
            default() {
                return new Date();
            }
        },
        search3:{
            label:'请输入想要搜索的内容',
            mapping:function(model) {
                return new Promise(function(resolve) {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', './php/getAllCls.php', true);
                    xhr.onload = function(response) {
                        var remoteMapping = model.search1;
                        resolve(JSON.parse(response.target.responseText)[remoteMapping]);
                    };
                    xhr.send();
                });
            }
        },
        search4:{
            label:'请输入想要搜索的内容',
        }
    }


    var gridSchema = new Schema(inSchema);

    var griddata = [];
    var search1 = ['id','nm','cls','c_cls','sort','date'];

    export default {
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
                gridData:gridSchema.format(griddata),
                showTimePic:false,
                showText:true,
                showSel:false
            };
        },
        route: {
            data: function (transition) {
                $.ajax({
                    type: "POST",
                    url: "./php/pc_1.php",
                    data: {
                        custer:'pc',
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
        methods: {
            showTime(){
                if(!this.model)
                    return ''
                else
                    return this.model.search1 == 5
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
                        bzDelete(_self,id,'pc','./php/pc_del.php').singleDel();
                    }
                    else {
                        MessageBox('未删除')
                    }
                });
            },

            bizhiGuanli(id){
                this.$route.router.go({name:'pcBZGL',query:{pczjid:id}})
            },
            //批量删除
            mutipledel(){
                var id = null;
                bzDelete(this,id,'pc','./php/pc_del.php').mutipleDel();
            },
            search(){
                var _self = this;
                var index = this.model.search1;
                var col = this.search1[index];
                var content = this.model.search2;

                console.log(col);
                console.log(content);

                $.ajax({
                    type:'post',
                    url:'./php/search.php',
                    data:{
                        custer:'pc',
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
            }
        },
        components: {
            pagintion: require('../pagination.vue')
        },
        watch:{
            'model.search1':function(val,oldVal){
                var hash = this.model.search1;

                this.showText = isInArr(hash,[0,1,4])
                this.showSel = isInArr(hash,[2,3])
                this.showTimePic = this.model.search1 == 5
            }
        }
    };
</script>
