/*
 * Bootstrap - mobile slide Navigation
 * Autor: Marcel Grolms
 */ 
$(document).ready(function() {  
  
  $('nav a').click(function(e) {
    if($(this).parent().hasClass('slide')) {
      /* allow n-level sub menu for mobile version */
      $(this).parent().toggleClass('open');
      e.preventDefault();
      return false;      
    } else if($(this).parent().hasClass('back') || $(this).parent().hasClass('overview')) {
      // no need to do anything, just don't trigger the click on this ones      
    } else if($(this).parent().hasClass('headline')) {
      // prevent all actions here, it's just a label
      e.preventDefault();
      return false;
    } else {
      $('.navbar-toggle').trigger('click');
    }
  });
  
  /* mobile navigation - slide back all open menu on close */
  $('.navbar-toggle').click(function() {
    if(!$(this).hasClass('collapsed')) {      
      $(this).parent().parent().find('.open ul').css({ left: '100%' }); // slide back all open submenus
      $(this).parent().parent().find('.open').removeClass('open');
    } else {
      /* show active submenu if nav is shown */
      window.setTimeout(function() {
        $('li.dropdown.slide.exp > a.dropdown-toggle').trigger('click');
      }, 100);    
    }        
  });    
  
  /* slide menu fx - navigation menu */  
  $( ".dropdown-toggle" ).click(function(e) {    
    $(this).next(".dropdown-menu").animate({ left: '0%' }, 500); 
  });
  
  /* slide menu fx - back button */
  $('.dropdown-back').click(function(e) {
    var back = $(this);
    $(this).parent().parent().animate({ left: '100%' }, 500);
    window.setTimeout(function() {
      back.parent().parent().parent().removeClass('open');
    },500);    
    return false;
  });
  
  /* slide menu fx - overview button */
  $('.dropdown-overview').click(function() {
    $('.navbar-nav .open ul').animate({ left: '100%' }, 500);
    window.setTimeout(function() {
      $('.navbar-nav .open').removeClass('open');
    },500);
    return false;
  }); 
    
});