$(function(){

  "use strict";

//preloader js
 $(window).on('load', function(){
   $(".preloader").delay(1000).fadeOut(500);
 });
//testmonial slider
$('.testmonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    fade: true,
    speed:2000,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
  });

  //counter up
    $('.counter').counterUp({
      delay: 10,
      time: 3000
    });

   
  //smots scroll
      var html_body = $('html, body');
      $('.collapse a').on('click', function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  html_body.animate({
                      scrollTop: target.offset().top - 0
                  }, 1500);
                  return false;
              }
          }
      });
  
     
   var back2top = $(".back-to-top");
   var html_body = $('html, body');
   back2top.click(function(){
       html_body.animate({scrollTop:0},1500);
   });
   
   $(window).scroll(function(){
   var scrolling = $(this).scrollTop();
   if(scrolling > 500){
       back2top.fadeIn(500);
   }
   else{
       back2top.fadeOut(500);
   }
   if(scrolling > 500){
    $(".navbar").addClass("bg");
  }
  else{
      $(".navbar").removeClass("bg");
  }


  });
    
  
  // init Isotope
$('#grid').isotope({
  // options
});
// filter items on button click
$('#filter-iteams').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $('#grid').isotope({ filter: filterValue });
});  
   


/*particals*/
particlesJS("particles-js", {
  
  "particles": {
    "number": {
      "value": 558,
      "density": {
        "enable": true,
        "value_area": 801.7060304327614
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.9379960556063308,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 881.8766334760375,
        "rotateY": 3206.8241217310456
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

//lightbox js
$('.venobox').venobox();


  
    
});