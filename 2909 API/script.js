var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
    "method": "POST",
    "headers": {
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "x-rapidapi-key": "cdfd1f9d65msh2213eae9ce786a8p15f97fjsn793c9e32ef4a", 
        "content-type": "application/x-www-form-urlencoded"
    },
    "data": {
        "source": "en",
        "q": "",
        "target": ""
    }
};

$(document).ready(function () {
    $(".dropdown-item").click(function (e) {
        if ($(this).attr("tolang") != 'en') {
            settings.data.target = $(this).attr("tolang");
            $('button').html($(this).html());
        } else {
            settings.data.target = ""; // Reset the target language to default
            $('button').html("Translate to");
        }
    });

    $("#translateButton").click(function () {
        var inputText = $("#textInput").val();
        if (inputText) {
            settings.data.q = inputText;
            fetchTranslation();
        }
    });
});

function fetchTranslation() {
    $.ajax(settings).done(function (response) {
        console.log(response);
        var translatedText = response.data.translations[0].translatedText;
        $("#translationOutput").val(translatedText);
    });
}
