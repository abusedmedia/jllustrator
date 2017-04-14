;(function ($) {
    $.fn.extend({
        grid: function (row, col) {
            var arr = []
            var x = 0
            var y = 0
            var c = 0
            for (var i = 0; i < col; ++i) {
                for (var j = 0; j < row; ++j) {
                    
                    arr.push({
                        i: c,
                        x: x/col,
                        y: y/row,
                        w: 0,
                        h: 0
                    })

                    x++
                    c++

                    if(c % col == 0){
                        y++
                        x=0
                    }
                }
            }
            return $(arr)
        }
    })
})(window.jQuery)