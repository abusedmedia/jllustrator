;(function ($) {
    $.fn.extend({
        range: function (num) {
            var arr = []
            for (var i = 0; i < num; ++i) {
                arr.push({
                    i: i
                })
            }
            return $(arr)
        }
    })
})(window.jQuery)