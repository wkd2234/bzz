<template>

    <d-button type="primary" @click="goback()">返回上一级</d-button>

    <d-form :cols="1" :schema='gridSchema' style="margin-top:20px;width: 450px;" :label-width="100" :editor-width="150">
        <d-select-field property="type" :model="model"></d-select-field>
        <d-text-field property="width" :model="model" ></d-text-field>
        <d-text-field property="height" :model="model" ></d-text-field>
        <d-text-field property="sort" :model="model"></d-text-field>
        <d-radiogroup-field property="status" :model="model"></d-radiogroup-field>
        <d-field>
            <!-------------------------------------------TODO----------------------------------------->
            <d-button type="primary" size="large" @click="sub()">保存提交</d-button>
        </d-field>
    </d-form>

</template>



<script>
    import { Schema,MessageBox } from 'vue-desktop';
    import {getZhuanJi} from '../../store/getters'

    var gridSchema = new Schema({
        width: {
            label: '宽度:',
        },
        height: {
            label: '高度:',
        },
        type:{
            label:'尺寸类型',
            mapping:{
                '电脑':'0',
                '手机':'1',
                'iPad':'2'
            }
        },
        sort: {
            label: '排序',
        },

        status:{
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
        },
        methods:{
            goback:function(){
                window.history.go(-1)
            },
            sub(){
                var type = this.model.type;
                var width = this.model.width;
                var height = this.model.height;
                var sort = this.model.sort;
                var status = this.model.status;

                $.ajax({
                    type:'post',
                    url:'./php/addsize.php',
                    data:{
                        custer:type,
                        width:width,
                        height:height,
                        sort:sort,
                        status:status
                    },
                    success:function(msh){
                        console.log(msh);
                        MessageBox({
                            title: 'Alert',
                            message:'已提交'
                        },function(){
                            location.href = '../../bizhizhan/#!/CommonSetting/bizhiFenbianlv'
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
        }
    }
</script>
