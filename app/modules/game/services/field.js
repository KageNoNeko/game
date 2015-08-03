/* game.Field Service */
(function () {
    'use strict';
    
    var game = angular.module('game');

    game.provider('game.Field', [
        function fieldProvider() {
            this.$get = [
                '$q',
                function field($q) {
                    var element,
                        ctx,
                        readyDeferred = $q.defer();
                    return {
                        'setElement': function (elm) {
                            element = elm;
                            readyDeferred.resolve(element);
                        },
                        'getElement': function () {
                            return element;
                        },
                        'getContext': function () {
                            if (!ctx) {
                                ctx = element.getContext("2d");
                            }
                            return ctx;
                        },
                        'ready': function () {
                            return readyDeferred.promise;
                        }
                    };
                }
            ];
        }
    ]);
})();