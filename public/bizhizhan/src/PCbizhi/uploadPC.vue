<template>

    <d-button type="primary" @click="goback()">返回上一级</d-button>

    <d-form :cols="1" :schema='gridSchema' style="margin-top:20px;width: 450px;" :label-width="100">
        <form enctype="multipart/form-data" id="upload">
            <input type="text" name="client" :value="client" v-show="false">
            <input type="text" name="bzid" :value="$route.query.pcbzid" v-show="false">
            <d-select-field property="fenbianlv" :model="model" :editor-width="150" namev="fbl"></d-select-field>
            <d-field label="上传文件:">
                <d-upload3 url="" :client="client"></d-upload3>
            </d-field>
            <d-text-field property="sort" :model="model" :editor-width="150" namev="sort"></d-text-field>
            <d-radiogroup-field property="status" :model="model"></d-radiogroup-field>
        </form>
        <d-field>
            <!-------------------------------------------TODO----------------------------------------->
            <d-button type="primary" size="large" @click="sub()">保存提交</d-button>
        </d-field>

    </d-form>


</template>


<script>
    import { Schema } from 'vue-desktop';
    import {getZhuanJi} from '../../store/getters'

    var gridSchema = new Schema({
        sort: {
            label: '排序值'
        },
        status: {
            label: '状态:',
            mapping: {
                '正常': 0,
                '锁定': 1
            }
        },
        fenbianlv: {
            label: "分辨率:",
            mapping: function(){
                return new Promise(function(resolve) {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', './php/getsize.php?custer=0', true);
                    xhr.onload = function(response) {
                        var res = JSON.parse(response.target.responseText);
                        var json = {};
                        for (var i =0 ;i<res.length;i++) {
                            for (var key in res[i]) {
                                json[key] = res[i][key]
                            }
                        }
                        resolve(json);
                    };
                    xhr.send();
                });
            },
        }

    });

    export default{
        data(){
            return {
                model: gridSchema.newModel(),
                gridSchema: gridSchema,
                client: 'pc',
                fenbianlv: ['1024*768', '1920*1200'],
            }
        },
        methods: {
            goback: function () {
                window.history.go(-1)
            },
            sub(){
                var _self = this;
                var id = this.$route.query.pcbzid;

                var form = document.getElementById('upload');
                var formdata = new FormData(form);


                $.ajax({
                    type: 'post',
                    url: './php/uploadFile.php',
                    data: formdata,
                    processData: false,
                    contentType: false,
                    success: function (msh) {
                        console.log(msh)
                        _self.$route.router.go({name:'pcWJGL',query:{pcbzid:id}});
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        console.log(XMLHttpRequest.status);
                        console.log(XMLHttpRequest.readyState);
                        console.log(textStatus);
                    }
                })
            }
        }
    }
</script>
