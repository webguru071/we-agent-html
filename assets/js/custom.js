
/*
=========================
Preloader  
=========================
*/
$(window).on('load', function () {
    $('#preloader').fadeOut();
    $('#loader').delay(3000).fadeOut('slow');
});


/*
=========================
scrolling navbar (Home page 1)
=========================
*/

$(window).scroll(function() {
    if ($(this).scrollTop() > 5) {
        $(".scrolling-navbar").addClass("fixed-me");
    } else {
        $(".scrolling-navbar").removeClass("fixed-me");
    }
});

/*
=========================
scrolling navbar (Home Page 2)
=========================
*/

$(window).scroll(function() {
    if ($(this).scrollTop() > 5) {
        $(".scrolling-navbar-2").addClass("fixed-me-2");
    } else {
        $(".scrolling-navbar-2").removeClass("fixed-me-2");
    }
});

/*

/*
================================
Top search form open
================================
*/
var sp = document.querySelector('.search-open');
var searchbar = document.querySelector('.search-inline');
var shclose = document.querySelector('.search-close');

function changeClass() {
    searchbar.classList.add('search-visible');
}

function closesearch() {
    searchbar.classList.remove('search-visible');
}
sp.addEventListener('click', changeClass);
shclose.addEventListener('click', closesearch);






 /*----------------------------------------
        Video Plugin
    ----------------------------------------*/


var $iframe = $('iframe'),
    $videoLink = $('.video-link'),
    playerTemplate =
    '<div class="player"><div class="player__video"><div class="video-filler"></div><button class="video-close">&times;</button><iframe class="video-iframe" src="{{iframevideo}}" frameborder="0" allowfullscreen></iframe></div><div/>';

$videoLink.on('click', function (e) {
    var localTemplate = '',
        videoWidth = parseInt($(this).data('width')),
        videoHeight = parseInt($(this).data('height')),
        videoAspect = (videoHeight / videoWidth) * 100,
        // elements
        $player = null,
        $video = null,
        $close = null,
        $iframe = null;

    e.preventDefault();

    localTemplate = playerTemplate.replace(
        '{{iframevideo}}',
        $(this).prop('href')
    );

    $player = $(localTemplate);

    $player.find('.video-filler').css('padding-top', videoAspect + '%');

    $close = $player.find('.video-close').on('click', function () {
        $(this)
            .off()
            .closest('.player')
            .hide()
            .remove();
    });

    $player.appendTo('body').addClass('js--show-video');
});

/*
================================
Carousel Slider (Project section)
================================
*/
$('.owl-project').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        },
        1400:{
            items:4
        }
    }
})


/*
================================
Carousel Slider (Team section)
================================
*/
$('.owl-team').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],

    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

/*
================================
Carousel Slider (Testimonial section)
================================
*/
$('.owl-testimonial').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],

    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/*wow animation js*/

new WOW().init();


/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/

