/**
 * Created by Administrator on 2016/9/19 0019.
 */
var Vue = require('vue');

require('vue-desktop');

var VueRouter = require('vue-router');

Vue.use(VueRouter);

/*Vue.component('app', require('./src/zhuanji.vue'));
 Vue.component('vform',require('./src/addBizhi.vue'));
 Vue.component('grid-child',require('./src/bizhiGuanli.vue'));
 Vue.component('grid-child2',require('./src/wenjianGuanli.vue'));

 new Vue({
 el:'body'
 })*/

Vue.component('cZhuanji',require('./src/comon/commonZj.vue'))
Vue.component('cBizhi',require('./src/comon/commonBz.vue'))
Vue.component('cShouye',require('./src/comon/commonSY.vue'))
Vue.component('cWenjian',require('./src/comon/commonWj.vue'))

var App = Vue.extend({
})


var router = new VueRouter({
    history: false,
    waitForData: true
})


//Vue.component('c-zhuanji',require('./src/comon/commonZj.vue'))

var delay_t= 0;

router.map({
    '/PCbizhi': {
        component: require('./src/PCbizhi/PCbizhi.vue'),
        subRoutes: {
            '/app': {
                name:'pcZJGL',
                component: require('./src/PCbizhi/zhuanji.vue')
            },
            '/v-f': {
                component:  require('./src/PCbizhi/addBizhi.vue')
            },
            '/grid-child1': {
                name:'pcBZGL',
                component: require('./src/PCbizhi/bizhiGuanli.vue')
            },
            '/grid-child2': {
                name:'pcWJGL',
                component: require('./src/PCbizhi/wenjianGuanli.vue')

            },
            '/b-upload1': {
                name:'pcWJUP',
                component: require('./src/PCbizhi/uploadPC.vue')
            }
        }
    },
    '/MOBILEbizhi':{
        component:require('./src/MOBILEbizhi/MOBILEbizhi.vue'),
        subRoutes:{
            '/ZHUANJI':{
                name:'sjZJGL',
                component:require('./src/MOBILEbizhi/ZHUANJI.vue')
            },
            '/editZJ': {
                component: require('./src/MOBILEbizhi/v-f.vue')
            },
            '/bizhiGuanli': {
                name:'sjBZGL',
                component: require('./src/MOBILEbizhi/bizhiGuanli.vue')
            },
            '/wenjianGuanli': {
                name:'sjWJGL',
                component: require('./src/MOBILEbizhi/wenjianGuanli.vue')
            },
            '/b-upload1': {
                component: require('./src/MOBILEbizhi/v-f.vue')
            },
            '/b-upload2':{
                name:'sjWJUP',
                component: require('./src/MOBILEbizhi/b-upload.vue')
            }
        }
    },
    '/iPadbizhi':{
        component:require('./src/iPadbizhi/iPadbizhi.vue'),
        subRoutes:{
            '/zhuanji':{
                name:'ipZJGL',
                component:require('./src/iPadbizhi/zhuanji.vue')
            },
            '/bizhiGuanli': {
                name:'ipBZGL',
                component: require('./src/iPadbizhi/bizhiGuanli.vue')
            },
            '/wenjianGuanli': {
                name:'ipWJGL',
                component: require('./src/iPadbizhi/wenjianGuanli.vue')
            },
            '/b-upload1': {
                component: require('./src/iPadbizhi/addBizhi.vue')
            },
            '/b-upload2':{
                name:'ipWJUP',
                component: require('./src/iPadbizhi/b-upload.vue')
            }
        }
    },
    '/CommonSetting':{
        component:require('./src/CommonSetting/CommonSetting.vue'),
        subRoutes:{
            '/bizhiFenlei':{
                component: require('./src/CommonSetting/bizhiFenlei.vue')
            },
            '/zileiGuanli':{
                name:'zlGL',
                component: require('./src/CommonSetting/zileiGuanli.vue')
            },
            '/bizhiFenbianlv':{
                component: require('./src/CommonSetting/bizhiFenbianlv.vue')
            },
            '/addSize':{
                component: require('./src/CommonSetting/addSize.vue')
            },
            '/bizhiSex':{
                component: require('./src/CommonSetting/bizhiSex.vue')
            },
            'addColor':{
                component: require('./src/CommonSetting/addColor.vue')
            },
            'PPTguanli':{
                component: require('./src/CommonSetting/PPTguanli.vue')
            },
            'addPPT':{
                component: require('./src/CommonSetting/addPPT.vue')
            }
        }
    }

})


router.start(App, 'body')