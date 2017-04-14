;(function($){
    $.fn.extend({
        getMask: function() {
            var el = $(this)
            var par = el.parent()
            var uri = el.attr('clip-path')
            var val = /url\((.*)\)/g.exec(uri)[1]
            var clip = par.find(val + ' > *').attr('xlink:href')
            var m = par.find(clip)
            return m
        }
    })
})(window.jQuery)


