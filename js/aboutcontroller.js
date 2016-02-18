(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#myinfo, #portfolioList').hide();
    $('#myinfo').show();

    repos.requestRepos(repoView.index, booyah);
  };
  booyah = function(){
    console.log('Second Callback Tester for requestRepos');
  };
  module.aboutController = aboutController;
})(window);
