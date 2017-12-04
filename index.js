/*global $*/
$(document).ready(function() {
    function getQuote() {
        $.ajax({
            method: "GET",
            url: "https://got-quotes.herokuapp.com/quotes",
            success: function(response) { //arguments are your choice of name, need to be consistant in subsequent lines.
                $('#quote').text(response.quote); //jQuery to replace html text instead of: document.getElementById("quote").innerHTML = response.quote;
                $("#character").text(response.character);
            }
        });
    }
    getQuote();
    $("#getQuote").click(function() { //can also do .on('click', function(event){
        getQuote();
    });
});

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
