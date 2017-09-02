angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = {
            "code": undefined, 
            "name": undefined, 
            "coordinates": {
                "latitude": undefined, 
                "longitude": undefined
            }, 
            "address": undefined
        };

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
      $scope.clear = function() {
          $scope.detailedInfo = {
            "code": undefined, 
            "name": undefined, 
            "coordinates": {
                "latitude": undefined, 
                "longitude": undefined
            }, 
            "address": undefined
        };
      };
      
    $scope.addListing = function() {
        $scope.listings.push($scope.detailedInfo);
        $scope.clear();
        
        $('#modal-add').modal('toggle');
        
        $('.tableWrapper').scrollTop($('tfoot tr:last').position().top);
    };
    $scope.deleteListing = function(index) {
        $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
        console.log(index + " " + $scope.listings[index]);
        $scope.detailedInfo = $scope.listings[index];
         console.log($scope.detailedInfo);
    };
  }
]);