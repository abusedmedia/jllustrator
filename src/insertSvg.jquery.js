;(function($){
    $.fn.extend({
      insertSvg: function(path, clb) {
            
            var that = this

            $.get(path, function(data){
                
                var svg = $(data.documentElement)

                return that.each(function(){
                    $(this).append(svg)
                    if(clb){
                        clb.bind(that)()
                    } 
                })

            })
      }
    })
})(window.jQuery)