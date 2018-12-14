$(function(){
    $('.ig_i4').click(function (event) {
        event = event || window.event;
        var link = $('.ig_i4').index(this),
                options = {
                    index: link,
                    event: event,
                    youTubeClickToPlay: false
                },
                links = $('.ig_i4 .ig_i10').toArray();
        blueimp.Gallery(links, options);
    });
    $('.ig_i4').on({'mouseenter':function(){
        if($(this).find('.ig_i5').length==0){
            $(this).find('img').wrap("<div class='ig_i5'></div>");
            if($(this).find('a').attr('type')=='img'){
                $(this).find('.ig_i5').append("<div class='ig_i6'><div class='ig_i7'><i class=\"fa fa-search ig_i9\" aria-hidden=\"true\"></i></div></div>");
            }else{
                $(this).find('.ig_i5').append("<div class='ig_i6'><div class='ig_i7'><i class=\"fa fa-youtube-play ig_i9\" aria-hidden=\"true\"></i></div></div>");
            }
            var el=$(this);
            setTimeout(function(){
                el.find('.ig_i6').css('opacity','1');
                el.find('.ig_i9').css('transform','scale(1.1)');
            },1);
        }
    }});
    $('.ig_i4').on('mouseleave',function(){
        $(this).find('img').unwrap();
        $(this).find('.ig_i6').remove();
    });
});