(function () {
    'use strict';
    
    angular.module('app.radarDashboard')

        .service('gitDashboard', gitDashboardService);
       
        gitDashboardService.$inject = ['$resource'];
        function gitDashboardService($resource, tcMilestoneSelect){
            var gitDashboardResource = $resource('https://api.github.com/orgs/netflix/repos', {}, {get: { method: 'GET', isArray: true }});
            //var gitDashboardResource = $resource('https://api.github.com/orgs/netflix/repos', {}, {post: { method: 'POST', isArray: true }});

           /* var getNewData = function(){
                console.log('something');
                gitDashboardResource.get({}).$promise
                    .then(function(data){
                        console.log(data);

                    });
            };*/

            //getNewData()

            var service = {

                /*getNewData: getNewData,
                graphsData: {
                    byPerson: null
                }*/

            };   
            
            
            

            service.resource = gitDashboardResource;
            //service.gitDashboardResource = gitDashboardResource;
            
            
            
            return service;
        }
      

        
})();