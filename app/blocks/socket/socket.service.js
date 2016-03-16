(function () {
		'use strict';

    angular.module('blocks.socket')
		.service('tcSocket', socketService);

    socketService.$inject = ['$rootScope'];
    function socketService($rootScope){

        var args = arguments;

        var service = {

            connect: function(callback){
                this.socket = io.connect('');
                this.bConnectionTime = new Date();
                callback({socket: this.socket, bConnectionTime: this.bConnectionTime});
            },

            on: function(eventName, socket, callback){
                socket.on(eventName, function(){
                    var args = arguments;
                    $rootScope.$apply(function(){
                        if(callback){
                            callback.apply(socket, args);
                        }
                    });
                });
            },

            emit: function(eventName, socket, data){
                socket.emit(eventName, data);
            },

            removeAllListeners: function(eventName, socket){
                console.log(socket)
                socket.removeAllListeners(eventName);
            }

        };
        

        return service;
    }

})();