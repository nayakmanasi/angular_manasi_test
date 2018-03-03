var app = angular.module('registrationApp',[]);

app.controller('registrationController', function($scope, $http){

	$scope.resetForm = function (){
		$scope.user = {};
		$scope.registrationForm.$setPristine();
		$scope.registrationForm.$setUntouched();
		// let controlNames = Object.keys($scope.registrationForm).filter(key => key.indexOf('$') !== 0);
		// for (let name of controlNames) {
 		//   let control = $scope.registrationForm[name];
 		//   control.$setViewValue(undefined);
 		// }	
	};

	$http({
		method : 'GET',
		url : '../phpqueries/selectusers.php'
	}).then(function(response){
		$scope.persons = 	response.data;
	});

	$scope.insertRecord = function(){
		// Check for the existing email ID
		// If email already exists then throw the error and dont insert
		// else insert the record and disply the table
		$http({
			method : 'POST',
			url : '../phpqueries/finduser.php',
			data : $scope.user,
			headers : {'Content-Type': 'application/json'}
		}).then(function(response){
			console.log(response.data.length);
			if(response.data.length == 0){
				$scope.userexists = false;
			}
			else{
				$scope.userexists = true;
			}
		}, function(error){
			// Error occurs
		}).then(function(){
			if($scope.userexists){
				//Do nothing
			}
			else{
			$http({
				method : 'POST',
				url : '../phpqueries/insertuser.php',
				data : $scope.user,
				headers : {'Content-Type': 'application/json'}
			}).then(function(response){
					$scope.user = {};
					$scope.registrationForm.$setPristine();
					$scope.registrationForm.$setUntouched();
					$scope.refresh = true;
					//Do a callback
					console.log(response.data);
					$scope.persons = response.data;
				});
			}
		});
	};
});

// app.controller('userController', function($scope, $http){
// 	$http({
// 		method : 'GET',
// 		url : '../phpqueries/selectusers.php'
// 	}).then(function(response){
// 		$scope.persons = response.data;
// 	});

// 	if($scope.refresh){
// 		$http({
// 		method : 'GET',
// 		url : '../phpqueries/selectusers.php'
// 		}).then(function(response){
// 			$scope.persons = response.data;
// 		});
// 	}
// });