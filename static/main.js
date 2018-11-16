/*
 * @Author: xiami qq1820983743 
 * @Date: 2018-11-15 10:44:39 
 * @Last Modified by: xiami qq1820983743
 * @Last Modified time: 2018-11-16 08:46:50
 */


//  配置seajs
 seajs.config({
     base:'./',
     paths:{
         'jquery':'sea/jquery'
     },
     alias:{
         'jquery':'jquery/jquery',
         'main':'static/main',
        'changeColor':'static/changeColor'
     }
 })

//  载入依赖模块并执行函数
    seajs.use(['jquery','changeColor','changeWidth'],function($,changeColor,changeWidth){
        console.log('我是main模块');

        $('.test').after('<button id="showBut">我是插入的按钮</button>');
        $('#showBut').on('click',function(){
            changeColor.showColor();
            changeWidth.newWidth()
        })
        
    })

    