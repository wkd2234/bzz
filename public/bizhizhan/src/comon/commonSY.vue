<template>
    <div class="aside">
        <!-- 使用指令 v-link 进行导航。 -->
        <d-nav-menu>
            <d-nav-menu-item v-for="menu in menus" :text="menu.text" :path="menu.path" :expanded="$index === 0">
            </d-nav-menu-item>
        </d-nav-menu>
    </div>
    <!-- 路由外链 -->
    <div class="main">
        <router-view ></router-view>
    </div>
</template>
<style>
    .main {
        position: relative;
        margin-left: 120px;
        padding-top: 20px;
        height: 1000px;
        box-sizing: border-box;
        overflow: auto;
        background-color: #222;
    }

    .aside {
        position: absolute;
        padding-top: 20px;
        width: 120px;
        z-index: 1;
        background-color: #222;
    }

    .aside ul {
        margin: 0;
        padding: 0;
        width: 100%;
        list-style: none;
        font-size: 12px;
    }

    .aside ul li {
        display: block;
        height: 50px;
        text-align: center;
        line-height: 50px;
    }

    .aside ul li a {
        text-decoration: none;
        color: #000;
        font-size: 14px;
    }
</style>

<script>
    import store from '../../store/store'


    export default{
        props:{
            menus:{
                type:Array
            }
        },
        data(){
            return {
                msg:'hi'
            }
        },
        store:store
    }
</script>