(function(module) {
  var repoView = {};

  // DONE: Private methods declared here live only within the scope of the wrapping IIFE.
  var ui = function() {
    var $repoList = $('#myinfo'); // Best practice: Cache the DOM query if it's used more than once.

    $repoList.find('ul.repolist').empty();
  };

  // DONE: How do you want to render a single repo as html? Return your filled in HTML template.
  var render = function(repo) {
    var date = [];
    date = repo.created_at;
    var newDate = date.slice(0,10);
    var newTime = date.slice(11,16);
    console.log(newDate);
    console.log(newTime);
    return '<ul class="reporepo"><li><a class="repolinks" href="' + repo.clone_url + '">' + repo.name + '</a> - <span class="repodate">Created On: ' + newDate + ' at ' + newTime + ' O\'clock</span><ul><li class="repodescription">'+ repo.description + '</li></ul></br></li></ul>';
  };

  // DONE: If all the data is loaded, we can prep the UI and render the repos.
  repoView.index = function() {
    ui();
    // The jQuery `append` method lets us append an entire array of HTML elements at once,
    // So we can use a little FP to transform our data-set into DOM nodes:
    $('ul.repolist').append(
      repos.all.map(render)
    );
  };

  module.repoView = repoView;
})(window);
