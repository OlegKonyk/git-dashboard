(function () {
    'use strict';
    
    angular.module('app.widgets')

        .factory('gitWidget', gitWidgetService);
       
        gitWidgetService.$inject = ['$resource'];
        function gitWidgetService($resource){
            return {
                
            };   
        }
      

        
})();