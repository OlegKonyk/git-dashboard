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
            

            gitDashboard.resource.get({}).$promise
                    .then(function(data){
                        console.log(data);
                        ctrl.allRepos = data;
                        ctrl.show = false;
                        ctrl.order(ctrl.orderOptions[0], true);
                        // /service.graphsData.byPerson = data;
                        //return data;
                    });
            
            
            
        }
        
        

})();