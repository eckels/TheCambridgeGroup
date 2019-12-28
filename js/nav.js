$('.link-trigger').on("touchstart", function (e) {
    "use strict";
    var link = $(this);
    if (link.hasClass('mobile-hover')) {
        return true;
    } else {
        link.addClass("mobile-hover");
        $('.link-trigger').not(this).removeClass("mobile-hover");
        e.preventDefault();
        return false;
    }
});

$('#desktop-search-input').focus(function() {
    var curr = $('#border-target');
    if (curr.hasClass('input-wrapper-focus') == false) {
        curr.addClass('input-wrapper-focus');
    }
});

$('#desktop-search-input').focusout(function() {
    var curr = $('#border-target');
    if (curr.hasClass('input-wrapper-focus') == true) {
        curr.removeClass('input-wrapper-focus');
    }
});

$('.search-open').click(function() {
    var curr = $('#desktop-search-wrapper');
    curr.css("visibility", "visible");
    $('#search-shader').css("opacity", 0.75);
    $('#desktop-search-input').focus();
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

// Mobile

$(function() {
    $(document).scroll(function () {
        var $nav = $("#mobile-homepage");
        $nav.toggleClass('mobile-nav-transparent', $(this).scrollTop() <= $nav.height());
    });
});

$('.mobile-search-target').click(function() {
    var curr = $('.mobile-search-wrapper');
    curr.css("visibility", "visible");
    $('.mobile-search-shader').css("opacity", 0.75);
    $('#mobile-search-input').focus();
});

$('#mobile-search-exit').click(function() {
    var curr = $('.mobile-search-wrapper');
    curr.css("visibility", "hidden");
    $('.mobile-search-shader').css("opacity", 0);
});