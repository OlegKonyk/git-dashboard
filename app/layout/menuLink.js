(function () {
	'use strict';

	angular.module('app.layout')

		.component('gitMenuLink', 
			{
				bindings: {
					section: '<'
				},
				templateUrl: 'app/layout/menuLink.html',
				controller: menuLinkCtrl
			}
		)
        
    menuLinkCtrl.$inject = ['gitNavigation'];
    
    function menuLinkCtrl(gitNavigation) {

        var ctrl = this;
        
        ctrl.data = gitNavigation.data;
        ctrl.isSelected = isSelected;

       function isSelected() {
       	//console.log(gitNavigation.selectPage(ctrl.section))
            return gitNavigation.selectPage(ctrl.section);
        };

    }

})();