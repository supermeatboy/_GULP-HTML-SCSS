$( document ).ready(function() {

    /*loadSvg*/
    $('[data-svg]').each(function(){
        var $this = $(this);
        var $svg = $this.data('svg');
        var $filename = $svg.split('\\').pop().split('/').pop().replace(".svg", "");

        $this.load($svg, function(responseTxt, statusTxt){
            if(statusTxt == "success"){
                $this.find('svg').addClass('svg svg-'+$filename+'');
            }
        });
    });
    thumbImg();
    /*menu*/
    $('.header__toggle-menu').on('click', function () {
        var $this = $(this);
        $this.closest('.header').toggleClass('menu-open');
    });

});

function thumbImg() {
    $('[data-thumb]').each(function () {
        var $this = $(this);
        var img = $this.find('img').attr('src');
        var size = $this.data('thumb');
        $this.css({
            'background-image': 'url(' + img + ')',
            'background-size': '' + size + ''
        });
    });
    return false;
}
