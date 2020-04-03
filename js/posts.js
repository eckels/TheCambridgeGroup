var numberNews = 0;
var numberInsights = 0;
$(document).ready(function() {
    numberNews = 0;
    numberInsights = 0;
    $("#news-lower .article").each(function() {
        numberNews++;
    });
    
    if (numberNews % 3 == 2) {
        numberNews++;
        $('#news-lower').append("<div class='article-bar'></div>");
    }
    $("#insights-lower .article").each(function() {
        numberInsights++;
    });
    
    if (numberInsights % 3 == 2) {
        numberInsights++;
        $('#insights-lower').append("<div class='article-bar'></div>");
    }
});

numberNews = 0;
numberInsights = 0;
$("#news-lower .article").each(function() {
    numberNews++;
});

if (numberNews % 3 == 2) {
    numberNews++;
    $('#news-lower').append("<div class='article-bar'></div>");
}
$("#insights-lower .article").each(function() {
    numberInsights++;
});

if (numberInsights % 3 == 2) {
    numberInsights++;
    $('#insights-lower').append("<div class='article-bar'></div>");
}