(function () {
	'use strict';

	angular.module('app.widgets')

		.component('gitWidget', 
			{
				bindings: {},
				templateUrl: 'app/widgets/gitWidget.html',
				controller: gitWigetCtrl
			}
		);
		
		gitWigetCtrl.$inject = ['gitWidget'];

		function gitWigetCtrl(gitWidget) {

			var ctrl = this;

			

		}

})();