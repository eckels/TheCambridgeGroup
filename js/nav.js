$('.link-trigger').on("touchstart", function (e) {
    "use strict"; //satisfy the code inspectors
    var link = $(this);
    if (link.hasClass('mobile-hover')) {
        return true;
    } else {
        link.addClass("mobile-hover");
        $('.link-trigger').not(this).removeClass("mobile-hover");
        e.preventDefault();
        return false; //extra, and to make sure the function has consistent return points
    }
});

$('#search-input').focus(function() {
    var curr = $('#border-target');
    if (curr.hasClass('input-wrapper-focus') == false) {
        curr.addClass('input-wrapper-focus');
    }
});

$('#search-input').focusout(function() {
    var curr = $('#border-target');
    if (curr.hasClass('input-wrapper-focus') == true) {
        curr.removeClass('input-wrapper-focus');
    }
});

$('.search-open').click(function() {
    var curr = $('#desktop-search-wrapper');
    curr.css("visibility", "visible");
    $('#search-shader').css("opacity", 0.75);
    $('#search-input').focus();
});

$('#search-exit').click(function() {
    var curr = $('#desktop-search-wrapper');
    curr.css("visibility", "hidden");
    $('#search-shader').css("opacity", 0);
});

$(function() {
    $(document).scroll(function () {
        var $nav = $("#homepage");
        $nav.toggleClass('desktop-nav-transparent', $(this).scrollTop() <= $nav.height());
    });
});