jQuery(".partner-slider").owlCarousel({
  autoplay: true,
  rewind: true, 
  margin: 50,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  loop:true,
  dots:false,
  navText: [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'
  ],
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 2
    },

    1366: {
      items: 2
    }
  }
});

// Language Dropdown Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize language dropdown
  initLanguageDropdown();
  
  // Set current language from localStorage or default to English
  const currentLang = localStorage.getItem('selectedLanguage') || 'en';
  updateLanguageDisplay(currentLang);
});

function initLanguageDropdown() {
  const dropdownToggle = document.querySelector('.language-dropdown-toggle');
  const dropdownMenu = document.querySelector('.language-dropdown-menu');
  
  if (!dropdownToggle || !dropdownMenu) return;
  
  // Toggle dropdown on click
  dropdownToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const isActive = dropdownToggle.classList.contains('active');
    
    // Close all other dropdowns
    document.querySelectorAll('.language-dropdown-toggle').forEach(toggle => {
      toggle.classList.remove('active');
    });
    document.querySelectorAll('.language-dropdown-menu').forEach(menu => {
      menu.classList.remove('show');
    });
    
    // Toggle current dropdown
    if (!isActive) {
      dropdownToggle.classList.add('active');
      dropdownMenu.classList.add('show');
    }
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownToggle.classList.remove('active');
      dropdownMenu.classList.remove('show');
    }
  });
  
  // Handle language selection
  const languageItems = dropdownMenu.querySelectorAll('.language-dropdown-item');
  languageItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const selectedLang = this.getAttribute('data-lang');
      const selectedText = this.textContent.trim();
      
      // Update localStorage
      localStorage.setItem('selectedLanguage', selectedLang);
      
      // Update display
      updateLanguageDisplay(selectedLang);
      
      // Close dropdown
      dropdownToggle.classList.remove('active');
      dropdownMenu.classList.remove('show');
      
      // Trigger language change event
      triggerLanguageChange(selectedLang);
    });
  });
}

function updateLanguageDisplay(lang) {
  const dropdownToggle = document.querySelector('.language-dropdown-toggle');
  if (!dropdownToggle) return;
  
  const languageNames = {
    'en': 'English',
    'es': 'Español',
    'fr': 'Français',
    'de': 'Deutsch',
    'it': 'Italiano',
    'pt': 'Português',
    'ru': 'Русский',
    'zh': '中文',
    'ja': '日本語',
    'ko': '한국어',
    'ar': 'العربية',
    'hi': 'हिन्दी'
  };
  
  const currentText = dropdownToggle.querySelector('.current-language');
  if (currentText) {
    currentText.textContent = languageNames[lang] || 'English';
  }
  
  // Update active state in dropdown menu
  const dropdownMenu = document.querySelector('.language-dropdown-menu');
  if (dropdownMenu) {
    const languageItems = dropdownMenu.querySelectorAll('.language-dropdown-item');
    languageItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('data-lang') === lang) {
        item.classList.add('active');
      }
    });
  }
}

function triggerLanguageChange(lang) {
  // Dispatch custom event for language change
  const event = new CustomEvent('languageChanged', {
    detail: { language: lang }
  });
  document.dispatchEvent(event);
  
  // You can add more language-specific functionality here
  console.log('Language changed to:', lang);
  
  // Example: Update page content based on language
  // This would typically involve loading translation files
  // For now, we'll just log the change
}
jQuery(".review-slider").owlCarousel({
  autoplay: true,
  rewind: true, 
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  loop:true,
  items:1,
  margin: 150,
  nav:true,
  // dots:true,
  navText: [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'
  ],  
});
$(document).ready(function () {
   function isElementPartiallyInViewport(el, threshold = 0.3) {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || $(window).height();

      const elementHeight = rect.height;
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);

      return visibleHeight / elementHeight >= threshold;
    }

    function checkBgDrkInView() {
      let inView = false;

      $('.bg-drk').each(function () {
        if (isElementPartiallyInViewport(this)) {
          inView = true;
          return false; // Exit .each early
        }
      });

      if (inView) {
        $('.fixed-btn').addClass('light-btn');
      } else {
        $('.fixed-btn').removeClass('light-btn');
      }
    }

    $(window).on('scroll resize', checkBgDrkInView);
    checkBgDrkInView(); // Initial check
});

$(document).ready(function(){

var current_fs, next_fs, previous_fs; //fieldsets
var opacity;
var current = 1;
var steps = $("fieldset").length;

setProgressBar(current);

$(".next").click(function(){

current_fs = $(this).parent();
next_fs = $(this).parent().next();

//Add Class Active
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

//show the next fieldset
next_fs.show();
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
next_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(++current);
});

$(".previous").click(function(){

current_fs = $(this).parent();
previous_fs = $(this).parent().prev();

//Remove class active
$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

//show the previous fieldset
previous_fs.show();

//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
previous_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(--current);
});

function setProgressBar(curStep){
var percent = parseFloat(100 / steps) * curStep;
percent = percent.toFixed();
$(".progress-bar")
.css("width",percent+"%")
}

$(".submit").click(function(){
return false;
})

});