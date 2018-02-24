var app = angular.module("filterApp", []);
app.controller("filterController", function($scope){
	$scope.names = [
		{name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
	];
	$scope.calcOrder = function(){
		$scope.myOrderBy = $scope.sortoption;
	};
	$scope.listOfOptions = ['name', 'country'];
});