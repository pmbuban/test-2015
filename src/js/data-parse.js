var countries;


$(function(){
  function init(){
    loadJSON();
  }

  function loadJSON(){
    $.getJSON("../data/countries.json", function(data){
      countries = data.countries.country;
      // console.log(countries, countries.length)
      $.each(countries, function(id,countryInfo){
        processCountry(countryInfo)
      });
    });
  }

  function processCountry(countryData){
    var langList = [];
    if(countryData.hasOwnProperty('languages')){
      $.each(countryData.languages, function(id, langInfo){
        // console.log(langInfo)
        langList.push(langInfo)
      });
    } else {
      $.each(countryData.languagesError, function(id, langInfo){
        // console.log(langInfo)
        langList.push(langInfo)
      });
    }
    addCountry(countryData.name, langList)
  }

  function addCountry(country, langs){
    // console.log(langs)
    var listEntry = "";

    if(langs.length == 1){
      listEntry = '<li><a class="country-container"><div class="country-name">' + country + '</div><div class="country-langs">'+ langs + '</div></a></li>'
    } else {
      var langStr="";
      for(var i=0; i<langs.length; i++){
        langStr += langs[i]
        if(i != langs.length){
          langStr += ", "
        }
      }
      listEntry = '<li><a class="country-container"><div class="country-name">' + country + '</div><div class="country-langs">'+ langStr + '</div></a></li>';
    }
    // console.log(listEntry)

    $("ul#results").append(listEntry)
  }



  init();
});