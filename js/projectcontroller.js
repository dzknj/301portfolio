(function(module) {
  var projectController = {};


  projectController.index = function() {

    $('#myinfo, #portfolioList').hide();
    $('#portfolioList').show();
  };
  ProjectItem.createTable();

  module.projectController = projectController;
})(window);
