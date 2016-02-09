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
  var template = Handlebars.compile($('#article-template').text());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.monthsAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/30/1000);

  this.complete = this.daysAgo + ' days ago / ' + this.monthsAgo + ' months ago';

    return template(this);
//   var $newProjectList = $('article.template').clone();
//
//   $newProjectList.find('.readon').html('Keep Reading &raquo;')
// //finds .readon in my article template and puts text into html
//   $newProjectList.find('.description').html(this.description);
//
//   $newProjectList.find('h2').html(this.title);
//
//   $newProjectList.find('address').html('by' + this.author);
//
//   $newProjectList.find('time').html('published' + this.publishedOn);
//
//   $newProjectList.append('<hr>');
//
//   $newProjectList.removeClass('template');
//   return $newProjectList;
};
ProjectItem.loadAll = function(data) {
data.forEach(function(ele) {
  projects.push(new ProjectItem(ele))
});

projects.forEach(function(a) {
  $('section').append(a.toHtml())
});
};

ProjectItem.fetchAllFromServer = function() {
  console.log('fetching data from server');
  $.ajax({
    type: 'GET',
    url: 'js/data.json',
    success: function(data, message, xhr) {
      console.log(data);
      localStorage.eTag = xhr.getResponseHeader('eTag');
      ProjectItem.data = data;
      localStorage.data = JSON.stringify(data);
    }
  });
  ProjectItem.loadAll(ProjectItem.data);
};
ProjectItem.fetchAllFromServer();
