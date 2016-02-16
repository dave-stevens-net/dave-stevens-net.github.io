define(['jquery', 'velocity', 'velocityui', 'snapsvg'],
    function($, velocity, velocityui, Snap) {
        return function() {
            var self = this;
            var _svg = Snap("#ship-svg");

            var _resetShip = function(onComplete) {
                $('.ship').velocity(
                    {translateY: 0},
                    {duration: 0, complete: onComplete }
                );
                _resetWings();
            };

            var _resetWings = function() {
                var shipPath = _svg.select(":nth-child(1)");
                shipPath.animate({d: "M1.461,74.586l0,-33.75l11.25,-22.5l33.75,-16.875l33.75,16.875l11.25,22.5l0,33.75l-16.875,-33.75l-5.625,0l-5.625,11.25c0,0 -5.661,3.264 -16.875,3.264c-11.493,0 -16.875,-3.264 -16.875,-3.264l-5.625,-11.25l-5.625,0l-16.875,33.75Z"}, 0);
            };

            var _closeWings = function() {
                setTimeout(function(){
                    var shipPath = _svg.select(":nth-child(1)");
                    shipPath.animate({d: "M17.961,74.586l-16.5,-33.75l11.25,-22.5l33.75,-16.875l33.75,16.875l11.25,22.5l-16.5,33.75l-0.375,-33.75l-5.625,0l-5.625,11.25c0,0 -5.661,3.264 -16.875,3.264c-11.493,0 -16.875,-3.264 -16.875,-3.264l-5.625,-11.25l-5.625,0l-0.375,33.75Z"}, 1000, mina.easeinout);
                }, 800);
            };

            var _moveShip = function(onComplete) {
                $('.ship').velocity(
                    {translateY: -600},
                    {duration: 4000, easing: "easeInCubic", complete: onComplete }
                );
            };

            var _screenShake = function() {
                var $mars = $('.mars');
                var sequence = [];
                var SHAKE_X_MAGNITUDE = 5;
                var SHAKE_Y_MAGNITUDE = 4;
                var SHAKES = 199;
                for (var i=SHAKES; i>0; i--) {
                    var MAG_REDUCE = (i/SHAKES);
                    var xDelta = Math.floor((Math.random() * SHAKE_X_MAGNITUDE - 2) * MAG_REDUCE);
                    var yDelta = Math.floor(Math.random() * SHAKE_Y_MAGNITUDE * MAG_REDUCE);
                    sequence.push({e: $mars, p: {translateX: xDelta, translateY: yDelta}, o: {duration: 10}});
                }
                sequence.push({e: $mars, p: {translateX: 0, translateY: 0}, o: {duration: 10}});
                velocity.RunSequence(sequence);
            };

            var _fireThrusters = function() {
                var $thruster = $('.thrust');
                var sequence = [];
                var SHAKE_Y_MAGNITUDE = 10;
                var SHAKES = 199;
                for (var i=SHAKES; i>0; i--) {
                    var yDelta = Math.floor(Math.random() * SHAKE_Y_MAGNITUDE);
                    sequence.push({e: $thruster, p: {translateY: yDelta}, o: {duration: 10}});
                }
                sequence.push({e: $thruster, p: {translateY: 0}, o: {duration: 10}});
                velocity.RunSequence(sequence);
            };

            var _playSpaceshipAnimation = function() {
                $(".replay-button").removeClass('show');
                _resetShip(function(elements) {
                    _closeWings();
                    _moveShip(function(elements) {
                        $(".replay-button").addClass('show');
                    });
                });
                _screenShake();
                _fireThrusters();
            };

            self.init = function() {
                _playSpaceshipAnimation();
                $(".replay-button").click(function() {
                    _playSpaceshipAnimation();
                });
            };
        };
    }
);
