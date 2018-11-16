/*
 * @Author: xiami qq1820983743 
 * @Date: 2018-11-15 10:44:52 
 * @Last Modified by:   xiami qq1820983743 
 * @Last Modified time: 2018-11-15 10:44:52 
 */


define(function(require, exports) {
    console.log('我是changeColor模块');
    // 下面的写法只能第一次获取到色值，依赖模块属性只能加载一次
    // exports.randomColor ='#'+Math.floor(Math.random()*16777215).toString(16);
    var _randomColor = function(){
        return '#'+Math.floor(Math.random()*256*256*256).toString(16);
    }
    exports.showColor=function(){
        $('.test').css('background-color',_randomColor());
        console.log(_randomColor());
    };

});
