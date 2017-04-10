;(function($){
    $.fn.extend({
      classify: function(align) {
            
            var svg = $(this)
            
            return this.each(function(){
                
                svg.find('[id*="."]').each(function(i, e){
                    var id = $(e).attr('id')
                    var cls = id.match(/(\.[a-zA-Z]+)/g)
                    
                    var newid = id.split('_')
                    
                    $(e).attr('id', newid[0])
                    
                    cls.forEach(function(d, i){
                        $(e).addClass(d)
                    })
                    
                    console.log('classify', id, cls, newid)
                })
                
                
//                svg.find('[id]').each(function(i, e){
//                    var id = $(this).attr('id').replace(/_\d+_"/g, '')
//                    $(this).addClass(id)
//                })

            })
      }
    })
})(window.jQuery)