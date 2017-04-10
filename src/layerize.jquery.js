;(function($){
    $.fn.extend({
      layerize: function(selectors) {
            var that = $(this)
            var coll = []
            
            this.each(function(){
                
                var parent = that.parent()
                var wrapper = $('<div style="position:relative;"></div>')
                parent.append(wrapper)
                wrapper.append(that)
                
                var viewBox = that.attr('viewBox')
                
                
                that.find(selectors).each(function(i, e){

                    var styleabs = 'style="position:absolute;left:0;top:0;"'
                    
                    var newsvg = $(document.createElementNS("http://www.w3.org/2000/svg", "svg"))
                    newsvg.attr('viewBox', viewBox)
                    newsvg.css('position', 'absolute')
                    newsvg.css('top', 0)
                    newsvg.css('left', 0)
//                    var newsvg = $('<svg viewBox="'+viewBox+'" '+styleabs+' xmlns="http://www.w3.org/2000/svg"></svg>')
                    newsvg.append($(e))
                    wrapper.append(newsvg)
                    
                    coll.push(newsvg)

                })
                
            })
          
            return $(coll)
      }
    })
})(window.jQuery)