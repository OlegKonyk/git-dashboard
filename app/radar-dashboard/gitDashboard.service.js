(function () {
    'use strict';
    
    angular.module('app.radarDashboard')

        .service('gitDashboard', gitDashboardService);
       
        gitDashboardService.$inject = ['$resource', '$http'];
        function gitDashboardService($resource, $http){
            var gitDashboardResource = $resource('https://api.github.com/orgs/netflix/repos?page=2&per_page=100', {}, {get: { method: 'GET', isArray: true} });
            
            var service = {
                compliteList: null
            };

            function getorgInfo(orgName){
                
                return $http.get('https://api.github.com/orgs/' + orgName)
                            .then(function(res){
                                //console.log(res.data)
                                return res.data
                            })
            }
            function getCompliteList(){
                return new Promise(function (resolve, reject) {
                    getorgInfo('netflix')
                        .then(function(orgData){
                            if(orgData.public_repos > 100){
                                var pages = Math.ceil(orgData.public_repos/100)
                                
                                var pagesRequests = [];

                                for (var i = 0; i < pages; i++){
                                    //console.log(i)
                                    var pagesRequest = getDataPerPage(i+1)
                                    pagesRequests.push(pagesRequest);
                                }
                                Promise.all(pagesRequests).then(function(something) { 
                                    console.log(something)
                                    resolve(something);
                                }, function(err) {
                                    reject(err);
                                });


                            }
                        })
                    })
            }
            

            function getDataPerPage(pageNum){
                console.log('-----')
                return $http.get('https://api.github.com/orgs/netflix/repos?page='+ pageNum + '&per_page=100')
                            .then(function(res){
                                //console.log(res.data)
                                //service.compliteList = res.data
                                return res.data
                            })
            }

            

            service.resource = gitDashboardResource;   
            service.getCompliteList = getCompliteList;          
            
            
            return service;
        }
      

        
})();