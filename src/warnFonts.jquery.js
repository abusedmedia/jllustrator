;(function($){
    $.fn.extend({
      warnFonts: function() {
            
            return this.each(function(){
                var fontUsed = []
                $(this).find('[font-family]').each(function(e, i){
                    var font = $(this).attr('font-family')
                    if(fontUsed.indexOf(font) < 0){
                        fontUsed.push(font)
                    }
                })
                if(fontUsed.length>0){
                    console.warn('Font name found:', fontUsed.toString())
                } 
            })

      }
    })
})(window.jQuery)