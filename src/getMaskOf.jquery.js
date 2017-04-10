;(function($){
    $.fn.extend({
        getMaskOf: function(param) {
            var el = $(this).find(param)
            var uri = el.attr('clip-path')
            var val = /url\((.*)\)/g.exec(uri)[1]
            var clip = $(this).find(val + ' > *').attr('xlink:href')
            var m = $(this).find(clip)
            return m
        }
    })
})(window.jQuery)


