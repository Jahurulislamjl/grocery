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

  $(".ellipsis-icon").click(function () {
    $(".topbar-right-menu").toggle({
      "display": "block"
    }
    )
  });
// =====================topbar=====================
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $("#topbar").addClass('topbar-shadow');
    } else {
      $("#topbar").removeClass('topbar-shadow');
    }

    if ($(document).scrollTop() > 350) {
      $(".topbar-bottom").addClass('show');
    } else {
      $(".topbar-bottom").removeClass('show');
      $(".navbar-nav").removeClass('navbar-nav-menu');
    }
  });


  // $(".active-category").hover(function(){
  //   $(".navbar-nav").addClass('navbar-nav-menu')},function(){$(".navbar-nav").removeClass('navbar-nav-menu');
  //   });

  $(".all-category").click(function () {
    $(".navbar-nav").toggleClass('navbar-nav-menu')
  });

});

// $(".active-category").hover(function(){
//   $(".navbar-nav").prependTo(".active-category").show();
//   },function(){$(".navbar-nav").hide();})
