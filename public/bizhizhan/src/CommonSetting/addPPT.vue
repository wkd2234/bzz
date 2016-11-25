<template>

    <d-button type="primary" @click="goback()">返回上一级</d-button>

    <d-form :cols="1" :schema='gridSchema' style="margin-top:20px;width: 450px;" :label-width="100" :editor-width="150">
        <form id="form" enctype="multipart/form-data">
            <input type="text" name="pptid" :value="$route.query.pptid" v-show="false">

            <d-text-field property="PPT" :model="model" v-show="getPPT.isEdit" namev="pptnm"></d-text-field>
            <d-field property="PPT" v-show="!getPPT.isEdit">{{getPPT.PPTnm}}</d-field>
            <d-select-field property="position" :model="model" namev="position"></d-select-field>

            <d-text-field property="sort" :model="model" namev="sort"></d-text-field>

            <d-text-field property='skipurl' :model="model" namev="skipurl" :editor-width="300"></d-text-field>

            <d-text-field label="上传文件:" :editor-width="300" type="ppturl" :ppturl="ppturl"></d-text-field>
            <d-field>
                <d-uploadppt></d-uploadppt>
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
    import { Schema,MessageBox } from 'vue-desktop';
    import {getPPT} from '../../store/getters'

    var position = ['首页', '电脑二级首页', '手机二级首页', 'iPad二级首页']

    var gridSchema = new Schema({

        PPT: {
            label: '幻灯片名称:'
        },

        position: {
            label: '位置:',
            mapping: {
                '首页': 0,
                '电脑二级首页': 1,
                '手机二级首页': 2,
                'iPad二级首页': 3
            }
        },
        skipurl:{
            label:'跳转链接:'
        },
        sort: {
            label: '排序值:',
            default(){
                return 1000
            }
        },
        status: {
            label: '状态:',
            mapping: {
                '正常': 0,
                '锁定': 1
            }
        }
    });

    export default{
        data(){
            return {
                model: gridSchema.newModel(),
                gridSchema: gridSchema,
                ppturl: ''
            }
        },
        methods: {
            goback: function () {
                window.history.go(-1)
            },
            sub(){
                var form = document.getElementById('form');
                var formdata = new FormData(form);

                $.ajax({
                    type: 'post',
                    url: './php/addppt.php',
                    data: formdata,
                    processData: false,
                    contentType: false,
                    success: function (msh) {
                        console.log(msh);
                        MessageBox({
                            title: 'Alert',
                            message: '已提交'
                        }, function () {
                            location.href = '../../bizhizhan/#!/CommonSetting/PPTguanli'
                        });
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        console.log(XMLHttpRequest.status);
                        console.log(XMLHttpRequest.readyState);
                        console.log(textStatus);
                    }
                })
            }
        },
        vuex: {
            getters: {
                getPPT: getPPT
            }
        }
    }
</script>
