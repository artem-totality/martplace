$(function () {

    $('.rate-star').rateYo({
        rating: 4,
        starWidth: '17px',
        readOnly: true
    });

    $('.week-product__slider').slick({
        prevArrow: '<button class="slick-arrow slick-prev">&#xe875;</button>',
        nextArrow: '<button class="slick-arrow slick-next">&#xe876;</button>'
    });

    $('.followers-feed__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        prevArrow: '<button class="slick-arrow slick-prev">&#xe875;</button>',
        nextArrow: '<button class="slick-arrow slick-next">&#xe876;</button>'
    });

    $('.feedback__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button class="slick-arrow slick-prev">&#xe875;</button>',
        nextArrow: '<button class="slick-arrow slick-next">&#xe876;</button>'
    });

    var mixer = mixitup('.newest-product__inner-box');

});