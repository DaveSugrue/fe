(function () {

	var UserController = function ($scope, $http) {
		$scope.message = "Hey there";
		$scope.passwordConfirm = "";
		$scope.user = {
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
		$scope.createUser = function () {
			/*$http.post("http://desktop:8080/login?email=dave.sugrue@gmail.com&pw=888888")
				//$http.get("https://api.github.com/users/davesugrue")
				.then(function (response) {
					$scope.data = response.data;
				});*/
			if ($scope.user.pw === $scope.passwordConfirm) {
				$http.put("http://desktop:8090/user/create", $scope.user)
					//$http.get("https://api.github.com/users/davesugrue")
					.then(function (response) {
						$scope.data = response.data;
					});
			} else {
				alert("bad pass");
			}


		};
	};

	app.controller("UserController", ["$scope", "$http", UserController]);

}());