$(document).ready(function(){
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 50 ){
            $('.navbar').css('background' ,'#2B2B2B'); 
            $('.navbar-toggler').css('hover', '#FFF');
            } else{
                $('.navbar').css ('background' ,'transparent');
            }
        });
        
        $('#btn-feadback').click(function(){
            $('#feedback-form').fadeToggle('slow');
             });
	
        $(window).scroll(function(){
            if ($(this).scrollTop() >=200) 
            {
                $('.scroll-animet').slideDown(1000);
            } 	else 
            {
                $('.scroll-animet').slideUp(1000);
            }
 
        });
        
 
});
