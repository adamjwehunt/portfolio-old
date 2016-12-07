$(document).ready(function(){

// var navBar = $('.navbar');
//
//
//
//
//
//
//
//   var sel = "#scr-home";
//   var perc = 0;

  // $(document).scroll(function (e) {
    // var scroll = $(this).scrollTop();
    //
    // var anchor = $("#about").offset().top;
    //
    // perc = scroll / $(document).innerHeight();

    // update dependent classes

    // $(".navbar").css("background", "hsl(" + perc * 51 + ", 40%, 40%)");
    // $(".knockout").css("color", "hsl(" + perc * 255 + ", 50%, 50%)");

    // change navbar

    // if (scroll > anchor && sel == "#scr-home") {
    //   console.log("change");
    //   console.log($(this).scrollTop());
    //   console.log($(document).innerHeight());
    //   $('.navbar').addClass("minimize");
    //
    // } else if (scroll < anchor && sel != "#scr-home") {
    //   console.log("change2");
    //   $('.navbar').removeClass("minimize");
    //
    // }
    //
    // var set = function(id) {
    //   if (sel == id) return;
    //   $("[id^='scr-']").removeClass("btn-sel");
    //   $(id).addClass("btn-sel");
    //   sel = id;
    // }

    // set selected page

    // if (scroll < $("#about").offset().top) {
    //   set("#scr-home");
    // } else if (scroll < $("#portfolio").offset().top) {
    //   set("#scr-about");
    // } else if (scroll < $("#contact").offset().top) {
    //   set("#scr-portfolio");
    // } else {
    //   set("#scr-contact");
    // }

  // });

  // $(".btn").mouseover(function() {
  //   $(this).addClass("knockout");
  //   $(".knockout").css("color", "hsl(" + perc * 255 + ", 50%, 50%)");
  // }).mouseout(function() {
  //   if ($(this).attr("id") == sel.replace("#", "")) return;
  //   $(this).removeClass("knockout");
  //   $(this).css("color", "#FFF");

//







});

function scrollTo(element) {
  var position = 0;
  if (element != 0) {
    position = $(element).offset().top;
  }
  $("html, body").animate({ scrollTop: position }, "slow");
}

(function() {
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = '//cdn.youracclaim.com/assets/utilities/embed.js';
var o = document.getElementsByTagName('script')[0];
o.parentNode.insertBefore(s, o);
})();

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-88638593-1', 'auto');
ga('send', 'pageview');
