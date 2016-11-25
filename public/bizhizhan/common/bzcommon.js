/**
 * Created by Administrator on 2016/9/28 0028.
 *
 * 包含对电脑\手机\ipad的壁纸操作方法
 */

import {MessageBox} from 'vue-desktop'

export function not(fn){
    "use strict";
    return function(){
        return !fn.apply(this,arguments)
    }
}

export function bzDelete(obj,id,custer,url) {
    return {
        singleDel : function() {
            $.ajax({
                type: "POST",
                url: url,
                data: {
                    id: id,
                    custer: custer,
                    level: obj.level
                },
                success: function (msh) {
                    console.log(msh);
                    MessageBox({
                        title: 'Alert',
                        message: '已删除' + id
                    });
                    var arr = obj.gridData.filter(function (item) {
                        return item['id'] != id
                    })

                    obj.gridData = arr;

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log(XMLHttpRequest.status);
                    console.log(XMLHttpRequest.readyState);
                    console.log(textStatus);
                }
            })
        },
        mutipleDel:function(){
            "use strict";
            var selected = [];

            obj.gridData.forEach(function(item,index){
                if(item.$selected){
                    selected.push(item.id);
                }
            });

            $.ajax({
                type:'post',
                url:url,
                data:{
                    custer:custer,
                    level: obj.level,
                    isAllDel:'isAllDel',
                    del:JSON.stringify(selected)
                },
                success:function(msh){
                    console.log(msh)
                    var arr = obj.gridData.filter(function (item) {
                        return not(isInArr)(item.id,selected)
                    })

                    obj.gridData = arr
                },
                error:function(XMLHttpRequest,textStatus,errorThrown) {
                    console.log(XMLHttpRequest.status);
                    console.log(XMLHttpRequest.readyState);
                    console.log(textStatus);
                }
            })
        }
    }
}



export function isInArr(searchValue,array){
    "use strict";
    for (var i = 0;i<array.length;i++){
        if(searchValue == array[i])
            return true
    }
    return false;
}






