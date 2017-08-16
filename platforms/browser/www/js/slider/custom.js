 
/*-----------------------------------
 Quick Mobile Detection
 -----------------------------------*/

 var isMobile = {
    Android: function() {
      "use strict";
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      "use strict";
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      "use strict";
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      "use strict";
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      "use strict";
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      "use strict";
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

/*-----------------------------------
 Page PreLoader
 -----------------------------------*/

$(window).load(function() {
  "use strict";
  $(".loader").delay(800).fadeOut();
  $("#preloader").delay(1200).fadeOut("slow");
});

 /*-----------------------------------
 Home Section Slab Text
 -----------------------------------*/

$(window).load(function() {
  "use strict";
  $(".headertext").slabText({});
});

$(window).load(function() {
 "use strict";
  $(".headertext-slider").owlCarousel({
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay : 5500,
      transitionStyle : "goDown"
  });
});
    
 /*-----------------------------------
 Full Screen Home Section Slider
 -----------------------------------*/

$(window).load(function(){
  "use strict";
  $('#slides').superslides({
    animation: 'fade',
    play: 7000,
    animation_speed: 3000
  });
});

/*-----------------------------------
Full Screen Headers
 -----------------------------------*/

$(function(){
"use strict";
  $('.alt-header').css({'height':($(window).height())+'px'});
  $(window).resize(function(){
    $('.alt-header').css({'height':($(window).height())+'px'});
  });
});

/*-----------------------------------
Navigation Scroll Page
-----------------------------------*/

$(function() {
  "use strict";
  $('.scroll').bind('click', function(event) {
    var $anchor = $(this);
    var headerH = $('#navigation').outerHeight();
    $('html, body').stop().animate({
      scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
    }, 1200, 'easeInOutExpo');

    event.preventDefault();
  });
});

/*-----------------------------------
Show Active Navigation
-----------------------------------*/

var sections = $('.section'),
    links = $('.scroll.link');

$('a[href="#home"]').addClass('selected');

$(window).scroll(function() {
  "use strict";
  var currentPosition = $(this).scrollTop();
  links.removeClass('selected');
  
  sections.each(function() {
      var top = $(this).offset().top - 75,
          bottom = top + $(this).height();
      
      if (currentPosition >= top && currentPosition <= bottom) {
          $('a[href="#' + this.id + '"]').addClass('selected');  
      }
  }); 
});

/*-----------------------------------
Shrink Navigation Bar on Scroll Down
-----------------------------------*/

$(document).ready(function () {
  "use strict";
  var menu = $('#navigation');

  $(window).scroll(function () {
    "use strict";
    var y = $(this).scrollTop();
    var z = $('#about').offset().top - 250;

    if (y >= z) { menu.removeClass('big-nav').addClass('small-nav');}
    else { menu.removeClass('small-nav').addClass('big-nav'); }
  });
});

/*-----------------------------------
Menu for mobile devices
-----------------------------------*/

$('.mobile-nav-button').click(function() {
  "use strict";
  $(".nav-menu").slideToggle("8000");
 });
$('.nav a').click(function () {
  "use strict";
  if ($(window).width() < 960) {
      $(".nav-menu").slideToggle("2000")}
});

/*-----------------------------------
Slider for Testimonials
-----------------------------------*/
  
$(document).ready(function() {
 "use strict";
  $(".testimonial-slider").owlCarousel({
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  });
});

/*-----------------------------------
Sliders for Mockups
-----------------------------------*/
$(document).ready(function() {
 "use strict";
  $(".tablet-screens").owlCarousel({
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      transitionStyle : "fade",
      singleItem:true
  });

  $(".monitor-screens").owlCarousel({
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      transitionStyle : "fade",
      singleItem:true
  });
});

/*-----------------------------------
Parallax Sections (disabled on mobile)
-----------------------------------*/

$(document).ready(function(){
  "use strict";
  if(!isMobile.any()) {
    $('.parallax1').parallax("50%", 0.5);
    $('.parallax2').parallax("50%", 0.5);
    $('.parallax3').parallax("50%", 0.5);
    $('.parallax4').parallax("50%", 0.5);
    $('.parallax5').parallax("50%", 0.5);
    $('.parallax6').parallax("50%", 0.5);
  }
});


/*-----------------------------------
Fit Videos
-----------------------------------*/

$(window).load(function(){
  "use strict";
  $(".fit-vids").fitVids();
 });


/*-----------------------------------
Isotope Portfolio
-----------------------------------*/

$(window).load(function() {
  "use strict";
        
  var $container = $('.portfolio-items');

  $container.isotope({
    resizable: true, 
    itemSelector : '.item'
  });
        
  var $optionSets = $('#options .option-set'),
      $optionLinks = $optionSets.find('a');

  $optionLinks.click(function(){
    var $this = $(this);
    if ( $this.hasClass('selected') ) {
      return false;
    }
    var $optionSet = $this.parents('.option-set');
    $optionSet.find('.selected').removeClass('selected');
    $this.addClass('selected');

    var options = {},
        key = $optionSet.attr('data-option-key'),
        value = $this.attr('data-option-value');
    value = value === 'false' ? false : value;
    options[ key ] = value;
    if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
      changeLayoutMode( $this, options )
    } else {
      $container.isotope( options );
    }
    return false;
  });

  // Project Expander
  var loader = $('.item-expander');
  
  $('.expander').on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    var url = $(this).attr('href');

    loader.slideUp(function(){
      $.get(url, function(data){
        var portfolioContainer = $('#portfolio-container');
        var topPosition = portfolioContainer.offset().top-75;
        var bottomPosition = topPosition + portfolioContainer.height();
        $('html,body').delay(600).animate({ scrollTop: topPosition }, 800);
        var container = $('#item-expander>div', loader);
        
        container.html(data);
         $(".fit-vids").fitVids();

         $(".project-slides").owlCarousel({
            navigation : false,
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true
          });
        
      //   container.fitVids();
        loader.slideDown(function(){
          if(typeof keepVideoRatio == 'function'){
            keepVideoRatio('.project-video > iframe');
          }
        }).delay(1000).animate({opacity:1}, 200);
      });
    });
  });
    
    $('.close', loader).on('click', function(){
      loader.delay(300).slideUp(function(){
        var container = $('#item-expander>div', loader);
        container.html('');
        $(this).css({opacity:0});
        
      });
      var portfolioContainer = $('#portfolio-container');
        var topPosition = portfolioContainer.offset().top;
        $('html,body').delay(0).animate({ scrollTop: bottomPosition - 50}, 500);
    });

});

