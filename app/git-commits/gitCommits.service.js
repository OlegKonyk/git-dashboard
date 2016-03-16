(function () {
    'use strict';
    
    angular.module('app.gitCommits')

        .service('gitCommits', gitCommitsService);
       
        gitCommitsService.$inject = ['$resource'];
        function gitCommitsService($resource){
            var gitCommitsResource = $resource('https://api.github.com/repos/:owner/:repo/commits', {owner: '@owner', repo:'@repo'}, {get: { method: 'GET', isArray: true }});
            //var gitDashboardResource = $resource('https://api.github.com/orgs/netflix/repos', {}, {post: { method: 'POST', isArray: true }});


            var service = {
                commits: {}

            };   
            
            
            

            service.resource = gitCommitsResource;
            //service.gitDashboardResource = gitDashboardResource;
            
            
            
            return service;
        }
      

        
})();