;(function($){
    $.fn.extend({
        textAlign: function(align) {
            
            return this.each(function(){
                
                var _align = (align == 'center') ? 'middle' : 'end'

                var bbox = $(this)[0].getBBox();
                console.log(bbox)

//                var tr = d3.transform( d3.select(sel).attr('transform') )
//                var _val = (align == 'center') ? bbox.width/2 : bbox.width
//                tr.translate[0] += _val
//                
//                $(this).css({'transform': tr, 'text-anchor':_align})

            })
        }
    })
})(window.jQuery)