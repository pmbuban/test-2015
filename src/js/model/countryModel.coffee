Backbone = (window.Backbone)

class CountryModel extends Backbone.Model

  defaults:
    name: "Andorra"
    languages: ["ca"]

module.exports = CountryModel