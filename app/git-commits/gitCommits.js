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
            ctrl.owner = $routeParams.owner
            var hash = ctrl.owner + '/' + ctrl.repo

           if(!gitCommits.commits.hasOwnProperty(hash)){
               gitCommits.resource.get({owner:ctrl.owner, repo:ctrl.repo}).$promise
                        .then(function(data){
                            ctrl.commits = data;
                            gitCommits.commits[hash] = data
                        });
            }else{
                ctrl.commits = gitCommits.commits[hash];
            }
            
            
        }
        
        

})();