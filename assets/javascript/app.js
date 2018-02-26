


//  Set API key var
var apiKey = "2ghodvhyD3uhWuaeQIshjL20JhGYxhwd";
// var apiKey = "dc6zaTOxFJmzC";

// var searchFor = "cats";

var topics = ["doberman"];

renderButtons();

$(".topic-button").on("click", function () {

    // API GIPHY URL for random images 
    var queryURL = "https://api.giphy.com/v1/gifs/random?&tag=" + searchFor + "&api_key=" + apiKey;

    console.log(queryURL);

    // call the API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("results: " + response);

        var results = response.data;

        for (var i = 0; i <= 10; i++) {

            var imageUrl = response.data.image_original_url;
            console.log(results[i].images_original_url);
            var topicimage = $("<img>");
            var topicDiv = $("<div>");
            var topicimage = $("<img>");
            topicimage.attr("src", results[i].images.fixed_height_still);
            topicDiv.append(p);
            topicDiv.append(topicimage);
            $("#topics").prepend(topicDiv);

            topicimage.attr("src", imageUrl);
            topicimage.attr("alt", "topicimage");

            $("#topic-image").prepend(topicimage);
            
        }
    });
});

function renderButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < topics.length; i++) {

        var a = $("<button>");
        a.addClass("topic-button");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
    }
}

$("#add-topic").on("click", function (event) {
    event.preventDefault();

    var topic = $("#topic-input").val().trim();
    if (topic !== '') {

        topics.push(topic);
        console.log(topics)

        renderButtons();
    }
});