/*-----------------------------------
PrettyPhoto
-----------------------------------*/

$(document).ready(function(){
  "use strict";
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        deeplinking: false,
        social_tools: false
    });
  });

/*-----------------------------------
Animated Elements
-----------------------------------*/

$(document).ready(function($) {
  "use strict";
  $('.animated').appear(function() {
      var elem = $(this);
      var animate = elem.data('animate');
      if ( !elem.hasClass('visible') ) {
        var animateDelay = elem.data('animate-delay');
          if ( animateDelay ) {
              setTimeout(function(){
                  elem.addClass( animate + " visible" );
              }, animateDelay);
          } else {
              elem.addClass( animate + " visible" );
          }
      }
  });
});

/*-----------------------------------
Counter
-----------------------------------*/

$(function() {
  "use strict";
  $(".count").appear(function(){
  $('.count').each(function(){
      var count = $(this).attr('data-to');
  $(this).find('.count-number').delay(6000).countTo({
        from: 50,
        to: count,
        speed: 3000,
        refreshInterval: 50,  
      });  
    });
  });
});

/*-----------------------------------
Tooltips
-----------------------------------*/

$(document).ready(function() {
  "use strict";
  $(".tipped").tipper({
    direction: "top",
  });
}); 

/*-----------------------------------
Accordion
-----------------------------------*/

$(document).ready(function() {
  "use strict";
 
  //Accordion button
  $('div.accordion-button').click(function() {
    $('div.accordion-content').slideUp('normal');
    if ( $('div.accordion-button i').hasClass('fa-arrow-circle-o-down') ) {
      $('div.accordion-button i').removeClass('fa-arrow-circle-o-down').addClass('fa-arrow-circle-o-right');
    }
    $(this).find('i').toggleClass('fa-arrow-circle-o-right').toggleClass('fa-arrow-circle-o-down');
    $(this).next().slideDown('normal');

  });
 
  //initial state 
  $("div.accordion-content").hide();
  $('div.accordion-content.active').slideDown('normal');
 
});

/*-----------------------------------
Team Slider
-----------------------------------*/

$(document).ready(function() {
 "use strict";
  var owl_team = $("#team-slider");
  owl_team.owlCarousel({
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 2],
        [700, 2],
        [1000, 4],
        [1200, 4],
        [1400, 4],
        [1600, 4]
      ],
      navigation : true,
      pagination : false,
      autoPlay : 5000
  });
});


/*-----------------------------------
Skill Bar
-----------------------------------*/

$(document).ready(function(){
  "use strict";
  $('.skillbar').appear(function() {
    $(this).find('.skillbar-bar').animate({
      width:$(this).attr('data-percent')
    },3000);
  });
});


/*-----------------------------------
Skill Gauges
-----------------------------------*/

