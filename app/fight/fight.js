/* fight Main Module */
(function () {
    'use strict';

    var fight = angular.module('fight', ['ui.router', 'game']);

    fight.config([
        '$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('play', {
                    url: "/",
                    controller: 'fight.Playground',
                    templateUrl: "/fight/view/playground.html"
                })
                .state('constructionSet', {
                    url: "/cs",
                    templateUrl: "/app/view/cs.html"
                });
        }]);
})();