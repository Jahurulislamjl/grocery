$(document).ready(function () {
  $('.header-slider').slick({
    dots: true,
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.client-testimonial').slick({
    dots: true,
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $('[data-toggle="tooltip"]').tooltip();

  $(".menu-icon").click(function () {
    $(".topbar-right-menu").toggle({
      "display": "block"
    }
    )
  });
 // =====================topbar=====================
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $(".topbar").addClass('topbar-shadow');
    } else {
      $(".topbar").removeClass('topbar-shadow');
    }

    if ($(document).scrollTop() > 350) {
      $(".topbar-bottom").addClass('show');
    } else {
      $(".topbar-bottom").removeClass('show');
      $(".navbar-nav").removeClass('navbar-nav-menu');
    }
  });
// ====================login section=====================
$(".login-with-email").click(function () {
  $(".using-phoneNo").addClass('hide');
  $(".using-email").addClass('show');
});
$(".login-with-number").click(function () {
  $(".using-email").removeClass('show');
  $(".using-phoneNo").removeClass('hide');
});
// ================all category menu=====================
  $(".all-category").click(function () {
    $(".navbar-nav").toggleClass('navbar-nav-menu')
  });
// =================pick up scroll=======================
  $(window).scroll(function() {
    if ($(document).scrollTop() > 700) {
      $(".pick-up-icon").css({
        "display": "block"
      });
    } else {
      $(".pick-up-icon").css({
        "display": "none"
      });
    }
  });

  $(".pick-up-icon").click( function() {
    $(window).scrollTop(0);
  });
 // ================product order chart===================
  $(".shoping-bag").click( function() {
    $(".chart").css({
      "right": "0"
    });
  });
  $(".chart-close").click( function() {
    $(".chart").css({
      "right": "-450px"
    });
  });
});

// ===============need help and product tabs==================
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " tab-active";
}
