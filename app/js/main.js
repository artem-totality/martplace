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

    $('.header__top-menu-btn').on('click', function(){
        $('.header__top-box').toggleClass('header__top-box--visible');
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

    $('.product-main__box-title').on('click', function(){
        $(this).toggleClass('product-main__box-title--closed');
        $(this).next().slideToggle();
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    if ($('.newest-product__inner-box').length) {
        var mixer = mixitup('.newest-product__inner-box');
      }

});