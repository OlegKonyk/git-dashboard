(function () {
    'use strict';
    
    angular.module('app.gitDashboard')
        .service('gitDashboard', gitDashboardService);
       
    gitDashboardService.$inject = ['$resource', '$http', '$window'];
        
    function gitDashboardService($resource, $http, $window){

        var storage = $window.localStorage;

        var service = {
            currentOrg: getOrgName()
        };

        function getCompliteList(){
            return new Promise(function (resolve, reject) {
                getOrgInfo(service.currentOrg)
                    .then(function(orgData){
                        
                        
                        if(orgData.public_repos > 100){
                            var pages = Math.ceil(orgData.public_repos/100)
                            
                            var pagesRequests = [];

                            for (var i = 0; i < pages; i++){
                                var pagesRequest = getDataPerPage(i+1)
                                pagesRequests.push(pagesRequest);
                            }
                            Promise.all(pagesRequests)
                            	.then(function(collectedData) { 
	                                resolve(collectedData);
	                            }, function(err) {
	                                reject(err);
	                            });
                        }else{
                            getDataPerPage(1)
	                            .then(function(collectedData) { 
	                                resolve(collectedData);
	                            }, function(err) {
	                                reject(err);
	                            });
                        }

                    }, function(err){
                        reject(err);
                    })
                })
        }

        function getOrgName(){
            var orgName = storage.getItem('git-organization');
            if((orgName  === null)){
                return 'Google';
            } else{
                return orgName;
            }
        }

        function getOrgInfo(orgName){
            return $http.get('https://api.github.com/orgs/' + orgName)
            		.then(function(res){
                            service.orgInfo = res.data;
                        	return res.data;
                    })
        }

        function getDataPerPage(pageNum){
            return $http.get('https://api.github.com/orgs/' + service.currentOrg + '/repos?page='+ pageNum + '&per_page=100')
                        .then(function(res){
                            return res.data;
                        })
        }

        
        service.getCompliteList = getCompliteList;  
        service.getOrgInfo = getOrgInfo;  
        
        
        return service;
    }
      

        
})();