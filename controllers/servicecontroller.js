var app = angular.module("serviceApp", []);
app.controller("serviceController", function($scope, $location, $http, $timeout, $interval){
	
	$scope.myLocation = $location.absUrl();
  $http.get("https://reqres.in/api/users?page=1").then(function (response){
    $scope.httpRequestData = response.data;
  });
  $scope.messages = ["Hello world!!","How are you today!!", "Welcome to world!!", "Is there anything new today?", "Have fun!!", "Go to sleep"]
  $scope.myHeader = $scope.messages[Math.floor(Math.random() * 6)];
  $timeout(function (){
    $scope.myHeader = $scope.messages[Math.floor(Math.random() * 6)];
  }, 2000);

  $interval(function (){
    $scope.myHeader = $scope.messages[Math.floor(Math.random() * 6)];
  }, 2000);

  $scope.myClock = new Date().toLocaleTimeString();
  $interval(function (){
    $scope.myClock = new Date().toLocaleTimeString();
  },1000);
    
});