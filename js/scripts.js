$(document).ready(function(){
    $(".design").click(function(){
        $(".design-showing").toggle();
        $(".design-hidden").toggle();
    })
    $(".development").click(function(){
        $(".development-showing").toggle();
        $(".development-hidden").toggle();
    })
    $(".product").click(function(){
        $(".product-showing").toggle();
        $(".product-hidden").toggle();
    });
});

