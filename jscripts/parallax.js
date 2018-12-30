$(window).scroll(function() {
  parallax();
})

function parallax() {

var wScroll = $(window).scrollTop();

$('.parallax-bg').css('background-position', 'center '+(wScroll*-0.05)+'px');


$('.parallax-text').css('opacity', wScroll*.0015);

}




var intViewportHeight = window.innerHeight;
console.log('vh= '+intViewportHeight);