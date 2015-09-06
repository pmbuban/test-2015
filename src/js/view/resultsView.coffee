_ = (window._)
Backbone = (window.Backbone)
$ = (window.jQuery)
Backbone.$ = $

module.exports = Backbone.View.extend
  initialize: () ->
    @render()
  render: () ->
    $('body').prepend '<p>Woooooooooooo!!!</p>'
