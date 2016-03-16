(function () {
    'use strict';
    
    angular.module('app.gitCommits')

        .service('gitCommits', gitCommitsService);
       
        gitCommitsService.$inject = ['$resource'];
        function gitCommitsService($resource){
            //var gitDashboardResource = $resource('https://api.github.com/orgs/netflix/repos', {}, {get: { method: 'GET', isArray: true }});
            //var gitDashboardResource = $resource('https://api.github.com/orgs/netflix/repos', {}, {post: { method: 'POST', isArray: true }});


            var service = {


            };   
            
            
            

            //service.resource = gitDashboardResource;
            //service.gitDashboardResource = gitDashboardResource;
            
            
            
            return service;
        }
      

        
})();