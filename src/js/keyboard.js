var inputUsed = false;

$("#clear-search").click(function(){
  $('input#search').val("");
  inputUsed = true;
});

$("input#search").click(function(){
  if (!inputUsed){
    $('input#search').val("");
    inputUsed = true;
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
    // run search function
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

