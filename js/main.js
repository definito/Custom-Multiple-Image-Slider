jQuery(document).ready(function($){
    
    // Bootstrap menu fix
    $(".navbar-toggle").click(function(){
        $(".header").css('background', '#000');
    });
    
    
    $(".navbar-nav li a").click(function(){
        $(".navbar-collapse").removeClass('in');
    });
    
    
    // jQuery sticky menu
    $(".header").sticky({topSpacing:0});

    // jQuery smooth scroll
    $('.navbar-nav li a, .scroll-to-bottom a').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = '70';
        $('html, body').stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    }); 
    
    
    
    // jQuery scroll psy
    $('body').scrollspy({ 
        target: '.navbar-collapse',
        offset: 95
    }); 
 

//This is for text rotating
		$(".r-text .rotate").textrotator({
        animation: "fade",
        speed: 1000
      });
	  
//This is for text portfolio filter	
    $('.portfolio-menu li').click(function(){ 
        
      $(".portfolio-menu li").removeClass("active");
      $(this).addClass("active");        

        var selector = $(this).attr('data-filter'); 
        $(".portfolio-items").isotope({ 
            filter: selector, 
            animationOptions: { 
                duration: 750, 
                easing: 'linear', 
                queue: false, 
            } 
        }); 
      return false; 
    });   


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})	
    
    
});


jQuery(window).load(function(){
     
    // Active isotope in container
    
    $(".portfolio-items").isotope({
        itemSelector: '.single-portfolio',
        layoutMode: 'fitRows',
    });    	  
	  
	  
});


//this is for navigation
$(window).scroll(function(){	
	"use strict";	
	var scroll = $(window).scrollTop();
	if( scroll > 60 ){		
		$(".navbar").addClass("scroll-fixed-navbar");				
	} else {
		$(".navbar").removeClass("scroll-fixed-navbar");
	}
});
