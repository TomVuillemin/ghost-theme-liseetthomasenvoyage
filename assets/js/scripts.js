$( function()
    {
        $('.post-full-content img').wrap(function() {
          return "<a class='gallery' data-fancybox='gallery' data-caption='" + this.alt +"' href='" + this.src + "'/>";
        });
        $('img[src$="#line"]').attr("src",function() {
            let tab = this.src.split('#');
            return tab[0] + "?w=300&h=300#" + tab[1];
        });
        $('img[src$="#half"]').attr("src",function() {
            let tab = this.src.split('#');
            return tab[0] + "?w=500&h=500#" + tab[1];
        });
    });
