<template>
    <c-shouye :menus="menus"></c-shouye>
</template>

<script>

    export default{
        data(){
            return {
                menus: [{
                    text: '手机壁纸管理',
                    path: '/MOBILEbizhi/ZHUANJI'
                }]
            }
        },
        ready(){
            if (this.$route.path == '/MOBILEbizhi')
                this.$route.router.go('/MOBILEbizhi/ZHUANJI');
        }
    }
</script>
