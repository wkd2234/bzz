<template>
    <d-form :cols="3" :schema='gridSchema'  :label-width="200">
        <d-select-field position="bottom" property="simpleMapping" :model='model'>
            请选择要搜索的内容
        </d-select-field>
        <d-text-field></d-text-field>
        <d-button type="primary" @click="deleteRow()">搜索</d-button>
        <d-button type="primary">批量删除</d-button>
        <d-button type="primary">添加壁纸专辑</d-button>
    </d-form>

    <d-grid :data="gridData" :schema="gridSchema" height="300" >
        <d-grid-column type="index"></d-grid-column>
        <d-grid-column type="selection"></d-grid-column>
        <d-grid-column property="id"></d-grid-column>
        <d-grid-column property="ZhuanJi"></d-grid-column>
        <d-grid-column property="classes"></d-grid-column>
        <d-grid-column property="childClass"></d-grid-column>
        <d-grid-column property="sort"></d-grid-column>
        <d-grid-column property="date"></d-grid-column>
        <d-grid-column property="status"></d-grid-column>
        <d-grid-column label="操作" type="operate"></d-grid-column>
    </d-grid>
</template>

<script>
    import { Schema } from 'vue-desktop'

    var gridSchema = new Schema({
        id: {
            label: 'ID',
            required: true
        },
        ZhuanJi: {
            label: '专辑名称',
            required: true
        },
        classes: {
            label: '分类',
            required:true
        },
        childClass: {
            label: '子类',
            required:true
        },
        sort: {
            label: '排序',
        },
        date:{
            label:'添加时间'
        },
        status:{
            label:'状态',
            mapping: {
                '正常': '0',
                '锁定': '1'
            }
        },
        simpleMapping: {
            label: '请选择需要搜索的项目:',
            mapping: {
                'Simple-0': 0,
                'Simple-1': 1,
                'Simple-2': 2,
                'Simple-3': 3,
                'Simple-4': 4,
                'Simple-5': 5
            }
        }
    });

    export default {
        data() {
            return {
                title: 'b',
                visible: true,
                selection: [],
                model: gridSchema.newModel(),
                gridSchema: gridSchema,
                gridData: gridSchema.format([
                    {id: '100100', ZhuanJi: '火影壁纸集', classes: '动漫卡通', childClass: '1000', sort: '199',date:'2016-09-05 10:14:25',status:'0'},
                    {id: '100101', ZhuanJi: '海贼王壁纸集', classes: '动漫卡通', childClass: '1000', sort: '199',date:'2016-09-06 10:14:25',status:'1'},
                    {id: '100102', ZhuanJi: '银魂壁纸集', classes: '动漫卡通', childClass: '1000', sort: '199',date:'2016-09-05 10:14:25',status:'0'},
                    {id: '100103', ZhuanJi: '柯南壁纸集', classes: '动漫卡通', childClass: '1000', sort: '199',date:'2016-09-05 10:14:25',status:'1'},
                    {id: '100104', ZhuanJi: '新海诚壁纸集', classes: '动漫卡通', childClass: '1000', sort: '199',date:'2016-09-05 10:14:25',status:'0'}
                ])
            };
        },
        methods:{
            deleteRow(){
                console.log(1)
            }
        }
    };
</script>
