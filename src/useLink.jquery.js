;(function($){
    $.fn.extend({
      link: function(name) {
            return this.each(function(){
                this.setAttributeNS("http://www.w3.org/1999/xlink", 'href', '#' + name);
            })
      }
    })
})(window.jQuery)