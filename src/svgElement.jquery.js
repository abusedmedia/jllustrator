;(function($){
    $.fn.extend({
      svgElement: function(param) {
          var el = document.createElementNS('http://www.w3.org/2000/svg', param)
          return $(el)
      }
    })
})(window.jQuery)


