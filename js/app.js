var projects = [];

function ProjectItem(obj) {
  this.title = obj.title;
  this.author = obj.author;
  this.projectUrl = obj.projectUrl;
  this.description = obj.description;
  this.publishedOn = obj.publishedOn;
};

/*
var el = new ProjectItem('busmall','david zalk', 'http://www.google.com', 'Test for placing projects in my webpage', '12/12/2012');
var el2 = new ProjectItem('busmall','james', 'http://www.google.com', 'Test for placing projects in my webpage', '12/12/2012');
*/

ProjectItem.prototype.toHtml = function() {
  var $newProjectList = $('article.template').clone();



  $newProjectList.find('h2').html(this.title);

  $newProjectList.find('address').html('by' + this.author);

  $newProjectList.find('time').html('published' + this.publishedOn);

  $newProjectList.append('<hr>');

  $newProjectList.removeClass('template');
  return $newProjectList;
};

data.forEach(function(ele) {
  projects.push(new ProjectItem(ele));
});

projects.forEach(function(a) {
  $('section').append(a.toHtml());
});
