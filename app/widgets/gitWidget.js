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
		
		gitWigetCtrl.$inject = ['$window', 'gitDashboard'];

		function gitWigetCtrl($window, gitDashboard) {

			var storage = $window.localStorage;
			var ctrl = this;

			ctrl.setOrganization = setOrganization;
			ctrl.currentOrg = gitDashboard.currentOrg;


			function setOrganization(){

				gitDashboard.getOrgInfo(ctrl.organizationName)
					.then(function(res){
						ctrl.error = false;

						gitDashboard.currentOrg = ctrl.organizationName;
						ctrl.currentOrg = ctrl.organizationName;

						gitDashboard.allRepos = null;
                		gitDashboard.orgInfo = res.data;

						storage.setItem('git-organization', ctrl.organizationName);
					}, function(err){
						console.log(err)
						ctrl.error = err;
					})
				
			}

		}

})();