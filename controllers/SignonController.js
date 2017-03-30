(function () {

	var SignonController = function ($scope, $http) {
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
		$scope.signin = function () {
			/*$http.post("http://desktop:8080/login?email=dave.sugrue@gmail.com&pw=888888")
				//$http.get("https://api.github.com/users/davesugrue")
				.then(function (response) {
					$scope.data = response.data;
				});*/
			$http.post("http://192.168.0.9:8090/login/", $scope.user)
				//$http.get("https://api.github.com/users/davesugrue")
				.then(function (response) {
					$scope.data = response.data;

					if (response.data.status.code === 0) {
						$scope.user = $scope.data.object[0];
						login($scope.user);
					}
				});

		};
	};

	app.controller("SignonController", ["$scope", "$http", SignonController]);

}());