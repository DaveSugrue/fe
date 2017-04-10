(function () {

	var module = angular.module("startPage");

	var SignonController = function ($scope, userService, github) {
		$scope.message = "Hey there";

		$scope.user = {
			id: "",
			firstName: "",
			lastName: "",
			dob: "",
			email: "",
			pw: ""
		};
		/*
				$http.post("http://desktop:8080/login/", User)
					//$http.get("https://api.github.com/users/davesugrue")
					.then(function (response) {
						$scope.data = response.data;
					});
		*/
		/*
		$scope.signin = function () {
			$http.post("http://192.168.0.9:8090/login/", $scope.user)
				//$http.get("https://api.github.com/users/davesugrue")
				.then(function (response) {
					$scope.data = response.data;

					if (response.data.status.code === 0) {
						$scope.user = $scope.data.object[0];
						signon($scope.user);
					}
				});

		};
*/
		/*
		var onLoginComplete = function (data) {
			$scope.user = data.object[0];
			signon($scope.user);
		};

		var onError = function (reason) {
			$scope.error = "Could not fetch user";
		};

		userService.login($scope.user)
			.then(onLoginComplete, onError);



*/
		var onUserComplete = function (data) {
			$scope.user = data;
			github.getRepos($scope.user)
				.then(onRepos, onError);
		};

		var onRepos = function (data) {
			$scope.repos = data;
		};

		var onError = function (reason) {
			$scope.error = "Could not fetch user";
		};

		github.getUser($scope.username)
			.then(onUserComplete, onError);

	};

	app.controller("SignonController", ["$scope", "$http", SignonController]);

}());