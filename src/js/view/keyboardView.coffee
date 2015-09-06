Backbone = require 'backbone'
$ = require 'jquery'
Backbone.$ = $

module.exports = Backbone.View.extend
  # el: $
  initialize: () ->
    @render()

  render: () ->
    $('body').prepend '<p>Woooooooooooo!!!</p>'

  events: () ->
