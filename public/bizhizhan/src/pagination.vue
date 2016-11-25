<template>
    <nav class="boot-nav">
        <ul class="pagination boot-page">

            <li><a href="javascript:void(0)" aria-label="Previous" @click="goFirstPage()" v-show="!!activeNum"><span aria-hidden="true">&laquo;</span></a></li>

            <li><a href="javascript:void(0)" aria-label="Next" @click="goPrevPage()"  v-show="!!activeNum"><span aria-hidden="true">‹</span></a></li>

            <li v-show="activeNum" class="disabled"><span aria-hidden="true">...</span></li>

            <li v-for="page in getPages()" :class="activeNum==(page-1)?'active':''" @click="pageClick($event)"><a href="javascript:void(0)" >{{page}}</a></li>

            <li v-show="activeNum < (pageTotal-pageLen)" class="disabled"><span aria-hidden="true">...</span></li>

            <li><a href="javascript:void(0)" aria-label="Next" v-show="!(activeNum===(pageTotal-1))" @click="goNextPage()"><span aria-hidden="true">›</span></a></li>

            <li><a href="javascript:void(0)" aria-label="Next" v-show="!(activeNum===(pageTotal-1))" @click="goLastPage()"> <span aria-hidden="true">&raquo;</span></a></li>

        </ul>
        </nav>
</template>

<style scoped>
    @import url('../assets/css/bootstrap.min.css');
</style>

<script>
    export default {
        props:{
            pageTotal:{
                type:Number,
                default:6
            },
            pageLen:{
                type:Number,
                default:5
            }

        },
        data:function(){
            return {
                activeNum : 0
            }
        },
        methods:{
            goFirstPage:function(){
                this.activeNum = 0;
            },
            goNextPage:function(){
                if (this.activeNum === this.pageTotal-1)
                    return;
                this.activeNum ++
            },
            goPrevPage:function(){
                if (!this.activeNum)
                    return;
                this.activeNum --
            },
            goLastPage:function(){
                if(this.activeNum === this.pageTotal-1)
                    return;
                this.activeNum = this.pageTotal-1;
            },
            pageClick:function(event){
                var target = event.target;
                var num = target.innerHTML;

                if(num == this.activeNum)
                    return;

                this.activeNum = Number(num-1);
            },
            getPages:function(){
                var arr = [];
                var start = this.activeNum+1;
                var len = this.pageLen;
                var total = this.pageTotal;
                var end =  start+len;

                if(end>total){
                    end = total + 1;
                    start = end - len;
                }

                for (var i = start;i<end;i++){
                    arr.push(i)
                }
                return arr
            }
        },
        watch:{
            'activeNum':function(newVal,oldVal){
                this.getPages()
            }
        }
    }
</script>
