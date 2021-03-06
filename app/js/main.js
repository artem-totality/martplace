$(function () {

    $('.rate-star').rateYo({
        rating: 4,
        starWidth: '13px',
        readOnly: true
    });

    $('.week-product__slider').slick({
        prevArrow: '<button class="slick-arrow slick-prev">&#xe875;</button>',
        nextArrow: '<button class="slick-arrow slick-next">&#xe876;</button>',
        responsive: [
            {
              breakpoint: 1170,
              settings: {
                arrows: false,
                fade: false,
                dots: true
              }
            }
          ]
    });

    $('.followers-feed__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        prevArrow: '<button class="slick-arrow slick-prev">&#xe875;</button>',
        nextArrow: '<button class="slick-arrow slick-next">&#xe876;</button>',
        responsive: [
            {
              breakpoint: 1170,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                variableWidth: false,
                // fade: false,
                dots: true
              }
            },
            {
                breakpoint: 920,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  variableWidth: false,
                  // fade: false,
                  dots: true
                }
              }
          ]
    });

    $('.feedback__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button class="slick-arrow slick-prev">&#xe875;</button>',
        nextArrow: '<button class="slick-arrow slick-next">&#xe876;</button>',
        responsive: [
            {
              breakpoint: 1170,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                variableWidth: false,
                // fade: false,
                dots: true
              }
            }
          ]
    });

    $('.header__top-menu-btn').on('click', function(){
        $('.header__top-box').toggleClass('header__top-box--visible');
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

    //smooth open menu

    $('.menu__item').on('click', function(){
      if(window.innerWidth < 901) {
        $(this).children(":first").next().slideToggle();
      }
      
    });

    //smooth open menu

    $('.product-main__box-title').on('click', function(){
        $(this).toggleClass('product-main__box-title--closed');
        $(this).next().slideToggle();
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 330,
        from: 30,
        to: 300,
        prefix: "$"
    });

    if ($('.product-box').length) {
        var mixer = mixitup('.product-box');
    }

});