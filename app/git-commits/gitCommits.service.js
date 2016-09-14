(function () {
    'use strict';
    
    angular.module('app.gitCommits')

        .service('gitCommits', gitCommitsService);
       
        gitCommitsService.$inject = ['$resource'];
        function gitCommitsService($resource){
            var gitCommitsResource = $resource('https://api.github.com/repos/:owner/:repo/commits?per_page=100', {owner: '@owner', repo:'@repo'}, {get: { method: 'GET', isArray: true }});

            var service = {
                commits: {}

            };   

            service.resource = gitCommitsResource;

            return service;
        }
      

        
})();