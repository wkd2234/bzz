<template>

    <d-button type="primary" @click="goback()">返回上一级</d-button>

    <d-form :cols="1" :schema='gridSchema' style="margin-top:20px;width: 450px;" :label-width="100" >
        <d-select-field property="simpleMapping":model="model" :editor-width="150"></d-select-field>
        <d-field label="上传文件:">
            <d-upload3 url="" :client="client"></d-upload3>
        </d-field>
        <d-text-field label="排序值:" :editor-width="150"></d-text-field>
        <d-radiogroup-field property="simpleMapping2"></d-radiogroup-field>
        <!-------------------------------------------TODO----------------------------------------->
        <d-field>
            <d-button type="primary" size="large">保存提交</d-button>
        </d-field>
    </d-form>

</template>



<script>
    import { Schema } from 'vue-desktop';
    import {getZhuanJi} from '../../store/getters'

    var gridSchema = new Schema({

        simpleMapping2:{
            label:'状态:',
            mapping:{
                '正常':0,
                '锁定':1
            }
        },
        simpleMapping:{
            label:"分辨率:",
            mapping:{
                '1024*768':0,
                '1920*1200':1
            }
        }

    });

    export default{
        data(){
            return{
                model: gridSchema.newModel(),
                gridSchema: gridSchema,
                client:'mobile',

            }
        },
        methods:{
            goback:function(){
                window.history.go(-1)
            }
        }
    }
</script>
