<template>
    <d-form :cols="3" :schema='gridSchema' :label-width="170">
        <d-select-field position="bottom" property="search1" :model='model'  :editor-width="300" :label-width="11" :placeh="sel"></d-select-field>
        <d-text-field :editor-width="200" property="search2" :model="model" v-show="showTimePic"></d-text-field>
        <d-text-field :editor-width="200" property="search3" :model="model" v-show="showText" ></d-text-field>

        <d-field :label-width="10">
            <!-------------------------------------------TODO----------------------------------------->
            <d-button type="primary" @click="search()">搜索</d-button>
            <!-------------------------------------------TODO----------------------------------------->
            <d-button type="primary" @click="batchdel()">批量删除</d-button>
            <d-button type="primary" @click="addfenlei()">添加分类</d-button>
        </d-field>

    </d-form>

    <d-grid :data="gridData" :schema="gridSchema" height="700">
        <d-grid-column type="selection"></d-grid-column>
        <d-grid-column property="id"></d-grid-column>
        <d-grid-column property="classes"></d-grid-column>
        <d-grid-column property="childClassNum"></d-grid-column>
        <d-grid-column property="sort"></d-grid-column>
        <d-grid-column property="date"></d-grid-column>
        <d-grid-column property="status"></d-grid-column>
        <d-grid-column label="操作">
            <d-button @click="$parent.$parent.$parent.zileiguanli(row.id)">子类管理</d-button>
            <!-------------------------------------------TODO----------------------------------------->
            <d-button @click="$parent.$parent.$parent.del(row.id)">删除</d-button>
        </d-grid-column>
    </d-grid>

    <d-pagination :item-count="itemCount" :current-page="1"></d-pagination>

</template>

<script>
    import { Schema } from 'vue-desktop'
    import {editZhuanJi} from '../../store/actions'
    import {MessageBox} from 'vue-desktop'

    var griddata = [];
    var search1 = ['id','clsnm','count','sort','date'];
    var width = document.body.offsetWidth;

    var gridSchema = new Schema({
        id: {
            label: 'ID',
        },
        classes: {
            label: '分类名称',
        },
        childClassNum: {
            label: '子类数量',
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
                '分类名称': 1,
                '子类数量': 2,
                '排序': 3,
                '添加时间': 4,
            }
        },
        search2:{
            label:'请输入想要搜索的时间:',
            type: 'date',
            default() {
                return new Date();
            }
        },
        search3:{
            label:'请输入想要搜索的内容:'
        }
    });

    export default {

        data() {
            return {
                sel:'请选择想要搜索的项目',
                title: 'PC',
                visible: true,
                selection: [],
                pageTotal:10,
                search1:search1,
                model: gridSchema.newModel(),
                gridSchema: gridSchema,
                gridData:gridSchema.format([]),
                width:width,
                showTimePic:false,
                showText:true
            };
        },
        methods: {
            addfenlei(){
                MessageBox({
                    title: 'Alert',
                    message:'nothing'
                });
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
                                level:'cls'
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
            zileiguanli(id){
                this.$route.router.go({name:'zlGL',query:{clsid:id}})
            },
            search(){
                var _self = this;
                var index = this.model.search1;
                var col = this.search1[index];
                var content = this.model.search2;

                $.ajax({
                    type:'post',
                    url:'./php/searchbizhi.php',
                    data:{
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
                editZJ:editZhuanJi
            }
        },
        components: {
            pagintion: require('../pagination.vue')
        },
        route: {
            data: function (transition) {
                $.ajax({
                    type: "POST",
                    url: "./php/bizhifenlei.php",
                    data: {
                        table:'fulei'
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

                this.showTimePic = hash == 4;
                this.showText = !this.showTimePic
            }
        }
    };
</script>
