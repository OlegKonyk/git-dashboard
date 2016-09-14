(function () {
    'use strict';

    angular.module('app.gitDashboard')
    
        .component('gitDashboard', 
            {
                bindings: {},
                templateUrl: 'app/git-dashboard/gitDashboard.html',
                controller: gitDashboardCtrl
            }
        );
        
        gitDashboardCtrl.$inject = ['tcSocket', '$scope', 'gitDashboard', '$filter'];

        function gitDashboardCtrl(tcSocket, $scope, gitDashboard, $filter) {

            var ctrl = this;
            var orderBy = $filter('orderBy')

            ctrl.show = true;
            ctrl.order = order;
            ctrl.changeOrder = changeOrder; 
            ctrl.orderOptions = [
                { id: 1, name: 'Forks', val: 'forks'},
                { id: 2, name: 'Stars', val: 'stargazers_count'},
                { id: 3, name: 'Watchers', val: 'watchers_count'},
                { id: 4, name: 'Open Issues', val: 'open_issues_count'},
                { id: 5, name: 'Size', val: 'size'},
                { id: 7, name: 'Creation Date', val: 'created_at'},
                { id: 8, name: 'Last Push', val: 'pushed_at'}
            ];

            loadAllRepos();


            function order(order, ascending) {
                ctrl.selectedOrder = order;
                ctrl.reverse = ascending
                ctrl.allRepos = orderBy(ctrl.allRepos, order.val, ctrl.reverse);
            };

            function changeOrder() {
                ctrl.order(ctrl.selectedOrder, true)
            };

            function loadAllRepos(){
                if(!gitDashboard.allRepos){
                    gitDashboard.getCompliteList()
                        .then(function(data){

                            gitDashboard.allRepos = [].concat.apply([], data);

                            populateView();

                        }, function(err){
                                ctrl.error = err.data;
                                console.log(err)
                        })
                }else{
                    populateView();
                }
            }
            

            function populateView(){
                ctrl.allRepos = gitDashboard.allRepos;
                ctrl.orgInfo = gitDashboard.orgInfo;
                ctrl.show = false;
                ctrl.error = false;
                ctrl.order(ctrl.orderOptions[0], true);
            }
            
            
        }
        
        

})();