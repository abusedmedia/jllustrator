;(function($){
    $.fn.extend({
      sanityCheck: function(align) {
            
            var svg = $(this)
            return this.each(function(){
               
                if(svg.attr('width') || svg.attr('height')){
                    console.warn('width or hight attribute found, better to remove them!')
                }
                
                if(!svg.attr('viewBox')){
                    console.warn('viewBox not found! Better to include')
                }

            })
      }
    })
})(window.jQuery)