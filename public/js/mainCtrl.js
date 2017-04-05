var owl, navBar, percent, cWrap, owlIndex, cWrapClass


$(document).ready(function(){

  owl = $('.owl-carousel')
  navBar = $('.navbar')
  percent = 0
  cWrap = $('#project-bg')

  // Nav bar color change
  $(document).scroll(function (e) {
    var scroll = $(this).scrollTop()
    percent = scroll / $(document).innerHeight()
    navBar.css("background", "hsl(" + percent * 3.9 + ", " + percent * 84 + "%, " + (20 + (percent * 23.5))+ "%)")
  })

  //ScrollFire => events on scroll
  var options = [
    {selector: '.hithere', offset: 70, callback: function() {
      $(function(){
        $(".hithere").typed({
          strings: ["Hi there"],
          typeSpeed: 200,
          startDelay: 250
        })
      })
    } },
    {selector: '.content ul', offset: 175, callback: function(el) {
      Materialize.showStaggeredList($(el))
    } },
    {selector: '#copyright', offset: -20, callback: function(el) {
      setTimeout(function () {
        $('.sendmessage').addClass('animated pulse')
      }, 500)
    } }
  ]
  Materialize.scrollFire(options)

  //Carousel

  $('.owl-carousel').owlCarousel({
  onChanged: onOwlChanged,
  loop: true,
  margin: 10,
  center: true,
  responsive: {
    0: {
      items: 1.15
    },
    600: {
      items: 2,
      margin: 30
    },
    1000: {
      items: 2,
      margin: 60
    }
  }
});


  //on carousel change
  function onOwlChanged (event) {
    owlIndex = event.item.index
    cWrapClass = cWrap.attr('class')
    if (owlIndex) {
      if (/bg\S/g.test(cWrapClass)) {
        cWrap.removeClass (function (owlIndex, className) {
            return (className.match (/bg\S/g) || []).join(' ');
          })
      }
      cWrap.addClass(`bg${owlIndex}`)
    }
  }


})
// end jquery ^^

//ScrollTo NAV
function scrollTo(element, diff) {
  var position = 0
  if (element != 0) {
    position = $(element).offset().top - diff
  }
  $("html, body").animate({ scrollTop: position }, "slow")
}
function scrollToDelayed(element) {
  var position = 0
  if (element != 0) {
    position = $(element).offset().top
  }
  setTimeout(function () {
    $("html, body").animate({ scrollTop: position }, "slow")
  }, 250)
}


// google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-88638593-1', 'auto')
ga('send', 'pageview')
