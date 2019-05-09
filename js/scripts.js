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
    $('img').hover(function(){
		$(this).toggleClass('blur');
    });
    $('input.button').click(function(){
        var me = $('#inpt').val();
        alert("Hello " + me);
        alert("Your message has been received. Thank you for reaching out to us");
    })	
});

