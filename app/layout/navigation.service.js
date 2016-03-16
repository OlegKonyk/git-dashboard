
(function () {
    'use strict';
    
    angular.module('app.layout')

        .service('gitNavigation', gitNavigationService)
    
    gitNavigationService.$inject = ['$window', '$rootScope', '$location', '$mdMedia'];
    
    function gitNavigationService($window, $rootScope, $location, $mdMedia){
        
        var service = {};
        var storage = $window.localStorage;
       
        service.data = {};
        service.data.sections = getAllSections();
        service.data.pinedNav = getPinedNav();
        service.getPinedNav = getPinedNav;
        service.data.isMiniNav = service.data.pinedNav ? false : true;
        service.onHoverIn = onHoverIn;
        service.onHoverOut = onHoverOut;
        service.setPinedNav = setPinedNav;
        //service.toggleSection = toggleSection;
        service.selectSection = selectSection;
        service.selectPage = selectPage;
        
        
        $rootScope.$on('$locationChangeSuccess', onLocationChange);
        $rootScope.$watch(function() { return $mdMedia('gt-sm'); }, pinOnSize);
        
        function selectPage(page) {
			return service.data.currentPage === page;
		};
        
        /*function toggleSection(section) {
			service.data.openedSection = (service.data.openedSection === section ? null : section);
		};*/
        
        function selectSection(section) {
			return service.data.openedSection === section;
		};
        
        function onHoverIn() {
			if(service.data.isMiniNav && !service.data.pinedNav){
				service.data.isMiniNav = false;
			}
		}

		function onHoverOut() {
			if(!service.data.pinedNav){
				service.data.isMiniNav = true;
			}
		}
        
        function getPinedNav(){
			var storeVal = storage.getItem('git-pined-nav');
			if((storeVal  === null) || (storeVal  === 'false')){
				return false;
			} else{
				return true;
			}
		}
        
        function setPinedNav($element){
			if(service.data.pinedNav){
				service.data.pinedNav = false;
				storage.setItem('git-pined-nav', service.data.pinedNav);
				setTimeout(function(){ 
					$element.find('md-sidenav').triggerHandler('mouseleave');
				}, 300);
			}else{
				service.data.pinedNav = true;
				storage.setItem('git-pined-nav', service.data.pinedNav);
			}
		}
        
        function onLocationChange() {
			var path = $location.path();
			
			var introLink = service.data.sections[0]

			if (path == '/') {
				$location.path(introLink.url);
				return;
			}

			var matchPage = function(section, page) {
				if (path.indexOf(page.url.replace('#/', '')) !== -1) {
					service.data.openedSection = section;
					service.data.currentSection = section;
					service.data.currentPage = page;
				}
			};

			service.data.sections.forEach(function(section) {
				if (section.pages) {
					section.pages.forEach(function(page) {
                        
						matchPage(section, page);
					});
				}
				else if (section.type === 'link') {
					matchPage(section, section);
				}
			});
		}
        
        function pinOnSize(gtSm) {
			service.data.hideToggle = gtSm;
			if(!gtSm){
				service.data.isMiniNav = false;
				service.data.pinedNav = true;
			}else{
				service.data.pinedNav = service.getPinedNav();
			}
  		}
          
        function getAllSections(){
            return [
                {
                    name: 'Git Dashboard',
                    type: 'link',
                    url: '#/git-dashboard',
                    icon: 'github-circle'
                },
                {
                    name: 'Settings',
                    type: 'link',
                    url: '#/settings',
                    icon: 'settings'
                }
            ];
        }
         
        return service;
    }
    
})();
