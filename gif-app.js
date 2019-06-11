
var tvShows = ["House of cards", "Game of Thrones", "Arrow", "Stranger Things", "The 100", "Chernobyl"];



function createButtons() {
    // empty buttons before recreating them again to avoid repeated buttons
    $("#buttonsDiv").empty();

    for (var i = 0; i < tvShows.length; i++) {
        var tvShow = tvShows[i];

        var button = $("<button>");

        button.addClass("tv-show-btn");

        button.attr("data-name", tvShow);

        button.text(tvShow);

        $("#buttonsDiv").append(button);
    }

}


$("#add-tvshow").on("click", function (event) {
    // Preventing the buttons default behavior when clicked (which is submitting a form)
    event.preventDefault();
    // This line grabs the input from the textbox
    var tvshow = $("#tvshow-input").val().trim();

    // Adding the movie from the textbox to our array
    tvShows.push(tvshow);

    // Calling renderButtons which handles the processing of our movie array
    createButtons();

});


createButtons();





$(".tv-show-btn").on("click", function () {

    // Storing our giphy API URL for a random cat image
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?api_key=SJZWWz81HkBqQSgmMT6b2DGadQYFz8P9&q=quagmire&limit=10&offset=0&rating=G&lang=en",
        method: "GET"
    })
    // After the data from the AJAX request comes back
    .then(function (response) {
        console.log(response);

        var imageUrl = "https://api.giphy.com/v1/gifs/search?api_key=SJZWWz81HkBqQSgmMT6b2DGadQYFz8P9&q=quagmire&limit=10&offset=0&rating=G&lang=en"

        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var image = $("<img>");

        // Setting the image src attribute to imageUrl
        image.attr("src", imageUrl);
        image.attr("alt", "TV Show image");

        // Prepending the image to the gifs div
        $("#gifsDiv").prepend(image);
    });
});

