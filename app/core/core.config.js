(function() {
		'use strict';

	angular.module('app.core')
		.config(coreConfig)

	coreConfig.$inject = ['$mdIconProvider', '$mdThemingProvider', '$routeProvider', '$locationProvider'];

	function coreConfig($mdIconProvider, $mdThemingProvider, $routeProvider, $locationProvider) {

		$locationProvider.html5Mode(false);

		$routeProvider
			.when('/radar-dashboard', {
				template: '<git-dashboard></git-dashboard>'
			})
			.when('/radar-dashboard/commits/:repo', {
				template: '<git-commits></git-commits>'
			})
			.when('/tstt-dashboard', {
				template: '<h1>DB Usage</h1>'
			})
			.otherwise({
				redirectTo: '/radar-dashboard'
			});

		$mdIconProvider
			.icon('menu', './app/assets/svg/menu.svg', 24);
			
		$mdThemingProvider.theme('default')
			.primaryPalette('grey')
			.accentPalette('red');
	}

})();