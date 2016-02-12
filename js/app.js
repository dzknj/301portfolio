
(function(module){

projects = [];

function ProjectItem(obj) {
  this.title = obj.title;
  this.author = obj.author;
  this.projectUrl = obj.projectUrl;
  this.description = obj.description;
  this.publishedOn = obj.publishedOn;
  this.boot = obj.boot;
};

// removed old commented code

ProjectItem.prototype.toHtml = function() {
  var template = Handlebars.compile($('#article-template').text());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.monthsAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/30/1000);

  this.complete = this.daysAgo + ' days ago / ' + this.monthsAgo + ' months ago';

    return template(this);

    // removed old code

};

ProjectItem.loadAll = function(data) {


  projects = data.map(function(stuff) {
    console.log(data);
    console.log(stuff);
    return new ProjectItem(stuff);
  })
  var boot = data.map(function(a){
    return parseInt(a.boot);
  })
  var bootTotal = boot.reduce(function(a,b){
    return a + b;
  });
  console.log(boot);
  console.log(bootTotal);
  $('.footer').append(' There are ' + bootTotal + ' boots total in this biznatch!! ');
  // data.forEach(function(ele) {
  //   projects.push(new ProjectItem(ele));
  // });


};
ProjectItem.fetchAllFromServer = function(callback) {
  console.log('fetching data from server');
  $.ajax({
    type: 'GET',
    url: 'js/data.json',
    success: function(data, message, xhr) {

      localStorage.eTag = xhr.getResponseHeader('eTag');
      ProjectItem.data = data;
      localStorage.data = JSON.stringify(data);
      ProjectItem.loadAll(ProjectItem.data);
      callback();
    }
  });
};
module.ProjectItem = ProjectItem;
})(window);
