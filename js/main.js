$(document).ready(function () {
    $('.header-slider').slick({
        dots: true,
        infinite: true,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      });
    $('.special-offer-slider').slick({
      dots: true,
      infinite: true,
      slideToShow: 1,
      slideToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    });
    $('.clint-testimonia').slick({
      dots: true,
      infinite: true,
      slideToShow: 1,
      slideToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    });
    $('[data-toggle="tooltip"]').tooltip();
    $( ".ellipsis-icon" ).click(function() {
        $(".topbar-right-menu").toggle({
            "display": "block"
        }
        )
    });
});