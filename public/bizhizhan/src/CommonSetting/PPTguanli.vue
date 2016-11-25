<template>

    <d-form :cols="3" :schema='gridSchema' :label-width="170">
        <d-select-field position="bottom" property="search1" :model='model'  :editor-width="300" :label-width="11" :placeh="sel"></d-select-field>
        <d-text-field :editor-width="200" property="search3" :model="model" v-show="showTimePic"></d-text-field>
        <d-select-field :editor-width="200" property="search2" :model="model" v-show="showSel" parent-property="search1"></d-select-field>
        <d-text-field :editor-width="200" property="search4" :model="model" v-show="showText" ></d-text-field>

        <d-field :label-width="10">
            <!-------------------------------------------TODO----------------------------------------->
            <d-button type="primary">搜索</d-button>
            <!-------------------------------------------TODO----------------------------------------->
            <d-button type="primary" @click="mutipledel()">批量删除</d-button>
            <!------------todo----->
            <d-button type="primary" @click="editPPT('',null,true,this)">添加幻灯片</d-button>
            <d-button type="primary" @click="goback()">返回上一级</d-button>
        </d-field>
    </d-form>

    <d-grid :data="gridData" :schema="gridSchema" height="700">
        <d-grid-column type="selection"></d-grid-column>
        <d-grid-column property="id"></d-grid-column>
        <d-grid-column property="PPT"></d-grid-column>
        <d-grid-column property="weizhi"></d-grid-column>
        <d-grid-column property="sort"></d-grid-column>
        <d-grid-column property="date"></d-grid-column>
        <d-grid-column property="status"></d-grid-column>
        <d-grid-column label="操作">
            <!------------todo----->
            <d-button @click="$parent.$parent.$parent.editPPT(row.PPT,row.id,false,$parent.$parent.$parent)">编辑</d-button>
            <!-------------------------------------------TODO----------------------------------------->
            <d-button @click="$parent.$parent.$parent.del(row.id)">删除</d-button>
        </d-grid-column>
    </d-grid>

    <d-pagination :item-count="itemCount" :current-page="1"></d-pagination>

</template>


<style>

</style>
<script>
    import { Schema ,MessageBox} from 'vue-desktop'
    import {editPPT} from '../../store/actions'
    import {bzDelete,isInArr} from '../../common/bzcommon'

    var width = document.body.offsetWidth;

    var gridSchema = new Schema({

        id: {
            label: 'ID',
        },

        PPT: {
            label: '幻灯片名称',
        },

        weizhi: {
            label: '位置'
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
                '幻灯片名称': 1,
                '位置': 2,
                '排序': 3,
                '添加时间': 4
            }
        },
        search2:{
            label:'请选择需要搜索的位置:',
            mapping:{
                '首页':0,
                '电脑壁纸二级首页':1,
                '手机壁纸二级首页':2,
                'iPad壁纸二级首页':3
            }
        },
        search4:{
            label:'请输入想要搜索的内容:'
        },
        search3:{
            label:'请选择需要搜索的时间:',
            type:'date',
            default(){
                return new Date();
            }
        },
    });



    export default {
        data() {
            return {
                level:'',
                sel:'请选择需要搜索的项目:',
                title: 'b',
                visible: true,
                selection: [],
                pageTotal:10,
                model: gridSchema.newModel(),
                gridSchema: gridSchema,
                gridData: gridSchema.format([]),
                showTimePic:false,
                showSel:false,
                showText:true
            };
        },
        methods: {
            goback: function () {
                window.history.go(-1)
            },
            del:function(id){
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
                            url: "./php/bz_del.php",
                            data: {
                                id:id,
                                table:'`t_ppt`'
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
                bzDelete(this,id,'t_ppt','./php/cs_del.php').mutipleDel();
            },
        },
        vuex:{
            actions:{
                editPPT:editPPT
            }
        },
        route: {
            data: function (transition) {
                $.ajax({
                    type: "POST",
                    url: "./php/huandengpian.php",
                    data: "",
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
            'model.search1':function(newVal,oldVal){
                var hash = this.model.search1;

                this.showTimePic = hash == 4;
                this.showSel = hash == 2;
                this.showText = !this.showTimePic && !this.showSel;
            }
        }

    };
</script>
