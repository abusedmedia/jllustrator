;(function($){
    $.fn.extend({
      compose: function(selectors) {
            var that = $(this)
            return this.each(function(){
                
                var parent = that.parent()
                var wrapper = $('<div style="position:relative;"></div>')
                parent.append(wrapper)
                wrapper.append(that)
                
                var viewBox = that.attr('viewBox').split(' ')
                
                that.find(selectors).each(function(i, e){

                    var bbox = $(e)[0].getBBox();

                    var w = 100 * bbox.width / +viewBox[2]
                    var h = 100 * bbox.height / +viewBox[3]

                    var vb = 'viewBox="'+bbox.x+' '+bbox.y+' '+Math.round(bbox.width)+' '+Math.round(bbox.height)+'"'

                    var styleabs = 'style="position:absolute;left:'+bbox.x+'%;top:'+bbox.y+'%;"'
                    //var viewBox = '0 0 ' + bbox.width + ' ' + bbox.height
                    var newsvg = $('<svg '+vb+' '+styleabs+' xmlns="http://www.w3.org/2000/svg" width="'+w+'%" height="'+h+'%"></svg>')
                    newsvg.append($(e))
                    wrapper.append(newsvg)

                })
                    
                
                
            })
      }
    })
})(window.jQuery)