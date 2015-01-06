angular.module('myApp')
.service('addressesService', ["$http", function($http) {

  var that = this;
  var resultsUrl = '/results';

  this.getResults = function(addresses) {
    params = { addresses: JSON.stringify(addresses) };
    return $http.get(resultsUrl + '.json', { params: params }).success(function(data) {
      that.error    = null;
      that.results  = data;
    }).error(function() {
      that.error    = 'Something went wrong. Please check the address(es) and your internet connection.';
      that.results  = null;
    });
  };
  
}]);