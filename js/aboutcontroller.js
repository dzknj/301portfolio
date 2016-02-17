(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#myinfo, #portfolioList').hide();
    $('#myinfo').show();

    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
