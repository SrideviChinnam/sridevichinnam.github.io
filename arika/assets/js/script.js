$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots:true,
    nav: true,
    navText: [
      '<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.16666 20.5L17.1667 30.5M7.16666 20.5L17.1667 10.5M7.16666 20.5H24.6667M33.8333 20.5H29.6667" stroke="#25316F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      '<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.8333 20.5L23.8333 10.5M33.8333 20.5L23.8333 30.5M33.8333 20.5H16.3333M7.16667 20.5H11.3333" stroke="#25316F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  });
  $('.select2').select2();
  var $dates = $('#from, #to').datepicker();

  $('#clear-dates').on('click', function () {
      $dates.datepicker('setDate', null);
  });

  const themes = {
    blue: {
        '--primary-color': '#5143d9',
    },
    green: {
        '--primary-color': '#1ec28b',
    },
    yellow: {
      '--primary-color': '#ecb71d',
  },
  };
 document.querySelectorAll('.color-button').forEach(el => {
      el.addEventListener('click', () => {
          const theme = themes[el.dataset.theme];
          for (var variable in theme) {
              document.documentElement.style.setProperty(variable, theme[variable]);
          };
      });
  });

  
  // $(window).scroll(function(){
  //     var scroll = $(window).scrollTop();
  //     if (scroll > 50) {
  //          $(".navbar").addClass("fixed-top", 3000); 	       
  //     }

  //     else{
  //         $(".navbar").removeClass("fixed-top", 3000);	
  //     }
  // })
});