_ = (window._)
Backbone = (window.Backbone)
$ = (window.jQuery)
Backbone.$ = $

CountryModel = require './../model/countryModel.coffee'

class CountryCollection extends Backbone.Collection

  model: CountryModel

  initialize: (options) ->
    @options = options

module.exports = CountryCollection
