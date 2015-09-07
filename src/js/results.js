

// called from keyboard.js > "enter"
function searchCountries(searchTerm){

  // console.log(searchTerm, countryTotal);

  clearResults();

  for (var i=0; i < countryTotal; i++){
    //search name if field isn't empty
    var resultFound = false;

    if(countries[i].name){
      resultFound = verifyName(searchTerm, countries[i].name, i)
      if(resultFound){
        // console.log (i, countries[i].name, "country match");

        //add search results
        if(countries[i].hasOwnProperty('languages')){
          addCountry(countries[i].name, countries[i].languages)
        } else{
          addCountry(countries[i].name, countries[i].languagesError)
        }
      }
    }

    //search languages if match isn't found in country name
    if(!resultFound){
      //search
      if(countries[i].hasOwnProperty('languages')){

        resultFound = verifyLang(searchTerm, countries[i].languages, i);
        if(resultFound){
          addCountry(countries[i].name, countries[i].languages)
          // console.log (i, countries[i].name, countries[i].languages.length, countries[i].languages, "lang match");
        }
      } else {
        resultFound = verifyLang(searchTerm, countries[i].languagesError, i);
        if(resultFound){
          addCountry(countries[i].name, countries[i].languagesError)
          // console.log (i, countries[i].name, countries[i].languagesError.length, countries[i].languagesError, "langerror match");
        }
      }
    }
  }
}

function verifyName(searchTerm, countryName, index){
  var nameResult = countryName.search(new RegExp(searchTerm, "i"));
  // console.log(index, countryName, result);
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
    //search until match found, no need to keep searching
    langResult = langArray[i].search(new RegExp(searchTerm, "i"));
    // console.log(langArray.length, langArray[i], langResult)
    if(langResult != -1){
      if(!matchFound){
        matchFound = true;
      }
    }
    // } else {
    //   if(!matchFound){
    //     matchFound = false
    //   }
    // }
  }
  return matchFound;
}

function clearResults(){
  $("ul#results").html("");
}