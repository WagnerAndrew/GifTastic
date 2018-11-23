
// VARIABLES

var authorArr = ["Ernest Hemingway", "Cormac McCarthy", "Henry David Thorough", "Emily Dickinson"];

//FUNCTIONS

// FUNCTION 1

function buttons () {

    $("#btnVP").empty ();

    for (var i = 0; i < authorArr.length; i++) {
        var button = $("<button>");
        button.addClass("author btn btn-outline-secondary m-1");       
        button.attr("data-name", authorArr[i]);      
        button.text(authorArr[i]);     
        $("#btnVP").append(button);
    }
}

 // FUNCTION 2
      
$("#submitBtn").on("click", function(event) {
  
    event.preventDefault();
    var authorInput = $("#authorInput").val().trim();
    authorArr.push(authorInput);
    buttons();
});

buttons ();

 // FUNCTION 3

 function displayGifs() {

    var apiKey = "LV0ypr93m56rG5vGRtePavvqGnVPmzDo"
    var authorButton = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + authorButton + "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log (response);

        var gifRow = $("<div class='row m-1 border border-primary'>");
        var gifDiv = $("<div class='col border border-primary clearfix'>");
        for (var i = 0; i < response.data.length; i++) {



            var authorGif = $("<img class='m-1'>");
            var gifURL = response.data[i].images.fixed_height_small.url;

            authorGif.attr("src", gifURL);
            gifDiv.append(authorGif);

        }

        gifRow.append(gifDiv);
        $("#gifVP").prepend(gifRow);

    });
  }



//PROCESS

$(document).on("click", ".author", displayGifs);














