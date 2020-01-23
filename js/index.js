
$(window).scroll(function () {
    if ($(window).scrollTop() >= 50 ){
    $('.navbar').css('background' ,'#2B2B2B'); 
    $('.navbar-toggler').css('hover', '#FFF');
    } else{
        $('.navbar').css ('background' ,'transparent');
    }
});


$(document).ready(function(){
    $('#btn-feadback').click(function(){
       $('#feedback-form').fadeToggle('slow');
        });
});
