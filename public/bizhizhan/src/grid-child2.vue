<template>
    <d-form :cols="1" :schema='gridSchema' :label-width="180" style="width: 1580px;">
        <d-select-field position="bottom" property="simpleMapping" :model='model' :editor-width="300">
            请选择要搜索的内容
        </d-select-field>
        <d-text-field :editor-width="300"></d-text-field><d-field>
        <d-button type="primary" @click="deleteRow()">搜索</d-button>
        <d-button type="primary">批量删除</d-button>
        <d-button type="primary" @click="addPaper()">添加壁纸</d-button>
        </d-field>
    </d-form>

    <d-grid :data="gridData" :schema="gridSchema" height="300" >
        <d-grid-column type="selection"></d-grid-column>
        <d-grid-column property="id"></d-grid-column>
        <d-grid-column property="ZhuanJi"></d-grid-column>
        <d-grid-column property="BiZhi"></d-grid-column>
        <d-grid-column property="classes"></d-grid-column>
        <d-grid-column property="childClass"></d-grid-column>
        <d-grid-column property="FenBianLu"></d-grid-column>
        <d-grid-column property="sorts"></d-grid-column>
        <d-grid-column property="date"></d-grid-column>
        <d-grid-column property="status"></d-grid-column>
        <d-grid-column label="操作" type="operate3"></d-grid-column>
    </d-grid>

    <d-dialog title="添加壁纸" :visible.sync="dialogShow" width="500">
        <d-form :cols="1" :schema='gridSchema2'>
            <d-text-field property="ZhuanJi"></d-text-field>
            <d-text-field property="BiZhi"></d-text-field>
            <d-text-field property="classes"></d-text-field>
            <d-text-field property="sortValue"></d-text-field>
            <d-radiogroup-field property="status"></d-radiogroup-field>
            <d-field>
                <d-button type="primary">确定</d-button>
                <d-button type="warning">取消</d-button>
            </d-field>
        </d-form>
    </d-dialog>
</template>


<style>

</style>
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

        BiZhi:{
            label:'壁纸名称'
        },

        classes: {
            label: '分类',
            required:true
        },

        childClass: {
            label: '子类',
            required:true
        },

        FenBianLu: {
            label: '分辨率',
        },

        sorts:{
            label:'排序'
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

    var gridSchema2 = new Schema({

        ZhuanJi:{
            label:'专辑名称:',
            require:true
        },

        BiZhi:{
            label:'壁纸名称:',
            require:true
        },

        classes:{
            label:'分类:',
            require:true
        },

        sortValue:{
            label:'排序值:',
            require:true
        },

        status:{
            label:'状态:',
            mapping:{
                '正常':'0',
                '锁定':'1'
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
                gridSchema2:gridSchema2,
                dialogShow:false,
                gridData: gridSchema.format([
                    {id: '100100', ZhuanJi: '火影壁纸集', BiZhi: '火影1',classes:'动漫卡通',childClass: '火影忍者', FenBianLu: '1024*768',sorts:'1000',date:'2016-09-05 10:14:25',status:'0'},
                    {id: '100101', ZhuanJi: '火影壁纸集', BiZhi: '火影1',classes:'动漫卡通',childClass: '火影忍者', FenBianLu: '1920*1200',sorts:'1000',date:'2016-09-06 10:14:25',status:'1'},
                    {id: '100102', ZhuanJi: '火影壁纸集', BiZhi: '火影1',classes:'动漫卡通',childClass: '火影忍者', FenBianLu: '1920*1080',sorts:'1000',date:'2016-09-05 10:14:25',status:'0'},
                    {id: '100103', ZhuanJi: '火影壁纸集', BiZhi: '火影1',classes:'动漫卡通',childClass: '火影忍者', FenBianLu: '1024*768',sorts:'1000',date:'2016-09-05 10:14:25',status:'1'},
                    {id: '100104', ZhuanJi: '火影壁纸集', BiZhi: '火影1',classes:'动漫卡通',childClass: '火影忍者', FenBianLu: '1920*1200',sorts:'1000',date:'2016-09-05 10:14:25',status:'0'}
                ])
            };
        },
        methods:{
            addPaper(){
                this.dialogShow = !this.dialogShow;
            }
        }
    };
</script>
