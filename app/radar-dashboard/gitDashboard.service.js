(function () {
    'use strict';
    
    angular.module('app.radarDashboard')
        .service('gitDashboard', gitDashboardService);
       
    gitDashboardService.$inject = ['$resource', '$http'];
        
    function gitDashboardService($resource, $http){

        var service = {};

        var currentOrg = 'netflix'

        function getCompliteList(){
            return new Promise(function (resolve, reject) {
                getOrgInfo(currentOrg)
                    .then(function(orgData){
                        service.orgInfo = orgData;
                        
                        if(orgData.public_repos > 100){
                            var pages = Math.ceil(orgData.public_repos/100)
                            
                            var pagesRequests = [];

                            for (var i = 0; i < pages; i++){
                                var pagesRequest = getDataPerPage(i+1)
                                pagesRequests.push(pagesRequest);
                            }
                            Promise.all(pagesRequests).then(function(collectedData) { 
                                console.log(collectedData)
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

        function getOrgInfo(orgName){
            return $http.get('https://api.github.com/orgs/' + orgName)
            		.then(function(res){
                        	return res.data
                    })
        }

        function getDataPerPage(pageNum){
            return $http.get('https://api.github.com/orgs/' + currentOrg + '/repos?page='+ pageNum + '&per_page=100')
                        .then(function(res){
                            return res.data
                        })
        }

        

        service.getCompliteList = getCompliteList;          
        
        
        return service;
    }
      

        
})();