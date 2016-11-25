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
            <d-button type="primary" @click="editColor(null,null,true,this)">添加色系</d-button>

        </d-field>

    </d-form>

    <d-grid :data="gridData" :schema="gridSchema" height="700">
        <d-grid-column type="selection"></d-grid-column>
        <d-grid-column property="id"></d-grid-column>
        <d-grid-column property="color"></d-grid-column>
        <d-grid-column property="example" type="example">
            <span :style="{display:'inline-block',background:row.example,width:'10px',height:'10px'}"></span>
        </d-grid-column>
        <d-grid-column property="sort"></d-grid-column>
        <d-grid-column property="date"></d-grid-column>
        <d-grid-column property="status"></d-grid-column>
        <d-grid-column label="操作" type="operate">
            <d-button @click="$parent.$parent.$parent.editColor(row.color,row.id,false,$parent.$parent.$parent)">编辑</d-button>
            <!-------------------------------------------TODO----------------------------------------->
            <d-button @click="$parent.$parent.$parent.del(row.id)">删除</d-button>
        </d-grid-column>
    </d-grid>

    <d-pagination :item-count="itemCount" :current-page="1"></d-pagination>
</template>

<script>
    import { Schema } from 'vue-desktop'
    import {editColor} from '../../store/actions'
    import {MessageBox} from 'vue-desktop'
    import {bzDelete,isInArr} from '../../common/bzcommon'


    var width = document.body.offsetWidth;
    var search1 = ['id','color','sort','date'];

    var gridSchema = new Schema({
        id: {
            label: 'ID',
        },
        color: {
            label: '色系名称',
        },
        example: {
            label: '实例',
        },
        sort: {
            label: '排序',
        },
        date: {
            label: '添加日期'
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
                '色系名称': 1,
                '排序': 2,
                '添加日期': 3,
            }
        },
        search2:{
            label:'请输入需要搜索的时间:',
            type:'date',
            default(){
                return new Date();
            }
        },
        search3:{
            label:'请输入需要搜索的内容:'
        }
    });

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
                gridSchema: gridSchema,
                gridData:gridSchema.format([]),
                showTimePic:false,
                showText:true,
                width:width
            };
        },
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
                        $.ajax({
                            type: "POST",
                            url: "./php/bz_del.php",
                            data: {
                                id:id,
                                table:'`t_sex`'
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
                bzDelete(this,id,'t_sex','./php/cs_del.php').mutipleDel();
            },
        },
        vuex:{
            actions:{
                editColor:editColor
            }
        },
        components: {
            pagintion: require('../pagination.vue')
        },
        route:{
            data: function (transition) {
                $.ajax.call(this,{
                    type:'POST',
                    url: "./php/bzsex.php",
                    data:"",
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
