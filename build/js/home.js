define(['jquery', 'velocity', 'velocityui'],
    function($, velocity, velocityui) {
        return function() {
            self = this;

            var _resetShip = function(onComplete) {
                $('.ship').velocity(
                    {translateY: 0},
                    {duration: 0, complete: onComplete }
                );
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
