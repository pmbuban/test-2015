var inputUsed = false;
var searchMethod = "instant"; //search as you type
// var searchMethod = "interaction"; //search as you type
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

// -----------------------------------------------
// -------------- 2 ways to search ---------------
// - must set the searchMethod variable to "instant"/"interaction"
$(document).keyup(function(e) {
  if(searchMethod == "interaction"){
    //serach when user hits enter on keyboard or virtual keyboard
    if(e.which == 13) {
       searchCountries( $("input#search").val() );
    }
  } else if (searchMethod == "instant"){
    //search as user types
    clearResults();
    searchCountries( $("input#search").val() );
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
  inputUsed = true;
});

