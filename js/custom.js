// mixitup
var config = document.querySelector('.mixit_box');
var mixer = mixitup(config);
// mixitup
// partner slider
$('.team_box').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    cssEase: 'linear',
    arrows: false,
    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// partner slider
// partner slider
$('.cutomer_slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    cssEase: 'linear',
    arrows: false,
    padding: 0,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            },
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// partner slider
// navbar scrolling
$(window).scroll(function () {
    var scrolling = $(window).scrollTop();

    if (scrolling > 20) {
        $('.menu_bg').addClass('bg')
    } else {
        $('.menu_bg').removeClass('bg')
    };


});
// navbar scrolling
// 991px navbar
$('.menu_btn').click(function () {
    $('.navbar .menu_bar').toggleClass('active')
});
$('.menu_btn').click(function () {
    $('.menu_btn i').toggleClass("xxxx");
});
// 991px navbar