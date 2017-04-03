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
			if ($scope.user.pw === $scope.passwordConfirm) {
				$http.put("http://desktop:8090/user/create", $scope.user)
					//$http.get("https://api.github.com/users/davesugrue")
					.then(function (response) {
						$scope.data = response.data;

						if (response.data.status.code === 0) {
							login($scope.user);
						}
					});
			} else {
				alert("bad pass");
			}
		};
	};

	app.controller("UserController", ["$scope", "$http", UserController]);

}());