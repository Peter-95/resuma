$(document).ready(function () {
    // navbar  dynamic background
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {
            $('.navbar').css('background', '#2B2B2B');
            $('.navbar-toggler').css('hover', '#FFF');
        } else {
            $('.navbar').css('background', 'transparent');
        }
    });

    // navbar active color
    $('.navbar li a').click(function (e) {
        $('.navbar a').removeClass('active');
        $(this).addClass('active');
    });


    // secation scroll smoothly
    $('.navbar li a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 1000);
    });


    // syc navbar with section
    $(window).scroll(function () {
        $(secation).each(function () {
            if ($(window).scrollTop() > $(this).offset().top) {
                var blockID = $(this).arrt('id');
                $('.navbar a').removeClass('active');
                $('.navbar li a[data-scroll="' + blockID + '"]').addClass('active');
            }
        });
    });

    // feedback button
    $('#btn-feadback').click(function () {
        $('#feedback-form').fadeToggle('slow');
    });
});
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) {
            $('.scroll-animet').slideDown(1000);
        } else {
            $('.scroll-animet').slideUp(500);
        }
    });


// scrollup btn
$(window).scroll(function () {

    if ($(window).scrollTop() >= 1000) {
        $('.scrollup-btn').fadeIn(500);
    } else {
        $('.scrollup-btn').fadeOut(500);
    }
});
$('.scrollup-btn').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});
