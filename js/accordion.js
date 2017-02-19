$(document).ready(function(){
  $('.collapse').on('show.bs.collapse', function(){
    $(this).parent('.panel').toggleClass('active');
  });
  $('.collapse').on('hide.bs.collapse', function(){
    $(this).parent('.panel').toggleClass('active');
  });
});