<template>

    <d-form :cols="3" :schema='gridSchema' :label-width="170">
        <d-select-field position="bottom" property="search1" :model='model'  :editor-width="300" :label-width="11" :placeh="sel"></d-select-field>
        <d-text-field :editor-width="200" property="search2" :model="model" v-if="showTimePic"></d-text-field>
        <d-select-field :editor-width="200" property="search3" :model="model" v-if="showSel"></d-select-field>
        <d-text-field :editor-width="200" property="search4" :model="model" v-if="showText" ></d-text-field>
        <d-field :label-width="10">
            <!-------------------------------------------TODO----------------------------------------->
            <d-button type="primary" @click="search()">搜索</d-button>
            <!-------------------------------------------TODO----------------------------------------->
            <d-button type="primary" @click="mutipledel()">批量删除</d-button>

            <d-button type="primary" @click="uploadPaper()">上传文件</d-button>
            <d-button type="primary" @click="goback()">返回上一级</d-button>
        </d-field>
    </d-form>

    <d-grid :data="gridData" :schema="gridSchema" height="700">
        <d-grid-column type="selection"></d-grid-column>
        <d-grid-column property="id"></d-grid-column>
        <d-grid-column property="classes"></d-grid-column>
        <d-grid-column property="childClass"></d-grid-column>
        <d-grid-column property="BiZhi"></d-grid-column>
        <d-grid-column property="ZhuanJi"></d-grid-column>
        <d-grid-column property="FenBianLu"></d-grid-column>
        <d-grid-column property="sorts"></d-grid-column>
        <d-grid-column property="date"></d-grid-column>
        <d-grid-column property="status"></d-grid-column>
        <d-grid-column label="操作">

            <!-------------------------------------------TODO----------------------------------------->
            <d-button @click="$parent.$parent.$parent.preview(row.id)">预览</d-button>
            <d-button>编辑</d-button>
            <!-------------------------------------------TODO----------------------------------------->
            <d-button @click="$parent.$parent.$parent.del(row.id)">删除</d-button>
        </d-grid-column>
    </d-grid>

    <d-pagination :item-count="itemCount" :current-page="1"></d-pagination>

</template>


<style>

</style>
<script>
    import { Schema } from 'vue-desktop'
    import {editZhuanJi} from '../../store/actions'
    import {getHistoryZjid} from '../../store/getters'
    import {MessageBox} from 'vue-desktop'
    import {bzDelete,isInArr} from '../../common/bzcommon'

    var griddata = [];
    var search1 = ['id','fbl','sort','date'];
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

        FenBianLu: {
            label: '分辨率',
        },

        sorts: {
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
                'id':0,
                '分辨率':1,
                '排序':2,
                '添加时间':3,
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
                    var output,custer;
                    var query = location.hash.split('?')[1].slice(0,2);
                    if(query == 'pc'){
                        custer = '0'
                    }else if(query == 'sj'){
                        custer = '1'
                    }else if(query == 'ip'){
                        custer = '2'
                    }
                    xhr.open('GET', './php/getsize.php?custer='+custer, true);
                    xhr.onload = function(response) {
                        var json = {};
                        output = JSON.parse(response.target.responseText);
                        for(var i = 0;i<output.length;i++){
                            for(var key in output[i]){
                                json[key] = output[i][key]
                            }
                        }
                        resolve(json);
                    };
                    xhr.send();
                });
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
            }
        }

    });


    export default {
        props:{
            data:{
                type:Array
            },
            custer:{
                type:String
            }
        },
        data() {
            return {
                sel:"请选择想要搜索的内容",
                level:'wenjian',
                visible: true,
                selection: [],
                pageTotal:10,
                gridSchema: gridSchema,
                model: gridSchema.newModel(),
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
            uploadPaper(){
                var bzid = this.$route.query[this.custer+'bzid'];
                var data = new Object();
                data[this.custer+'bzid'] = bzid;

                this.$route.router.go({name:this.custer+'WJUP',query:data})
            },
            goback:function(){
                var id = this.getHistoryZjid.id;
                var data = new Object();

                data[this.custer+'zjid'] = Number(id);

                this.$route.router.go({name:this.custer+'BZGL',query:data})
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
                var bzid = this.$route.query[this.custer+'bzid'];
                var index = this.model.search1;
                var col = this.search1[index];
                var content;

                if(index == 0 || index == 2){
                    content = this.model.search4;
                }else if(index == 1){
                    content = searchSel[this.model.search3];
                }else if(index == 3){
                    content = this.model.search2;
                    var date = new Date(content)
                    var day = date.getDate();
                    if(day<10){
                        day = '0'+day
                    }
                }
                console.log(col)
                console.log(content)

                $.ajax({
                    type: 'post',
                    url: './php/search.php',
                    data: {
                        id:bzid,
                        table: 'wenjian',
                        col: col,
                        custer:_self.custer,
                        content: content
                    },
                    success: function (msh) {
                        var json = [];
                        for (var i = 0; i < msh.length; i++) {
                            json[i] = {}
                            for (var key in msh[i]) {
                                json[i][key] = msh[i][key]
                            }
                        }
                        _self.gridData = gridSchema.format(json);
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        console.log(XMLHttpRequest.status);
                        console.log(XMLHttpRequest.readyState);
                        console.log(textStatus);
                    }
                })
            },

            preview:function(id){
                var _self = this;

                $.ajax({
                    type:'get',
                    url:'./php/preview.php',
                    data:{
                        id:id,
                        custer:_self.custer
                    },
                    success:function(msg){
                        window.open("http://10.0.10.221:8080/"+msg);
                    },
                    error:function(){
                        console.log(this.data);
                        console.log(XMLHttpRequest.status);
                        console.log(XMLHttpRequest.readyState);
                        console.log(textStatus);
                    }
                })
            }
        },
        vuex:{
            getters:{
                getHistoryZjid:getHistoryZjid
            }
        },
        watch:{
            'model.search1':function(val,oldVal){
                var hash = this.model.search1;

                this.showText = isInArr(hash,[0,2])
                this.showTimePic = hash == 3
                this.showSel = hash == 1;
            },
            'data':function(val,oldVal){
                this.gridData = gridSchema.format(this.data)
            }
        }
    };
</script>
