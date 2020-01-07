// Smoothscroll
$('.smooth').smoothScroll({offset: -100});
$(window).resize(function() {
    $('.smooth').smoothScroll({offset: -100});
});

$(function() {
    var $sidebar = $("#capabilities-nav-target"), 
    $window = $(window),
    offset = $sidebar.offset(),
    topPadding = 120;
    if ($window.width() <= 900) {
        topPadding = 100;
    }
    $bottomDiv = $('#bottom-target');

    if ($window.width() >= 740) {
        $window.scroll(function() {
            var bottomNavigation = $window.scrollTop() + $sidebar.height() + topPadding;
            var bottomDivPos = $bottomDiv.offset().top + $bottomDiv.height();
            if (bottomNavigation < bottomDivPos) {
                if ($window.scrollTop() > offset.top - 100) {
                    $sidebar.css('margin-top', $window.scrollTop() - offset.top + topPadding);
                } else {
                    $sidebar.css('margin-top', '');
                }
            }
    
            $(".capability").each(function() {
                var divoffset = $(this).offset().top;
                var divheight = $(this).height();
                var curr_href = 'a[href="' + '#' + $(this).attr('id') + '"]';
                if ($sidebar.offset().top >= divoffset && $sidebar.offset().top <= divoffset + divheight) {
                    $(curr_href).addClass('focused');
                } else {
                    $(curr_href).removeClass('focused');
                }
            });
        });
    }
});

$(function() {
    var $window = $(window);
    var $sidebar = $('#sidebar-scroll-target');
    var sidebar_offset = $sidebar.offset().top + $sidebar.height();
    if ($window.width() < 740) {
        $window.scroll(function() {
            $sidebar.toggleClass('fixed', $window.scrollTop() >= sidebar_offset);
        });
    }
});

$(document).ready(function() {
    var $window = $(window);
    var $sidebar = $('#sidebar-scroll-target');
    var sidebar_offset = $sidebar.offset().top + $sidebar.height();
    if ($window.width() < 740) {
        $sidebar.toggleClass('fixed', $window.scrollTop() >= sidebar_offset);


    }
});

document.getElementById('mobile-sidebar').onchange = function() {
    window.location.href = this.children[this.selectedIndex].getAttribute('value');
    var current_location = $(window).scrollTop();
    window.scrollTo(0, current_location - 110);
}