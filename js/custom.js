$(document).ready(function(){
    $(".basket").click(function(){
        $(this).toggleClass("cartshow");
    });
    $(".menu").click(function(){
        $('body').toggleClass('mob-menu');
    });
    $(".site-layer").click(function(){
        $('body').removeClass('mob-menu');
    });
    $(".close-btn").click(function(){
        $('body').removeClass('mob-menu');
    })
   
      
});


