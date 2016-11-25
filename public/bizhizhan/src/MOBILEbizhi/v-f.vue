<template>

    <d-button type="primary" @click="goback()">返回上一级</d-button>

    <d-form :cols="1" :schema='gridSchema' style="margin-top:20px;width: 450px;" :label-width="100" >
        <form id="upload" enctype="multipart/form-data">
            <input type="text" name="client" :value="client" v-show="false">
            <input type="text" name="zjid" :value="$route.query.sjzjid" v-show="false">

            <d-text-field property="zjnm" :model="model" v-show="EditZhuanJi.isEdit" namev="zjnm"></d-text-field>

            <d-field property="zjnm" :model="model" v-show="!EditZhuanJi.isEdit">{{EditZhuanJi.zjnm}}</d-field>

            <d-select-field property="fenlei1" :model="model" namev="cls"></d-select-field>

            <d-select-field property="fenlei2" :model="model" namev="c_cls"  parent-property="fenlei1"></d-select-field>

            <d-text-field property="sort" :model="model" namev="sort"></d-text-field>

            <d-field label="封面图:">
                <d-upload2 :url="url" :client="client"></d-upload2>
            </d-field>

            <d-radiogroup-field property="status" :model="model"></d-radiogroup-field>
        </form>
        <d-field>
            <!-------------------------------------------TODO----------------------------------------->
            <d-button type="primary" size="large" @click="sub()">保存提交</d-button>
        </d-field>
    </d-form>
</template>




<script>
    import { Schema,MessageBox} from 'vue-desktop';
    import {getZhuanJi} from '../../store/getters'

    var fenlei1,fenlei2;

    var gridSchema = new Schema({
        zjnm:{
            label:'专辑名称:'
        },

        fenlei1: {
            label: '分类:',
            mapping: function(){
                return new Promise(function(resolve) {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', './php/getcls.php', true);
                    xhr.onload = function(response) {
                        var res = JSON.parse(response.target.responseText);
                        var json = {};
                        for (var i =0 ;i<res.length;i++) {
                            for (var key in res[i]) {
                                json[key] = res[i][key]
                            }
                        }
                        fenlei1 = json;
                        resolve(json);
                    };
                    xhr.send();
                });
            },
        },
        fenlei2:{
            label:'',
            mapping:function(model) {
                return new Promise(function(resolve) {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', './php/getccls.php', true);
                    xhr.onload = function(response) {
                        var remoteMapping = model.fenlei1;
                        fenlei2 = JSON.parse(response.target.responseText);
                        resolve(JSON.parse(response.target.responseText)[remoteMapping]);
                    };
                    xhr.send();
                });
            }
        },
        sort:{
            label:'排序值:'
        },

        status:{
            label:'状态:',
            mapping:{
                '正常':0,
                '锁定':1
            }
        }
    });

    var fenlei1 = ['动漫卡通','风景'];
    var fenlei2 = ['火影忍者','海贼王','死神','银魂'];

    export default{
        data(){
            return{
                model: gridSchema.newModel(),
                gridSchema: gridSchema,
                client:'mobile',
                msg:'',
                fenlei1:fenlei1,
                fenlei2:fenlei2,
                url:''
            }
        },
        methods:{
            goback:function(){
                window.history.go(-1)
            },
            sub(){

                var form = document.getElementById('upload');
                var formdata = new FormData(form);

                $.ajax({
                    type:'post',
                    url:'./php/pcbizhi.php',
                    data:formdata,
                    processData: false,
                    contentType: false,
                    success:function(msh){
                        console.log(msh);
                        MessageBox({
                            title: 'Alert',
                            message:'已提交'
                        },function(){
                            location.href = '../../bizhizhan/#!/MOBILEbizhi/ZHUANJI'
                        });
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
            getters:{
                EditZhuanJi:getZhuanJi
            }
        },
        ready(){
            if(this.EditZhuanJi.isEdit){
                this.model.sort = 1000
                this.model.status = 0
            }else {
                var data = {},
                        cls,
                        c_cls;

                $.ajax.call(this,{
                    type:'get',
                    url:'./php/editBizhi.php?id='+this.$route.query.sjzjid+'&custer=sj',
                    success:function(msh){

                        this.model.sort = msh[0].sort;

                        for(var key in fenlei1){
                            if(msh[0].class == key){
                                cls = fenlei1[key];
                                this.model.fenlei1 = cls
                            }
                        }
                        for(var key in fenlei2[cls]){
                            if(msh[0].childClass == key){
                                c_cls = true;
                            }
                        }
                        if(c_cls)
                            $("*[name='c_cls']").val(msh[0].childClass);

                        this.model.fenlei2 = c_cls;
                        console.log(this.model.fenlei2)
                        this.model.status = msh[0].status;
                        var newurl = msh[0].imgUrl.match(/bizhizhan.*/);
                        this.url = 'http://10.0.10.221:8080/'+newurl;
                    }.bind(this),
                    error:function(XMLHttpRequest,textStatus,errorThrown) {
                        console.log(XMLHttpRequest.status);
                        console.log(XMLHttpRequest.readyState);
                        console.log(textStatus);
                    }
                })
            }
        }
    }
</script>
