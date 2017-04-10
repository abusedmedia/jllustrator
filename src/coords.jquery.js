;(function($){
    $.fn.extend({
        coords: function(xy) {
                var svg = this.get(0)
                var pt = svg.createSVGPoint();
                pt.x = xy.x; 
                pt.y = xy.y;
                return pt.matrixTransform(svg.getScreenCTM().inverse());
        }
    })
})(window.jQuery)


