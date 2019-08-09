$(document).ready(function(){

    var $menu = $("#menu");

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
            $menu.fadeOut('fast',function(){
                $(this).removeClass("default")
                    .addClass("fixed transbg")
                    .fadeIn('fast');
            });
        } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.fadeOut('fast',function(){
                $(this).removeClass("fixed transbg")
                    .addClass("default")
                    .fadeIn('fast');
            });
        }
    });//scroll

    $menu.hover(
        function(){
            if( $(this).hasClass('fixed') ){
                $(this).removeClass('transbg');
            }
        },
        function(){
            if( $(this).hasClass('fixed') ){
                $(this).addClass('transbg');
            }
        });//hover
});//jQuery