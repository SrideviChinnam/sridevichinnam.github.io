$(document).ready(function () {
    var burger = $(".hamburger-box");

    burger.on("click", function (e) {
        $(this).toggleClass("active");
        $('.js-nav').parent().find('.menu').toggleClass('active');
    });
});