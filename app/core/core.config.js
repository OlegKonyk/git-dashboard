(function() {
		'use strict';

	angular.module('app.core')
		.config(coreConfig)

	coreConfig.$inject = ['$mdIconProvider', '$mdThemingProvider', '$routeProvider', '$locationProvider'];

	function coreConfig($mdIconProvider, $mdThemingProvider, $routeProvider, $locationProvider) {

		$locationProvider.html5Mode(false);

		$routeProvider
			.when('/git-dashboard', {
				template: '<git-dashboard></git-dashboard>'
			})
			.when('/radar-dashboard/commits/:owner/:repo', {
				template: '<git-commits></git-commits>'
			})
			.when('/settings', {
				template: '<git-widget></git-widget>'
			})
			.otherwise({
				redirectTo: '/git-dashboard'
			});

		$mdIconProvider
			.icon('menu', './app/assets/svg/menu.svg', 24);
			
		$mdThemingProvider.theme('default')
			.primaryPalette('grey')
			.accentPalette('red');
	}

})();