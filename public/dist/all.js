'use strict';

// angular.module('adamPortfolio',[])

$(document).ready(function () {

  var navBar = $('.navbar'),
      sendMessage = $('.sendmessage');
  // sendMessageExpand = $('.sendmessage .expand');


  var sel = "#scr-home";
  var perc = 0;

  $(document).scroll(function (e) {

    var scroll = $(this).scrollTop();
    var anchor = $("#about").offset().top;

    perc = scroll / $(document).innerHeight();

    // update dependent classes

    // $(".nav, .dark-rect").css("background", "hsl(" + perc * 255 + ", 50%, 50%)");
    // $(".knockout").css("color", "hsl(" + perc * 255 + ", 50%, 50%)");

    // change navbar

    if (scroll > anchor && sel == "#scr-home") {
      console.log("change");
      $('.navbar').addClass("minimize");
    } else if (scroll < anchor && sel != "#scr-home") {
      console.log("change2");
      $('.navbar').removeClass("minimize");
    }
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
  });

  // $(".btn").mouseover(function() {
  //   $(this).addClass("knockout");
  //   $(".knockout").css("color", "hsl(" + perc * 255 + ", 50%, 50%)");
  // }).mouseout(function() {
  //   if ($(this).attr("id") == sel.replace("#", "")) return;
  //   $(this).removeClass("knockout");
  //   $(this).css("color", "#FFF");

  //


  //contactform collapse
  $('.collapsible').collapsible();

  // sendMessage.on('click', function(){
  //   sendMessage.toggleClass('expand');
  // })
  //
  // sendMessageExpand.on('click', function(){
  //   this.removeClass('expand');
  // })

});

function scrollTo(element) {
  var position = 0;
  if (element != 0) {
    position = $(element).offset().top;
  }
  $("html, body").animate({ scrollTop: position }, "slow");
}