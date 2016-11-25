<template>
    <c-shouye :menus="menus"></c-shouye>
</template>

<script>

    export default{

        data(){
            return {
                menus: [{
                    text: 'iPad壁纸管理',
                    path: '/iPadbizhi/zhuanji'
                }]
            }
        },
        ready(){
            if (this.$route.path == '/iPadbizhi')
                this.$route.router.go('/iPadbizhi/zhuanji');
        }
    }
</script>
