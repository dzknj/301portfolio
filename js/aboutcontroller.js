(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#myinfo, #portfolioList').hide();
    $('#myinfo').show();
  };

  module.aboutController = aboutController;
})(window);
