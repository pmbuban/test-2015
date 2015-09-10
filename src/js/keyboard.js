var inputUsed = false; //tracks if input has been clicked
var searchMethod = "instant"; //search as you type
// var searchMethod = "interaction"; //search when you hit enter

//clear search field
$("#clear-search").click(function(){
  $('input#search').val("");
  inputUsed = true;
});

//clear search when clicked inside of input
$("input#search").click(function(){
  if (!inputUsed){
    $('input#search').val("");
    inputUsed = true;
  }
});

$(document).keyup(function(e) {
  // -----------------------------------------------
  // -------------- 2 ways to search ---------------
  // - must set the searchMethod variable to "instant"/"interaction"
  if(searchMethod == "interaction"){
    // method 1 - search after user hits "enter"
    if(e.which == 13) {
       searchCountries( $("input#search").val() );
    }
  } else if (searchMethod == "instant"){
    // method 1 - search as user types
    initSearch()
  }
});

$("a.key-container").click(function(e){
  e.preventDefault();
  //append value to existing input text
  var character = $(this).data('char-id')

  // handle special keys
  if (character === "space") {
    character = " ";
  } else if (character === "enter"){
    // run search function in results.js
    searchCountries( $("input#search").val() );
    character = "";
  }

  if(!inputUsed){
    // clear field and append
    $("input#search").val(character);
  } else {
    // append to existing text
    $("input#search").val( $("input#search").val() + character);
  }

  if (searchMethod == "instant"){
    initSearch();
  }

  inputUsed = true;
});

function initSearch(){
  console.log("search: "+$("input#search").val() )
  clearResults();
  searchCountries( $("input#search").val() );
}