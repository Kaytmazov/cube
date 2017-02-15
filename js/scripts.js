jQuery("button.btn-down").on('click', function(e){
  var fixed_offset = 0;
  jQuery('html,body').stop().animate({ scrollTop: jQuery('#masthead').offset().top - fixed_offset }, 1000);
  e.preventDefault();
});