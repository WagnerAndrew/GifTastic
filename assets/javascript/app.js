
// VARIABLES

var authorArr = ["Edgar Allan Poe", "Mary Shelley", "Ernest Hemingway", "Emily Dickinson", "Cormac McCarthy", "Henry David Thoreau"];

//FUNCTIONS

// FUNCTION 1

function buttons () {

    $("#btnVP").empty ();

    for (var i = 0; i < authorArr.length; i++) {
        var button = $("<button>");
        button.addClass("author btn btn-info m-1");       
        button.attr("data-name", authorArr[i]);      
        button.text(authorArr[i]);     
        $("#btnVP").append(button);
    }
}

 // FUNCTION 2
  
 function displayGifs() {

    var apiKey = "LV0ypr93m56rG5vGRtePavvqGnVPmzDo"
    var authorButton = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + authorButton + "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log (response);

        var gifRow = $("<div class='row m-2 p-1 border border-dark rounded newColor'>");
        var gifDiv = $("<div class='col'>");
        

        for (var i = 0; i < response.data.length; i++) {

            var image = $("<img class='figure-img img-fluid rounded gif'>")
            var imageURL = response.data[i].images.fixed_height_small_still.url;
            var imageCaption = $("<figcaption class='figure-caption text-dark'>" + "Rating: " + (response.data[i].rating).toUpperCase () + "</figcaption>");
            var gifFig = $("<figure class='figure m-1'>");

            image.attr("src", imageURL);
            image.attr("data-state", "still");
            image.attr("data-still", response.data[i].images.fixed_height_small_still.url);
            image.attr("data-animate", response.data[i].images.fixed_height_small.url);
            gifFig.append(image, imageCaption);
            gifDiv.append(gifFig);
            
        }
            
        gifRow.append(gifDiv);
        $("#gifVP").prepend(gifRow);

    });
  }

//PROCESS

$("#submitBtn").on("click", function(event) {
  console.log (event);
    event.preventDefault();
    var authorInput = $("#authorInput").val().trim();
    authorArr.push(authorInput);
    buttons();
    $("#authorInput").val('');

});

buttons ();

$(document).on("click", ".author", displayGifs);

$(document).on("click", ".gif", function() {

    var state = $(this).attr("data-state");
 
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });




