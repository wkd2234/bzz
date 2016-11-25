/**
 * Created by Administrator on 2016/9/21 0021.
 */
export function editZhuanJi({ dispatch },name,id,status,obj){
    var title = obj.custer,
        path = '';

    switch (title) {
        case 'pc':
            path = '/PCbizhi/v-f?pczjid='+id;
            break
        case 'sj':
            path = '/MOBILEbizhi/b-upload1?sjzjid='+id;
            break
        case 'ip':
            path = '/iPadbizhi/b-upload1?ipzjid='+id;
            break
        default:
            break
    }

    dispatch('EDITZHUANJI',name,id,status)
    obj.$route.router.go(path)
}

export function editColor({dispatch},color,id,status,obj){
    dispatch('EDITCOLOR',color,id,status)
    obj.$route.router.go('/CommonSetting/addColor')
}

export function editPPT({dispatch},PPT,id,status,obj){
    dispatch('EDITPPT',PPT,id,status)

    obj.$route.router.go('/CommonSetting/addPPT?pptid='+id)
}


export function historyZjid({dispatch},zjid){
    dispatch('EDITHISTORYZJID',zjid);
}

export function editCls({dispatch},cls) {
    dispatch('EDITCLASS',cls)
}