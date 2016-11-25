<template>
   <c-shouye :menus="menus"></c-shouye>
</template>

<script>

    export default{
        data(){
            return {
                menus: [{
                    text: '电脑壁纸管理',
                    path: '/PCbizhi/app'
                }]
            }
        },
        ready(){
            if(this.$route.path == '/PCbizhi')
                this.$route.router.go('/PCbizhi/app');
        }
    }
</script>