$(document).ready(function(){
 // enable parallax:
  var hero = $('.parallax-window').first()
  hero.css({'height':($(window).height())+'px'});
  $(window).resize(function(){
        hero.css({'height':($(window).height())+'px'});
    });

 // enable animation to scroll to local links
  $('li#bs-example-navbar-collapse-1').localScroll();

   $('.vendor-scroll').localScroll();


});