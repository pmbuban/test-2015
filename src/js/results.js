// called from keyboard.js > "enter"
function searchCountries(searchTerm){
  clearResults();

  for (var i=0; i < countryTotal; i++){
    //search country name if field isn't empty
    var resultFound = false;

    // search countries for match
    if(countries[i].name){
      resultFound = verifyName(searchTerm, countries[i].name, i)
      if(resultFound){
        //pass search results and languages
        if(countries[i].hasOwnProperty('languages')){
          addCountry(countries[i].name, countries[i].languages);
        } else{
          addCountry(countries[i].name, countries[i].languagesError);
        }
      }
    }

    //search languages if match isn't found in country name
    if(!resultFound){
      //check if property languages/languagesError exists
      if(countries[i].hasOwnProperty('languages')){
        resultFound = verifyLang(searchTerm, countries[i].languages, i);
        if(resultFound){
          addCountry(countries[i].name, countries[i].languages);
        }
      } else {
        resultFound = verifyLang(searchTerm, countries[i].languagesError, i);
        if(resultFound){
          addCountry(countries[i].name, countries[i].languagesError);
        }
      }
    }
  }
}

function verifyName(searchTerm, countryName, index){
  // search via regular expression
  var nameResult = countryName.search(new RegExp(searchTerm, "i"));
  if(nameResult > -1){
    return true;
  } else {
    return false
  }
}

function verifyLang(searchTerm, langArray, index){
  var langResult;
  var matchFound = false;

  for (var i=0; i < langArray.length; i++){
    // search until match found, no need to keep searching
    langResult = langArray[i].search(new RegExp(searchTerm, "i"));
    // a match would return a value greater than -1
    if(langResult != -1){
      //match only needs to be set to true once
      if(!matchFound){
        matchFound = true;
      }
    }
  }
  return matchFound;
}

function clearResults(){
  $("ul#results").html("");
}

function initSearch(){
  clearResults();
  searchCountries( $("input#search").val() );
}