(function () {

	var UserController = function ($scope, $http) {
		$scope.message = "Hey there";
		$scope.passwordConfirm = "";

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
							$scope.user = $scope.data.object[0];
							login($scope.user);
						}
					});
			} else {
				alert("bad pass");
			}
		};


		$scope.getUser = function () {
			alert("name = " + $scope.user.firstName + " and id = " + $scope.user.id);
			if ($scope.user.pw === $scope.passwordConfirm) {
				$http.get("http://desktop:8090/user?" + $scope.user.id)
					//$http.get("https://api.github.com/users/davesugrue")
					.then(function (response) {
						$scope.data = response.data;

						if (response.data.status.code === 0) {
							$scope.user = $scope.data.object[0];
						}
					});
			} else {
				alert("bad pass");
			}
		};
	};

	app.controller("UserController", ["$scope", "$http", UserController]);

}());