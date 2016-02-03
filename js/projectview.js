var projectView = {};

projectView.handleNavBar = function() {
  $('.navbar .tab:last').on('click',  function() {
    var $projectHide = $('.template');
    var $aboutHide = $('#myinfo');

    $projectHide.hide();
    $aboutHide.show();
  });
  $('.navbar .tab:first').on('click', function() {
    var $aboutHide = $('#myinfo');
    var $projectHide = $('.template');

    $aboutHide.hide();
    $projectHide.show();
  });
};
$(document).ready(function() {
projectView.handleNavBar();
});
