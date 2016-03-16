(function () {
    'use strict';

	angular.module('app.layout')

		.component('layout', 
			{
				templateUrl: 'app/layout/layout.html',
				controller: layoutCtrl
			}
		)

	layoutCtrl.$inject = ['gitNavigation', '$element'];

	function layoutCtrl(gitNavigation, $element) {

		var ctrl = this;
        
        ctrl.data = gitNavigation.data;
        
        ctrl.onHoverIn = gitNavigation.onHoverIn;  
		ctrl.onHoverOut = gitNavigation.onHoverOut; 
        ctrl.getPinedNav = gitNavigation.getPinedNav;
		ctrl.setPinedNav = setPinedNav; 
		ctrl.toggleSection = gitNavigation.toggleSection;
		ctrl.selectSection = gitNavigation.selectSection;
		ctrl.selectPage = gitNavigation.selectPage;
        
        function setPinedNav(){
            return gitNavigation.setPinedNav($element);
        }

	}

})();