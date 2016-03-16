(function () {
	'use strict';

    angular.module('app.layout')

        .component('gitToolbarHeader', 
            {
                bindings: {
                    currentSection: '<',
                    currentPage: '<'
                },
                templateUrl: 'app/layout/toolbarHeader.html',
                controller: toolbarHeaderCtrl
            }
        )
               
        toolbarHeaderCtrl.$inject = ['$mdSidenav', 'gitNavigation'];
                
        function toolbarHeaderCtrl($mdSidenav, gitNavigation) {
            
            var ctrl = this;
            
            ctrl.toggleSideNav = toggleSideNav;
            ctrl.getCurrentLocation = getCurrentLocation;
            
            function toggleSideNav() {
                $mdSidenav('left').toggle();
            };

            function getCurrentLocation(){
                if(ctrl.currentSection == ctrl.currentPage){
                    return [ctrl.currentPage];
                }else{
                    return [ctrl.currentSection, ctrl.currentPage];
                }
            };
            
        }
           
})();