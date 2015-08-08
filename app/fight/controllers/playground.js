/* fight.Playground Controller */
(function () {
    'use strict';

    var fight = angular.module('fight');

    fight.controller('fight.Playground', [
        'game.Game',
        function (Game) {
            Game.launch();
        }
    ]);
})();