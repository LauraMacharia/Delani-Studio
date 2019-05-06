$(document).ready(function(){
    $(".clickable").click(function(){
        $(this).children(".hide").toggle();
        $(this).children("img").toggle();
    })
})

document.getElementById("send")
alert = ("We have received your message. Thank you for reaching out to us.")