$(window).load(function() {
  $('.num').knob();

  $('.num').appear(function() {
  if($('.num1').val() == 0){  
      $({value: 0}).animate({value: $('.num1').attr("data-num")}, {
          duration: 2000,
          easing:'swing',
          step: function() {
              $('.num1').val(Math.ceil(this.value)).trigger('change');
          }
      })
     }
  if($('.num2').val() == 0){  
      $({value: 0}).animate({value: $('.num2').attr("data-num")}, {
          duration: 2000,
          easing:'swing',
          step: function() {
              $('.num2').val(Math.ceil(this.value)).trigger('change');
          }
      })
     }
  if($('.num3').val() == 0){  
      $({value: 0}).animate({value: $('.num3').attr("data-num")}, {
          duration: 2000,
          easing:'swing',
          step: function() {
              $('.num3').val(Math.ceil(this.value)).trigger('change');
          }
      })
     }
  if($('.num4').val() == 0){  
      $({value: 0}).animate({value: $('.num4').attr("data-num")}, {
          duration: 2000,
          easing:'swing',
          step: function() {
              $('.num4').val(Math.ceil(this.value)).trigger('change');
          }
      })
     }
  });
});

/*-----------------------------------
Full Width Video
-----------------------------------*/

$(function(){
  "use strict";
  $(".player").mb_YTPlayer();
});

/*-----------------------------------
Timeline
-----------------------------------*/

$(".timeline-item").hover(function () {
    $(".timeline-item").removeClass("active");
    $(this).toggleClass("active");
    $(this).prev(".timeline-item").toggleClass("close");
    $(this).next(".timeline-item").toggleClass("close");
});

/*-----------------------------------
Slider for Client Logos
-----------------------------------*/

$(document).ready(function() {
 "use strict";
  var owl_client = $("#client-slider");
  owl_client.owlCarousel({
      itemsCustom : [
        [0, 1],
        [450, 4],
        [600, 4],
        [700, 4],
        [1000, 8],
        [1200, 8],
        [1400, 8],
        [1600, 8]
      ],
      navigation : false,
      pagination : false,
      autoPlay : 4000
  });
});

/*-----------------------------------
Slider for Featured Projects
-----------------------------------*/

$(document).ready(function() {
 "use strict";
  var owl_work = $("#work-slider");
  owl_work.owlCarousel({
      itemsCustom : [
        [0, 1],
        [450, 4],
        [600, 4],
        [700, 4],
        [1000, 4],
        [1200, 4],
        [1400, 4],
        [1600, 4]
      ],
      navigation : true,
      pagination : false,
      autoPlay : 8000
  });
});


/*-----------------------------------
Close Button for Alert Boxes
-----------------------------------*/

$('.close-alert').click(
  function(){
    "use strict";
    $(this).closest('.alert').fadeOut(1000);
  });

/*-----------------------------------
Contact Form
-----------------------------------*/

$(document).ready(function ($) { 
  "use strict";

  $('#submit').click(function(){ 

    $('.error').hide(); 

    var name = $('input#name').val();
    var email = $('input#email').val();
    var phone = $('input#phone').val();
    var email_compare = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; // compare to email input
    var phone_compare = /^[0-9-+]+$/; // compare to phone input

    if (name == "" || name == " ") {
      $('#error-name').fadeIn('slow');
      return false;

    } else if (email == "" || email == " ") {
      $('#error-email').fadeIn('slow');
      return false;

    } else if (!email_compare.test(email)) {
      $('#error-valid-email').fadeIn('slow');
      return false;

    } else if (!phone_compare.test(phone)) {
      $('#error-valid-phone').fadeIn('slow');
      return false;
    }

    var data_string = $('#contact-us').serialize(); 

    $.ajax({
      type: "POST",
      url: $('#contact-us').attr('action'),
      data: data_string,
      timeout: 6000,
      error: function(request,error) {
        if (error == "timeout") {
          $('#error-timedout').slideDown('slow');
        }
        else {
          $('#error-state').slideDown('slow');
        }
      },
      success: function() {
        $('#email-success').slideDown('slow');
        $("#contact-us").trigger('reset');
      }
    });

    return false;
  });
});


 /*-----------------------------------
Google Map
-----------------------------------*/

$(document).ready(function() {
  "use strict";

  // Map Coordinates
  var latlng = new google.maps.LatLng(30.307992, -97.752033);

  // Map Options
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    scrollwheel: false,
  };

  var map = new google.maps.Map(document.getElementById('google-map'), myOptions);

  // Marker Image
  var image = 'images/marker.png';
  
  //  Start Marker    
  var myLatlng = new google.maps.LatLng(30.307863, -97.752329);

  // Marker Text 
   var contentString = '<div id="map-tooltip"><h5>Our Office Location</h5><p>Come see us!</p></div>';
  
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!',
      icon: image
    });

  var infowindow = new google.maps.InfoWindow({
    content: contentString
    });
    
   google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
    });

   // End Marker

})