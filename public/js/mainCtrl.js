// google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-88638593-1', 'auto')
ga('send', 'pageview')

var owlIndex, cWrapClass,
    owl = $('.owl-carousel'),
    navBar = $('.navbar'),
    percent = 0,
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
    360: {
      items: 1.25,
      margin: 15
    },
    450: {
      items: 1.3,
      margin: 30
    },
    500: {
      items: 1.4,
      margin: 40
    },
    600: {
      items: 1.5,
      margin: 50
    },
    700: {
      items: 1.6,
      margin: 100
    },
    900: {
      items: 1.7,
      margin: 150
    },
    1100: {
      items: 1.8,
      margin: 250
    },
    1200: {
      items: 1.9,
      margin: 300
    },
    1300: {
      items: 2.05,
      margin: 325
    },
    1400: {
      items: 2.08,
      margin: 375
    },
    1500: {
      items: 2.1,
      margin: 425
    },
    1600: {
      items: 2.2,
      margin: 475
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


//ScrollTo NAV
function scrollTo(element, diff) {
  var position = 0
  if (element != 0) {
    position = $(element).offset().top - diff
  }
  $("html, body").animate({ scrollTop: position }, "slow")
}

$('.aboutLink').click(function () {
  scrollTo('#portrait', 60)
})

$('.projectsLink').click(function () {
  scrollTo('#projects', 35)
})

$('.contactLink').click(function () {
  scrollTo('#contact', 0)
})

$('.bottomLink').click(function () {
  scrollTo('#copyright', 0)
})

$('.topLink').click(function () {
  scrollTo(0, 0)
})
