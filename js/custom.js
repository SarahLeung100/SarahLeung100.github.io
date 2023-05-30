(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });


  document.addEventListener('DOMContentLoaded', function() {
  // Get all resume-item elements
  var resumeItems = document.querySelectorAll('.resume-item');
  
  // Calculate the offset position of each resume-item element
  var offsetPositions = Array.from(resumeItems).map(function(item) {
    return item.offsetTop - window.innerHeight;
  });
  
  // Function to handle scroll event
  function handleScroll() {
    var scrollPosition = window.scrollY;
    
    // Add appropriate animation class to each resume-item based on scroll position
    Array.from(resumeItems).forEach(function(item, index) {
      if (scrollPosition >= offsetPositions[index]) {
        if (index % 2 === 0) {
          item.classList.add('animate-left');
        } else {
          item.classList.add('animate-right');
        }
      }
    });
  }
  
  // Attach scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Trigger the initial animation if elements are already in the viewport on page load
  handleScroll();
});


//Add animation to #ABOUT section typed-text
    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
      var typed_strings = $('.typed-text').text();
      var typed = new Typed('.typed-text-output', {
          strings: typed_strings.split(', '),
          typeSpeed: 100,
          backSpeed: 20,
          smartBackspace: false,
          loop: true
      });
  }


//Add animation to the #COMPENTENCIES and #JOURNEY section using wow and waypoints libraries
// Initialize WOW
new WOW().init();

// Initialize Waypoints
var waypoint = new Waypoint({
  element: document.querySelector('.wow'),
  handler: function() {
    // Add the 'animated' class to trigger the WOW animation
    this.element.classList.add('animated');
  },
  offset: '75%' // Adjust the offset as needed
});

//Toggle the #Portfolio items on click
$(document).ready(function() {
  $('.portfolio-link').click(function(e) {
    e.preventDefault();
    var $caption = $(this).find('.caption-port');
    $caption.toggleClass('active');
  });
});


})(jQuery); // End of use strict
