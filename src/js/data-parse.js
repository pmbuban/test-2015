var countries;
var countryTotal;

function init(){
  loadJSON();
}

function loadJSON(){
  $.getJSON("./data/countries.json", function(data){
    //add data to global variable so that it is accessible to other functions
    countries = data.countries.country;
    countryTotal = countries.length;
    $.each(countries, function(id,countryInfo){
      processCountry(countryInfo);
    });
  });
}

//process country
function processCountry(countryData){
  var langList = [];
  if(countryData.hasOwnProperty('languages')){
    addCountry(countryData.name, countryData.languages)
  } else {
    addCountry(countryData.name, countryData.languagesError)
  }
}

function addCountry(country, langs){
  var listEntry = "";

  // process language depending on amount of languages
  // formatting changes for each case
  if(langs.length == 1){
    listEntry = '<li><a class="country-container"><div class="hover-bar"></div><div class="country-name">' + country + '</div><div class="country-langs">'+ langs + '</div></a></li>'
  } else {
    var langStr="";
    // add commas to separate multiple languages
    for(var i=0; i<langs.length; i++){
      langStr += langs[i]
      if(i != langs.length){
        if(i === langs.length-1){
          // last language in list does not require a comma
          langStr += ""
        } else {
          langStr += ", "
        }
      }
    }
    listEntry = '<li><a class="country-container"><div class="hover-bar"></div><div class="country-name">' + country + '</div><div class="country-langs">'+ langStr + '</div></a></li>';
  }

  $("ul#results").append(listEntry)
}

init();

