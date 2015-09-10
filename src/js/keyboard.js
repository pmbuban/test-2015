var inputUsed = false; //tracks if input has been clicked on

//clear search field
$("#clear-search").click(function(){
  $('input#search').val("");
  inputUsed = true;
  clearResults();
  //show all countries on clearing search
  showAllCountries(countries);
});

//clear search when clicked inside of input
$("input#search").click(function(){
  if (!inputUsed){
    $('input#search').val("");
    inputUsed = true;
  }
});

$(document).keyup(function(e) {
  initSearch();
});

$("a.key-container").click(function(e){
  e.preventDefault();
  //append value to existing input text
  var character = $(this).data('char-id');

  // handle special keys
  if (character === "space") {
    character = " ";
  } else if (character === "backspace"){
    // run search function in results.js
    var tmpSearchVal = $("input#search").val();
    tmpSearchVal = tmpSearchVal.substring(0, tmpSearchVal.length - 1);
    $("input#search").val(tmpSearchVal);
    character = ""
  }

  if(!inputUsed){
    // clear field and append
    $("input#search").val(character);
  } else {
    // append to existing text
    $("input#search").val( $("input#search").val() + character);
  }

  inputUsed = true;

  //filter after every character hit
  initSearch();
});

