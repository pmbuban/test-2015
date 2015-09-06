# Requires
_ = (window._)
Backbone = (window.Backbone)
$ = (window.jQuery)
Backbone.$ = $

#json
countryData = require '../data/countries.json'

CountrySearch =
  Models: {}
  Collections: {}
  Views: {}


CountrySearch.Models.CountryModel = require './model/countryModel.coffee'

CountrySearch.Collections.CountryCollection = require './collection/countryCollection.coffee'

CountrySearch.Views.KeyboardView = require './view/keyboardView.coffee'
CountrySearch.Views.SearchView = require './view/searchView.coffee'
CountrySearch.Views.ResultsView = require './view/resultsView.coffee'


class CountrySearch.App
  constructor: () ->
    #models
    @models =
      countryModel: new CountrySearch.Models.CountryModel()

    #collections
    @collections =
      countryCollection: new CountrySearch.Collections.CountryCollection(countryData.countries.country)

    #views
    @views =
      keyboardView: new CountrySearch.Views.KeyboardView()
      searchView: new CountrySearch.Views.SearchView()
      resultsView: new CountrySearch.Views.ResultsView()

$ ->
  app = new CountrySearch.App
    el: $("body")
  return
