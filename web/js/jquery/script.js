/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    
    var mouseOverMenuTile = 0;
    var mouseOverMenu = 0;
    
    $('.menutile').mouseenter(function(){
        mouseOverMenuTile = 1;
    });
    $('.menutile').mouseleave(function(){
        mouseOverMenuTile = 0;
    });
    
    $('.menu').mouseenter(function(){
        mouseOverMenu = 1;
    });
    $('.menu').mouseleave(function(){
        mouseOverMenu = 0;
    });
    
    $(document).click(function(){
       if(mouseOverMenuTile && !mouseOverMenu){
           $('.menu').toggle(1000);
       }else if(!mouseOverMenuTile && !mouseOverMenu){
           $('.menu').hide(1000);
       }
    });
});

