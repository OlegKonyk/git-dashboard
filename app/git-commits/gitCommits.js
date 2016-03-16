(function () {
    'use strict';

    angular.module('app.gitCommits')
    
        .component('gitCommits', 
            {
                bindings: {},
                templateUrl: 'app/git-commits/gitCommits.html',
                controller: gitCommitsCtrl
            }
        );
        
        gitCommitsCtrl.$inject = ['$routeParams', 'gitCommits'];

        function gitCommitsCtrl($routeParams, gitCommits) {
            var ctrl = this;

            ctrl.repo = $routeParams.repo
           console.log($routeParams)
            
            
        }
        
        

})();