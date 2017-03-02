$(document).ready(function(){

  var navBar = $('.navbar'),
      percent = 0;

  $(document).scroll(function (e) {
    var scroll = $(this).scrollTop();

    percent = scroll / $(document).innerHeight();

    navBar.css("background", "hsl(" + percent * 3.9 + ", " + percent * 84 + "%, " + (20 + (percent * 23.5))+ "%)");

  });


  var options = [
    {selector: '.hithere', offset: 70, callback: function() {
      $(function(){
        $(".hithere").typed({
          strings: ["Hi there"],
          typeSpeed: 100,
          startDelay: 400
        });
      });
    } },
    {selector: '.content ul', offset: 175, callback: function(el) {
      Materialize.showStaggeredList($(el));
    } },
    {selector: '#copyright', offset: -20, callback: function(el) {
      setTimeout(function () {
        $('.sendmessage').addClass('animated pulse');
      }, 500);
    } }
  ];
  Materialize.scrollFire(options);


  //carousel
  // $('.carousel').carousel();
  //
  // $('.carousel.carousel-slider').carousel({fullWidth: true})
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    responsive:{
        0:{
            items:1.15
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

  //reload on orientation change
  $(window).on( "orientationchange", function() {
    location.reload();
  })

});
// END JQUERY



//ScrollTo NAV
function scrollTo(element) {
  var position = 0;
  if (element != 0) {
    position = $(element).offset().top;
  }
  $("html, body").animate({ scrollTop: position }, "slow");
}

function scrollToDelayed(element) {
  var position = 0;
  if (element != 0) {
    position = $(element).offset().top;
  }

  setTimeout(function () {
    $("html, body").animate({ scrollTop: position }, "slow");
  }, 250);
}


// google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-88638593-1', 'auto');
ga('send', 'pageview');
