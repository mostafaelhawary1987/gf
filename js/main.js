

$(document).ready(function(){


   
    $(window).scroll(function () {
        $(this).scrollTop() >= 47 ? $(".header").addClass("scroll") : $(".header").removeClass("scroll");
    }),
    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault(),
            $(document).off("scroll"),
            $("a")
                .parent()
                .each(function () {
                    $(this).removeClass("active");
                }),
            $(this).parent().addClass("active");
        var i = this.hash;
        ($target = $(i)),
            $("html, body")
                .stop()
                .animate({ scrollTop: $target.offset().top + 2 }, 500, "swing", function () {
                    window.location.hash = i;
                });
    });

  

    $(window).scroll(function () {
        $(this).scrollTop() >= 1 ? $(".header").addClass("scroll") : $(".header").removeClass("scroll");
    }),
    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault(),
            $(document).off("scroll"),
            $("a")
                .parent()
                .each(function () {
                    $(this).removeClass("active");
                }),
            $(this).parent().addClass("active");
        var i = this.hash;
        ($target = $(i)),
            $("html, body")
                .stop()
                .animate({ scrollTop: $target.offset().top + 2 }, 900, "swing", function () {
                    window.location.hash = i;
                });
    });
$("#openNav").click( function() {

    $('.sidenav').addClass('open');
    $('.overlay').fadeIn();
    $('body').addClass('ovh');
});

$(".closebtn,.overlay").click( function() {
    $('.sidenav').removeClass('open');
    $('.overlay').fadeOut();
    $('body').removeClass('ovh');
});


});
$('.side-project').owlCarousel({
    autoplay: false,
    rtl: true,
    margin:30,
    loop:false,
    nav: false,
    dots:true,
    navText: ["<i class='fas fa-chevron-right'></i>","<i class='fas fa-chevron-left'></i>"],
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        767: {
            items: 2
        },
        991: {
            items: 2   
        },
        1199: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:0},"1000");return false})})


$(window).on("load", function () {
    $('body,html').scrollTop(0)
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");


    });
});
$('.search-bar').on('click', function(event) {
    event.preventDefault();
    $('#search').addClass('open');
    $('#search > form > input[type="search"]').focus();
});

$('#search, #search button.close').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
        $(this).removeClass('open');
    }
});

// var galleryTop = new Swiper('.gallery-top', {
//     spaceBetween: 10,
//            loop: true,
//           loopedSlides: 4
//   });
//   var galleryThumbs = new Swiper('.gallery-thumbs', {
//     spaceBetween: 10,
//     centeredSlides: true,
//     slidesPerView: 'auto',
   
//     slideToClickedSlide: true,
//           loop: true,
//           loopedSlides: 4
//   });
//   galleryTop.controller.control = galleryThumbs;
//   galleryThumbs.controller.control = galleryTop;
// window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $('.top-bar').addClass('fixedheader');
  } else {
    $('.top-bar').removeClass('fixedheader');
  }
}
if ($(window).width() <= 768){ 
    $(".wow").removeClass("wow");
    }

