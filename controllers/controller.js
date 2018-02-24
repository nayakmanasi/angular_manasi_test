
var app = angular.module("displayName", []);
app.controller("nameController", function($scope){
    $scope.firstname = "John";
    $scope.lastname = "Kennedy";
    $scope.fullName = function (){
      return $scope.firstname + " " + $scope.lastname;  
    };
});