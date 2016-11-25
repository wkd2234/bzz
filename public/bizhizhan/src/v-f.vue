<template>
    <d-form :cols="1" :schema='gridSchema' style="width: 450px;" :label-width="100">

        <d-text-field position="bottom" label="专辑名称:"></d-text-field>
        <d-select-field property="simpleMapping" :model="model"></d-select-field>
        <d-select-field property="simpleMapping2" :model="model"></d-select-field>
        <d-text-field label="排序值:" :editor-width="150"></d-text-field>
        <d-field label="封面图:"><d-upload url=""></d-upload></d-field>
        <d-radiogroup-field property="simpleMapping3"></d-radiogroup-field>
        <d-field><d-button type="primary" size="large">保存提交</d-button></d-field>
    </d-form>
</template>
<script>
    import { Schema } from 'vue-desktop';

    var gridSchema = new Schema({

        simpleMapping: {
            label: '分类:',
            mapping: {
                '动漫卡通': 0,
                '风景': 1
            }
        },
        simpleMapping2:{
            label:'',
            mapping:{
                '火影忍者':0,
                '海贼王':1
            }
        },
        simpleMapping3:{
            label:'状态:',
            mapping:{
                '正常':0,
                '锁定':1
            }
        }
    });

    export default{
        data(){
            return{
                model: gridSchema.newModel(),
                gridSchema: gridSchema,
            }
        }
    }
</script>
