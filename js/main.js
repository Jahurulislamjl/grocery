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
      autoplaySpeed: 5000,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              centerMode: true,
              //centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              //centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 425,
            settings: {
              arrows: false,
              centerMode: true,
              //centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });
    $('.clint-testimonial').slick({
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