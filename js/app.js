
(function(module){

  projects = [];

  function ProjectItem(obj) {
    this.title = obj.title;
    this.author = obj.author;
    this.projectUrl = obj.projectUrl;
    this.description = obj.description;
    this.publishedOn = obj.publishedOn;
    this.boot = obj.boot;
    this.readon = obj.readon;
  };

  ProjectItem.createTable = function(callback) {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS projects (' +
        'id INTEGER PRIMARY KEY, ' +
        'title VARCHAR(255) NOT NULL, ' +
        'author VARCHAR(255) NOT NULL, ' +
        'projectUrl VARCHAR (255), ' +
        'publishedOn DATETIME, ' +
        'description TEXT NOT NULL);',
      callback
    );
  };
  ProjectItem.truncateTable = function(callback) {
    webDB.execute(
      'DELETE FROM projects;',
      callback
    );
  };

  ProjectItem.prototype.insertRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO projects (title, author, projectUrl, publishedOn, description) VALUES (?, ?, ?, ?, ?);',
          'data': [this.title, this.author, this.projectUrl, this.publishedOn, this.description],
        }
      ],
      callback
    );
  };

  ProjectItem.prototype.deleteRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'DELETE FROM projects WHERE id = ?;',
          'data': [this.id]
        }
      ],
      callback
    );
  };

  ProjectItem.prototype.updateRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'UPDATE projects SET title = ?, author = ?, authorUrl = ?, category = ?, publishedOn = ?, body = ? WHERE id = ?;',
          'data': [this.title, this.author, this.authorUrl, this.category, this.publishedOn, this.body, this.id]
        }
      ],
      callback
    );
  };
  ProjectItem.fetchAll = function(callback) {
    webDB.execute('SELECT * FROM projects ORDER BY publishedOn DESC', function(rows) {
      if (rows.length) {
        Article.loadAll(rows);
        callback();
      } else {
        $.getJSON('/js/data.json', function(rawData) {
          // Cache the json, so we don't need to request it next time:
          rawData.forEach(function(item) {
            var article = new ProjectItem(item); // Instantiate an article based on item from JSON
            article.insertRecord(); // Cache the article in DB
          });
          webDB.execute('SELECT * FROM projects', function(rows) {
            ProjectItem.loadAll(rows);
            // callback();
          });
        });
      }
    });
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
      return new ProjectItem(stuff);
    });
    var boot = data.map(function(a){
      return parseInt(a.boot);
    });
    // var bootTotal = boot.reduce(function(a,b){
    //   return a + b;
    // });
    // $('.footer').append(' There are ' + bootTotal + ' boots total in this biznatch!! ');

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
        console.log('status text of data.json request: ' + xhr.statusText);
        console.log('status code of data.json request: ' + xhr.status);
        callback();
      }
    });
  };
  module.ProjectItem = ProjectItem;
})(window);
