app.controller('sampleController', [ '$scope','homeService',function ($scope,homeService) {
 $scope.loadPeople = function() {            
      var query = homeService.getdata().query();
          query.$promise.then(function(data){
            $scope.partnerSearchList = data;          
        }),
        function(error){
          console.log("error: " + error + ", status: " + error.status + " headers: " + error.headers + " config: " + error.config);
        }
       
    };         
     }]);      