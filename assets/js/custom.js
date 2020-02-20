/*
=========================
scrolling navbar 
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
            items:2
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