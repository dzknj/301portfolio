(function(module) {
  var projectController = {};

  projectController.index = function() {

    $('#myinfo, #portfolioList').hide();
    $('#portfolioList').show();
  };

  module.projectController = projectController;
})(window);
