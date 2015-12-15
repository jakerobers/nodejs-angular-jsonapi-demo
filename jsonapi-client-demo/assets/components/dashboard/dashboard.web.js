angular.module('app.dashboard').controller('DashboardCtrl', function($scope, $http) {
  $scope.json = null;
  $http({
    method: "GET",
    url: 'http://localhost:3000/api/hospitals'
  }).then(function(response) {
    $scope.json = response.data;


    
    $scope.expanded = new JSONApiExpander($scope.json)
    .attributes(['name', 'address', 'phone'])
    .relation('equipment').attributes(['name', 'serial']).done()
    .toArray();
  });
});
