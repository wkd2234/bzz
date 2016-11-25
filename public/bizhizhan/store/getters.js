/**
 * Created by Administrator on 2016/9/21 0021.
 */
export function getZhuanJi(state){
    return {zjnm:state.ZhuanJi,id:state.id,isEdit:state.isEdit}
}

export function getColor(state){
    return {id:state.colorid,colornm:state.colornm,isEdit:state.isEdit}
}

export function getPPT(state){
    return {PPTnm:state.PPTnm,isEdit:state.isEdit}
}

export function getHistoryZjid(state){
    return {id:state.zjid};
}

export function getClass(state){
    return {cls:state.cls};
}