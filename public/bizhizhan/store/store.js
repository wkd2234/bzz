/**
 * Created by Administrator on 2016/9/21 0021.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    zjid:'',

    //壁纸专辑的编辑与新建
    id:'',
    ZhuanJi:'',

    //添加壁纸时dialog的分类
    cls:'',

    //壁纸色系的编辑与新建
    colorid:'',
    colornm:'',

    //幻灯片的编辑与新建
    PPTnm:'',

    isEdit:Boolean(),


}

const mutations = {

    //编辑专辑名称
    EDITZHUANJI (state, name,id,status) {
        state.id = id;
        state.ZhuanJi = name;
        state.isEdit = status;
    },

    //编辑颜色
    EDITCOLOR (state,color,id,status){
        state.colorid = id;
        state.colornm = color;
        state.isEdit = status
    },

    //编辑幻灯片
    EDITPPT(state,PPT,id,status){
        state.PPTid = id;
        state.PPTnm = PPT;
        state.isEdit = status;
    },

    EDITHISTORYZJID(state,zjid){
        state.zjid = zjid;
    },

    EDITCLASS(state,cls){
        state.cls = cls;
    }


}


export default new Vuex.Store({
    state,
    mutations
})