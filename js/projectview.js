
(function(module){

  var projectView = {};

  projectView.initPage = function() {
    projects.forEach(function(a) {
      $('section').append(a.toHtml());
    });
    projectView.readOn();
  };

  // projectView.handleNavBar = function() {
  //   $('.navbar .tab').on('click', function() {
  //     console.log('BOOYAH');
  //     $('#myinfo, #portfolioList').hide();
  //     var $datacontent = $(this).data('content');
  //     $('#' + $datacontent).fadeIn(200);
  //   });
  //   $('.navbar .tab:first').click();
  // };

  projectView.readOn = function() {
    $('div.description *:nth-of-type(n+3)').hide();

    $('article').on('click', '.readon', function(event) {
      event.preventDefault();
      console.log('It works!!');//testing to see if function works
      console.log(this); //logs .readon because this is readon
      console.log($(this));
      console.log($(this).prev());//logs footer.description because it is the previous object of readon
      console.log($(this).prev().children());//logs all elements that are children of footer.description
      $(this).prev().children().show();//shows all elements that are children of footer.description which is a previous object of readon which is 'this'
      $(this).hide();//hides readon link so user does not think page is malfunctioning
    });
  };

  $(document).ready(function() {
    projectView.readOn();
  });
  module.projectView = projectView;
})(window);
