/*
 * @Author: xiami qq1820983743 
 * @Date: 2018-11-15 10:44:46 
 * @Last Modified by: xiami qq1820983743
 * @Last Modified time: 2018-11-16 10:55:55
 */

define(function(require, exports) {
    var $=require('jquery');
    var oldWidth=$('.test').width();
    exports.newWidth=function(){
        if(oldWidth==100){
            $('.test').width('200');
            oldWidth=200
        }else{
        $('.test').width('100')
        oldWidth=100
         }
        console.log(oldWidth);
    }
    
});