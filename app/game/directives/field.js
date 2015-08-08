/* gameField Directive */
(function () {
    'use strict';
    
    var game = angular.module('game');

    game.directive('gameField', [
        'game.Field',
        function (field) {
            return {
                restrict : 'EA',
                replace : true,
                scope :{
                },
                template: "<canvas></canvas>",
                link: function (scope, element, attributes) {
                    element[0].style.width = '100%';
                    element[0].style.height = '100%';
                    field.setElement(element[0]);
                }
            }
        }
    ]);
})();