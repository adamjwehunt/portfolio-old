"use strict";

$(document).ready(function () {

  var navBar = $('.navbar'),
      percent = 0;

  $(document).scroll(function (e) {
    var scroll = $(this).scrollTop();

    percent = scroll / $(document).innerHeight();

    navBar.css("background", "hsl(" + percent * 3.9 + ", " + percent * 84 + "%, " + (20 + percent * 23.5) + "%)");
  });

  var options = [{ selector: '.hithere', offset: 50, callback: function callback() {
      $(function () {
        $(".hithere").typed({
          strings: ["Hi there"],
          typeSpeed: 100,
          startDelay: 250
        });
      });
    } }, { selector: '.content ul', offset: 175, callback: function callback(el) {
      Materialize.showStaggeredList($(el));
    } }];
  Materialize.scrollFire(options);
});

function scrollTo(element) {
  var position = 0;
  if (element != 0) {
    position = $(element).offset().top;
  }
  $("html, body").animate({ scrollTop: position }, "slow");
}

(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments);
  }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-88638593-1', 'auto');
ga('send', 'pageview');