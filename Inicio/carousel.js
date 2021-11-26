window.addEventListener('load', function(){
    new Glider(document.querySelector('.selft__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.selft__indicadores',
        draggable: true,
        arrows: {
            prev: '.selft__anterior',
            next: '.selft__siguiente'
        },
        responsive: [
            {
              // screens greater than >= 450px
              breakpoint: 450,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '2',
                slidesToScroll: '2',
              }
            },{
              // screens greater than >= 800px
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              }
            }
          ]
    });
});

let parallax =
document.querySelector('.parallax')
;

function scrollParallax(){
  let scrollTop =
  document.documentElement.scrollTop;
  parallax.style.transform = 
  'translateY(' + scrollTop * -0.3 + 'px)';
}

window.addEventListener('scroll', scrollParallax);
