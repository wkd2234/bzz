
<template>
    <c-bizhi :custer="custer" :data="data" :zhuan-ji="ZhuanJi"></c-bizhi>
</template>

<script>
    export default {
        data() {
            return {
                ZhuanJi:'',
                data:[],
                custer: 'pc'
            };
        },
        route:{
            data:function(transition){
                $.ajax.call(this,{
                    type:'POST',
                    url: "./php/queryBZ.php",
                    data:{
                        custer:'pc',
                        id:this.$route.query.pczjid
                    },
                    success: function(msh){
                        var json = [];
                        if(!(msh instanceof Array)){
                            this.ZhuanJi = msh
                        }else {
                            for (var i = 0; i < msh.length; i++) {
                                json[i] = {}
                                for (var key in msh[i]) {
                                    json[i][key] = msh[i][key]
                                }
                            }
                            transition.next({data: json})
                        }
                    }.bind(this),
                    error:function(XMLHttpRequest,textStatus,errorThrown) {
                        console.log(XMLHttpRequest.status);
                        console.log(XMLHttpRequest.readyState);
                        console.log(textStatus);
                    }
                })
            }
        }
    };
</script>
