/* app.Game Controller */
(function () {
    'use strict';

    var app = angular.module('app');

    app.controller('app.Game', [
        'game.Game',
        function (Game) {
            Game.launch();
        }
    ]);
})();