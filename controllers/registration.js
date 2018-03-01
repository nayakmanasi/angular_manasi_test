var app = angular.module('registrationApp',[]);
app.controller('registrationController', function($scope, $http){
	$scope.user = {};
	$scope.resetForm = function (){
		$scope.user = {};
		$scope.registrationForm.$setPristine();
		$scope.registrationForm.$setUntouched();
		// let controlNames = Object.keys($scope.registrationForm).filter(key => key.indexOf('$') !== 0);
		// for (let name of controlNames) {
 //      let control = $scope.registrationForm[name];
 //      control.$setViewValue(undefined);
 //  	}	
	};
	$scope.insertRecord = function(){
		//check for the existing email ID
		// If email already exists then throw the error and dont insert
		// else insert the record and disply the table
		$http.post({
			method : 'POST',
			url : '../phpqueries/finduser.php',
			data : $scope.user,
			headers : {'Content-Type': 'application/x-www-form-urlencoded'}
		}).then(function(){
			$scope.userexists = true;
		}, function(){
			$scope.userexists = false;
		});
		
		if(!$scope.userexists){
			$http({
				method : 'POST',
				url : '../phpqueries/insertuser.php',
				data : $scope.user,
				headers : {'Content-Type': 'application/x-www-form-urlencoded'}
			}).success(function(data){
				$scope.users = data;
			});
		}
		console.log($scope.user);
	};
});
app.controller('userController', function($scope, $http){
	$http.get("../phpqueries/selectusers.php").then(function (response){
		$scope.persons = response.data;
	});
});