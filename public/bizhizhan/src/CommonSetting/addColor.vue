<template>

    <d-button type="primary" @click="goback()">返回上一级</d-button>

    <d-form :cols="1" :schema='gridSchema' style="margin-top:20px;width: 450px;" :label-width="100" >
        <d-text-field property="colornm" :model="model" v-show="getColor.isEdit"></d-text-field>
        <d-field position="bottom" label="专辑名称:" v-show="!getColor.isEdit">{{getColor.colornm}}</d-field>
        <d-field label="请选择颜色:">
            <d-colorchs></d-colorchs>
        </d-field>
        <d-text-field property="sort" :model="model" :editor-width="150"></d-text-field>
        <d-radiogroup-field property="status" :model="model"></d-radiogroup-field>

        <d-field>
            <!-------------------------------------------TODO----------------------------------------->
            <d-button type="primary" size="large" @click="sub()">保存提交</d-button>
        </d-field>
    </d-form>

</template>



<script>
    import { Schema,MessageBox } from 'vue-desktop';
    import {getColor} from '../../store/getters'

    var gridSchema = new Schema({
        colornm:{
            label:'色系名称:'
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

    export default{
        data(){
            return{
                colorid:this.getColor.id || '',
                model: gridSchema.newModel(),
                gridSchema: gridSchema,
            }
        },
        methods:{
            goback:function(){
                window.history.go(-1)
            },
            sub(){
                var example = document.getElementById('example-color').style.backgroundColor;
                var data = {};

                data.example = example
                data.sort = this.model.sort;
                data.status = this.model.status;

                if(this.colorid){
                    data.color = this.getColor.colornm
                    data.id = this.colorid;
                }else{
                    data.color = this.model.colornm
                }

                $.ajax({
                    type:'post',
                    url:'./php/addsex.php',
                    data:data,
                    success:function(msh){
                        MessageBox({
                            title: 'Alert',
                            message:'已提交'
                        },function(){
                            location.href = '../../bizhizhan/#!/CommonSetting/bizhiSex'
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
                getColor:getColor
            }
        }
    }
</script>
