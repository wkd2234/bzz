<template>
    <c-wenjian :data="data" :custer="custer"></c-wenjian>
</template>

<script>

    export default {
        data() {
            return {
                data: [],
                custer: 'sj'
            };
        },
        route: {
            data: function (transition) {
                $.ajax.call(this, {
                    type: 'POST',
                    url: "./php/queryFile.php",
                    data: {
                        id: this.$route.query.sjbzid,
                        custer: 'sj'
                    },
                    success: function (msh) {
                        var json = [];
                        for (var i = 0; i < msh.length; i++) {
                            json[i] = {}
                            for (var key in msh[i]) {
                                json[i][key] = msh[i][key]
                            }
                        }
                        transition.next({data: json})
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        console.log(XMLHttpRequest.status);
                        console.log(XMLHttpRequest.readyState);
                        console.log(textStatus);
                    }
                })
            }
        }
    };
</script>
