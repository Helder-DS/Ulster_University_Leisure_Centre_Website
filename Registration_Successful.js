/**
 * JQury functions to increase or decrease size text for accessability
 */

$(document).ready(function(){
    $(".btn1").click(function(){
         $(".radio-title, .gender-title, .details").animate({
             fontSize: '16px'
         });
     });
});

$(document).ready(function(){
    $(".btn2").click(function(){
         $(".radio-title, .gender-title, .details").animate({
             fontSize: '17px'
         });
     });
});


$(document).ready(function(){
    $(".btn3").click(function(){
         $(".radio-title, .gender-title, .details").animate({
             fontSize: '18px'
         });
     });
});