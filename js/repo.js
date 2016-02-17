(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(next) {

    $.ajax({
      url: 'https://api.github.com/users/dzknj/repos',
      type: 'GET',
      headers: {'Authorization':'token ' + githubToken},
      success: function(data, message, xhr) {
        console.log(data);
        repos.all = data;
      }
    }).done(next);
  };

  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);