var projectView = {};

projectView.handleNavBar = function() {
  $('.navbar .tab').on('click', function(event) {
    $('#myinfo, #portfolioList').hide();
var $datacontent = $(this).data('content');
$('#' + $datacontent).fadeIn(200);
  });
  $('.navbar .tab:first').click();
};

//   $('.navbar .tab:last').on('click',  function() {
//     var $projectHide = $('.template');
//     var $aboutHide = $('#myinfo');
//
//     $projectHide.hide();
//     $aboutHide.show();
//   });
//   $('.navbar .tab:first').on('click', function() {
//     var $aboutHide = $('#myinfo');
//     var $projectHide = $('.template');
//
//     $aboutHide.hide();
//     $projectHide.show();
//   });
// };

projectView.readOn = function() {
  $('footer.description *:nth-of-type(n+3)').hide();

  $('article').on('click', '.readon', function(event) {
    event.preventDefault();
    console.log('It works!!');//testing to see if function works
    console.log(this); //logs .readon because this is readon
    console.log($(this));
    console.log($(this).prev());//logs footer.description because it is the previous object of readon
    console.log($(this).prev().children());//logs all elements that are children of footer.description
    $(this).prev().children().show();//shows all elements that are children of footer.description which is a previous object of readon which is 'this'
    $(this).hide();//hides readon link so user does not think page is malfunctioning
  })
};

$(document).ready(function() {
projectView.handleNavBar();
projectView.readOn();
});
