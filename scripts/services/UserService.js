(function () {

	var userService = function ($http) {

		var login = function (user) {
			return $http.post("http://192.168.0.9:8090/login/", user)
				.then(function (response) {
					return response.data;
				});
		};
		/*
    var getUser = function(username) {
      return $http.get("https://api.github.com/users/" + username)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepoDetails = function(username, reponame) {
      var repo;
      var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
      console.log("repoUrl = " + repoUrl);
      
      return $http.get(repoUrl)
        .then(function(response) {
          repo = response.data;
          var contributorUrl = repoUrl + "/contributors";
          console.log("contributorUrl = " + contributorUrl);
          return $http.get(contributorUrl);
        })
        .then(function(response){
          repo.contributors = response.data;
          return repo;
        });
    };
*/
		return {
			login: login
		};

	};

	var module = angular.module("startPage");

	module.factory("userService", userService);

}());