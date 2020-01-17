$(window).scroll(function () {
if ($(window).scrollTop() >= 50) {
$('.navbar').css('background','#2B2B2B');
} else {
$('.navbar').css('background','transparent');
}
});
