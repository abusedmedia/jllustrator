;(function($){
    $.fn.extend({
      sandboxRef: function() {
            var that = this
            var svg = $(this).find('svg')
            var aid = $(this).data('aid')
            return this.each(function(){
                
                var lookup = ['clip-path', 'fill', 'stroke']
                
                lookup.forEach(function(d, j){
                    svg.find('['+d+'^="url"]').each(function(i, e){
                        var url = $(e).attr(d).replace('url(', '').replace(')', '')
                        var elid = svg.find(url)
                        var newurl = url + '|' + aid
                        $(e).attr(d, 'url(' + newurl + ')')
                        elid.attr('id', newurl.substr(1))
                    })
                })
                
                
                $('[data-aid="' + aid + '"] svg [*|href]').each(function(i, e){
                    var url = $(e).attr('xlink:href')
                    var elid = svg.find(url)
                    var newurl = url + '|' + aid
                    $(e).attr('xlink:href', newurl)
                    elid.attr('id', newurl.substr(1))
                })
                
                
            })

      }
    })
})(window.jQuery)