/**
 * Function to modify the font size of paragraphs to 16px
 */
$(document).ready(function(){
    $(".btn1").click(function(){
         $(".paragraph_container p").animate({
             fontSize: '16px'
         });
     });
});

/**
 * Function to modify the font size of paragraphs to 17px
 */
$(document).ready(function(){
    $(".btn2").click(function(){
         $(".paragraph_container p").animate({
             fontSize: '17px'
         });
     });
});

/**
 * Function to modify the font size of paragraphs to 18px
 */
$(document).ready(function(){
    $(".btn3").click(function(){
         $(".paragraph_container p").animate({
             fontSize: '18px'
         });
     });
});

/**
 * Display opening hours information
 */
function showParagraph1() {
    $('.hidden1').html(
        "Opening Hours - MON-SAT 07:00 - 20:00"
    );
}

/**
 * Display adult price information
 */
function showParagraph2() {
    $('.hidden2').html(
        "Adult Price - £14.00"
    );
}

/**
 * Display teen price information
 */
function showParagraph3() {
    $('.hidden3').html(
        "Teen Price - £12.00"
    );
}

/**
 * Display child price information
 */
function showParagraph4() {
    $('.hidden4').html(
        "Child Price - £9.00"
    );
}

// Event handler for showing paragraphs when 'more' element is clicked
$(document).ready(function() {
    $(".more").click(function() {
       showParagraph1();
       showParagraph2();
       showParagraph3();
       showParagraph4();
   });
});
