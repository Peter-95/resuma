
$(window).scroll(function () {
    if ($(window).scrollTop() >= 50 ){
    $('.navbar').css('background' ,'#2B2B2B'); 
    $('.navbar-toggler').css('hover', '#FFF');
    } else{
        $('.navbar').css ('background' ,'transparent');
    }
});



$(window).width(function () {
    if ($(window).width() <= 768 ){
    $('#header').css('width' ,'100vh'); 
    } else{
        $('#header').css ('width' ,'100%');
    }
});

