/* app Module */
(function () {
    'use strict';

    var app = angular.module('app', ['ui.router', 'game']);

    app.config([
        '$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('game', {
                    url: "/",
                    controller: 'app.Game',
                    templateUrl: "/app/view/game.html"
                })
                .state('constructionSet', {
                    url: "/cs",
                    templateUrl: "/app/view/cs.html"
                });
        }]);
})();