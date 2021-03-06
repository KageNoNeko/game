/* game.Game Service */
(function () {
    'use strict';

    var requestAnimationFrame = (function(){
        return window.requestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame
            || window.oRequestAnimationFrame
            || window.msRequestAnimationFrame
            || function(callback){
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    var game = angular.module('game');

    game.provider('game.Game', [
        function gameProvider() {
            this.$get = [
                '$q', 'game.Field',
                function game($q, Field) {
                    var lastTime;
                    function render() {
                        var elm = Field.getElement(),
                            ctx = Field.getContext();
                        ctx.fillStyle = '#000';
                        ctx.fillRect(0, 0, elm.width, elm.height);
                    }
                    function frame() {
                        var now = Date.now(),
                            dt = (now - lastTime) / 1000.0;

                        /*update(dt);*/
                         render();

                        lastTime = now;
                        requestAnimationFrame(frame);
                    }
                    return {
                        'launch': function () {
                            return $q.all([Field.ready()/*resources*/])
                                .then(function () {
                                    frame();
                                });
                        }
                    };
                }
            ];
        }
    ]);
})();