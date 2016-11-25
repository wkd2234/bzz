<template>
    <c-zhuanji :custer="custer" :url="url" :data="data"></c-zhuanji>
</template>

<script>
    export default {
        data() {
            return {
                data:[],
                custer: 'sj',
                url:['./php/pc_1.php','./php/pc_del.php','./php/search.php']
            };
        },
        route: {
            data: function (transition) {
                var _self = this;

                $.ajax({
                    type: "POST",
                    url: './php/pc_1.php',
                    data: {
                        custer:'sj'
                    },
                    async: false,
                    success: function(msh){
                        var json = [];
                        for (var i = 0;i<msh.length;i++) {
                            json[i] = {}
                            for(var key in msh[i]){
                                json[i][key] = msh[i][key]
                            }
                        }
                        transition.next({data:json})
                    },
                    error:function(XMLHttpRequest,textStatus,errorThrown) {
                        console.log(XMLHttpRequest.status);
                        console.log(XMLHttpRequest.readyState);
                        console.log(textStatus);
                    }
                });
            }
        }
    };
</script>
