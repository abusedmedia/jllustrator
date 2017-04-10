;(function($){
    var num = $('[jllustrator]').length
    var cnt = 0
    if(num>0){
        $.holdReady(true)
        $('[jllustrator]').each(function(i, e){
            var path = $(this).attr('jllustrator')
            $(this).insertSvg(path, function(){
                
                var svg = $(this).find('svg')
                
                svg.sanityCheck()
                svg.warnFonts()
                svg.classify()
                
                /* 
                _j|right
                _j|center
                */
                svg.find('text[id$="_j|right"]').textAlign('right')
                svg.find('text[id$="_j|center"]').textAlign('center')
                
                $(this).attr('data-aid', 'aid'+i)
                $(this).sandboxRef()
                
                cnt++
                if(cnt>=num){
                    $.holdReady(false)
                } 
            })
        })
    }
})(window.jQuery)