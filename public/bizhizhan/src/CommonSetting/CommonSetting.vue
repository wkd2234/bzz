<template>
    <c-shouye :menus="menus"></c-shouye>
</template>

<script>

    export default{
        data(){
            return {
                menus: [{
                    text: '壁纸分类',
                    path: '/CommonSetting/bizhiFenlei'
                }, {
                    text: '壁纸分辨率',
                    path: '/CommonSetting/bizhiFenbianlv'
                }, {
                    text: '壁纸色系',
                    path: '/CommonSetting/bizhiSex'
                }, {
                    text: '幻灯片管理',
                    path: '/CommonSetting/PPTguanli'
                }]
            }
        },
        ready(){
            if (this.$route.path == '/CommonSetting')
                this.$route.router.go('/CommonSetting/bizhiFenlei/');
        }
    }
</script>
