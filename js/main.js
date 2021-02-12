jQuery(function($) {
   $('#bgimg-slider').bgSwitcher({
    images: ['https://yuki-tsuruhara.github.io/profile/img/japan-3002336_1920.jpg','https://yuki-tsuruhara.github.io/profile/img/night-452706_1920.jpg','https://yuki-tsuruhara.github.io/profile/img/cherry-blossoms-301251_1920.jpg'],
    effect: "fade",
    easing: "linear",
    duration:1500
   });
  });

// スクロール

$(function() {
   $('.top_btn').click(function() {
      $('html,body').animate({'scrollTop':0},500);
   });
   
   $('.js_nav').click(function() {
      let id = $(this).attr('href');
      let position = $(id).offset().top;

      $('html,body').animate({
         'scrollTop':position
      },500);
   });
});

// フェードイン
// $(function() {
//    $(window).on('load scroll',function() {
//       $('.fadein').each(function() {
//           let scroll = $(window).scrollTop();
//           let windowHeight = $(window).height();
//           let fadeHeight = $(this).offset().top;
//           if(scroll > fadeHeight - windowHeight + 200) {
//              $(this).removeClass('fadein')
//              $(this).addClass('scrollin');
//           }
//        });
//    });
// ;})

// フェードイン２

ScrollReveal().reveal('.fadein', { 
   duration: 1600, 
   origin: 'top', 
   distance: '50px',
   reset: true   
 });


// ヘッダーアイコン

$('.burger-btn').on('click',function(){
   $('.burger-btn').toggleClass('close');
   $('.header_nav_wrapper').toggleClass('slide-in');
 });
