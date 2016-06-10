app.factory('homeService', ['$resource',  function($resource){

  var homeServicefactory= {};
  
  var _getdata = function(){

      return $resource('http://cmnhinflight.azurewebsites.net/getDashboardDayCounts',
          {
           requestDate:'2016-06-07' 
          },
          {
              query:{
                  isArray: false
               }
          }
          
      );   
  } 
  homeServicefactory.getdata = _getdata;
  return homeServicefactory;
  }]);

