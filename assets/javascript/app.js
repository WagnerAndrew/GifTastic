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

 function displayAuthorInfo() {

    var author = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?t=" + authorInput + "&y=&plot=short&apikey=trilogy";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#gifVP").text(JSON.stringify(response));
    });
  }











//PROCESS



