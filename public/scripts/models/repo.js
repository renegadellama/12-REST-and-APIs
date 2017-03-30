'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // TODO: How would you like to fetch your repos? Don't forget to call the callback.
    $.ajax({
      url: 'https://api.github.com/user/repos?type=owner',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    })
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  // repos.requestRepos();////FIX THIS

  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  // repos.with = function(attr){
  //   return repos.all.filter(repo => repo[attr]);
  // };



  module.repos = repos;
})(window);
