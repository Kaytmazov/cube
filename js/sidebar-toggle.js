$(document).ready(function($) {
  // Клик на элемент по которому и будет совершаться 
  // действие открытие и закрытие sidebar
  $('.sidebar-toggle').click(function(e) {
    // Класс sidebar
    var sidebar = $('.sidebar');
    // Ширина sidebar
    var sidebarWidth = $('.sidebar').width();

    // Проверяем, если в sidebar свойство left не равна ширины его то выполняются 
    // следующие действия
    if (sidebar.css('left') != sidebarWidth) {
      // Добавляем ему класс active
      sidebar.addClass('active');

      var firstClick = true;

      // Скрипт который будет закрывать sidebar при клике на любое место
      $(document).bind('click.myEvent', function(e) {
        if (!firstClick && $(e.target).closest('.sidebar').length == 0) {
          // Удаляем класс active
          sidebar.removeClass('active');
          $(document).unbind('click.myEvent');
        }
        firstClick = false;
      });
    }
    e.preventDefault();
  });
});