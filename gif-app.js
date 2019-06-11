
var tvShows = ["House of cards", "Game of Thrones", "Arrow", "Stranger Things", "The 100", "Chernobyl"];

// ---------------------------------- CREATE BUTTONS:
function createButtons() {
    // empty buttons before recreating them again to avoid repeated buttons
    $("#buttonsDiv").empty();

    for (var i = 0; i < tvShows.length; i++) {
        var tvShow = tvShows[i];

        var button = $("<button>");

        button.addClass("tvshow-btn");

        button.attr("data-tvshow", tvShow);

        button.text(tvShow);

        $("#buttonsDiv").append(button);
    }
}

createButtons();


// ---------------------------------- DISPLAY GIFS:
$(".tvshow-btn").on("click", function () {

    // for this example, the "this" keyword refers to the button that was clicked
    var tvShow = $(this).attr("data-tvshow");

    // Constructing a URL to search Giphy for the name of the person who said the quote
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=SJZWWz81HkBqQSgmMT6b2DGadQYFz8P9&q=" +
        tvShow + "&limit=10&offset=0&rating=G&lang=en";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // After the data from the AJAX request comes back
    .then(function (response) {
        // Storing an array of results in the results variable
        var results = response.data;

        // Looping over every result item
        for (var i = 0; i < results.length; i++) {

            // Only taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                // Creating a div for the gif
                var gifDiv = $("<div>");

                // Storing the result item's rating
                var rating = results[i].rating;

                // Creating a paragraph tag with the result item's rating
                var pTagRating = $("<p>").text("Rating: " + rating);

                pTagRating.addClass("rating-possition");

                // Creating an image tag
                var tvShowImage = $("<img>");

                tvShowImage.addClass("gifs-possition");

                // Giving the image tag an src attribute of a proprty pulled off the
                // result item
                tvShowImage.attr("src", results[i].images.fixed_height.url);

                // Appending the paragraph and tvShowImage we created to the "gifDiv" div we created
                gifDiv.append(pTagRating);
                gifDiv.append(tvShowImage);

                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                $("#gifsDiv").prepend(gifDiv);


                // Saving the image_original_url property
                var imageUrl = response.data.image_original_url;

                // Creating and storing an image tag
                var image = $("<img>");

                // Setting the image src attribute to imageUrl
                image.attr("src", imageUrl);
                // image.attr("alt", "TV Show image");

                // Prepending the image to the gifs div
                $("#gifsDiv").prepend(image);
            }
        }
    });
});


$("#add-tvshow").on("click",function(e){
    e.preventDefault();
    
})





