(function () {
    'use strict';

    angular.module('app.radarDashboard')
    
        .component('gitDashboard', 
            {
                bindings: {},
                templateUrl: 'app/radar-dashboard/gitDashboard.html',
                controller: radarDashboardCtrl
            }
        );
        
        radarDashboardCtrl.$inject = ['tcSocket', '$scope', 'gitDashboard', '$filter'];

        function radarDashboardCtrl(tcSocket, $scope, gitDashboard, $filter) {

            var ctrl = this;

            var orderBy = $filter('orderBy')
            ctrl.show = true;

            ctrl.orderOptions = [
                { id: 1, name: 'Forks', val: 'forks'},
                { id: 2, name: 'Stars', val: 'stargazers_count'},
                { id: 3, name: 'Watchers', val: 'watchers_count'},
                { id: 4, name: 'Open Issues', val: 'open_issues_count'},
                { id: 5, name: 'Size', val: 'size'},
                { id: 7, name: 'Creation Date', val: 'created_at'},
                { id: 8, name: 'Last Push', val: 'pushed_at'}
              ];

            //ctrl.orderBy = "forks";

             ctrl.order = function(order, ascending) {
                ctrl.selectedOrder = order;
                ctrl.reverse = ascending
                ctrl.allRepos = orderBy(ctrl.allRepos, order.val, ctrl.reverse);
                console.log(ctrl.allRepos)
              };

              ctrl.changeOrder = function() {
                ctrl.order(ctrl.selectedOrder, true)
              };
            /*if(!gitDashboard.allRepos){
                console.log(gitDashboard.allRepos)
                gitDashboard.resource.get({}).$promise
                    .then(function(data){
                        gitDashboard.allRepos = data;
                        console.log(gitDashboard.allRepos);
                        ctrl.allRepos = data;
                        ctrl.show = false;
                        ctrl.order(ctrl.orderOptions[0], true);
                        ctrl.error = null;
                    }, function(err){
                        console.log(err)
                        ctrl.error = err.data;
                    });
            }else{
                ctrl.show = false;
                ctrl.allRepos = gitDashboard.allRepos;
                ctrl.show = false;
                ctrl.order(ctrl.orderOptions[0], true);
            }*/
            //console.log(gitDashboard.compliteList)
            //ctrl.compliteList = gitDashboard.compliteList;

            /*gitDashboard.getCompliteList()
                .then(function(data){
                    console.log(data)
                })*/

            if(!gitDashboard.allRepos){
                console.log(gitDashboard.allRepos)
                gitDashboard.getCompliteList()
                    .then(function(data){
                        gitDashboard.allRepos = [].concat.apply([], data);;
                        ctrl.allRepos = gitDashboard.allRepos
                        ctrl.show = false;
                        ctrl.order(ctrl.orderOptions[0], true);
                        ctrl.error = null;
                        console.log(ctrl.allRepos)
                    }, function(err){
                            console.log(err)
                            ctrl.error = err.data;
                    })
            }else{
                ctrl.show = false;
                ctrl.allRepos = gitDashboard.allRepos;
                ctrl.show = false;
                ctrl.order(ctrl.orderOptions[0], true);
            }
            
            
            
            
        }
        
        

})();