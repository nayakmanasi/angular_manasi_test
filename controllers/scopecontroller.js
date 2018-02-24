var app = angular.module('rootApp',[]);
app.run(function($rootScope){
	$rootScope.name = "RootName";
	$rootScope.getName = function(){
		return $rootScope.name;
	};
});

app.controller("childScope", function($scope){
	$scope.name = "ControllerScope";
	$scope.getName = function(){
		return $scope.name
	};
});