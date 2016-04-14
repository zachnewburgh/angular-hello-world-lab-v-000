function MainController($scope) {
  $scope.name = "Zach";
  $scope.email = "zach@ivy.com";
  $scope.phone = 5555555555;
}

angular
  .module('app');
  .controller('MainController', MainController);