$(document).ready(function () {
    var b = $("#hgt2").height();
    $("#hgt3").height(b);
    var a = $("#hgt").height();
    $("#hgt1").height(a);
    $("#master").click(function () {
        $("#plan-cnt1").hide(500);
        $("#plan-cnt").show(500);
        $("#master").addClass("active");
        $("#floor1").removeClass("active");
    });
    $("#floor1").click(function () {
        $("#plan-cnt").hide(500);
        $("#plan-cnt1").show(500);
        $("#master").removeClass("active");
        $("#floor1").addClass("active");
    });

    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });
});

























































































































    