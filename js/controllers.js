/* Controllers */

angular.module('myApp.controllers', []).
  controller('mainCtrl', ['$scope', '$http',function($scope, $http) {
      $scope.title = "MCA Master Data App";
      $scope.fetchCin = function(){
          var url = "http://ec2-54-169-91-224.ap-southeast-1.compute.amazonaws.com/mca.php?cin="+$scope.cin;
          $http({
    method: 'GET',
    url: url
})
    .success(function(response) {$scope.response = true;
                  $scope.json = JSON.stringify(response, undefined, 4);})
    .error(function(response) {console.log(response);});  
      };
          

  }]);