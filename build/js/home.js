define(['jquery', 'velocity', 'velocityui'],
    function($, velocity, velocityui) {
        return function() {
            self = this;

            var _moveShip = function() {
                $('.ship').velocity(
                    {translateY: -600},
                    {duration: 4000, easing: "easeInCubic"}
                );
            };

            var _screenShake = function() {
                var $mars = $('.mars');
                var groundShake = [];
                var SHAKE_X_MAGNITUDE = 5;
                var SHAKE_Y_MAGNITUDE = 4;
                var SHAKES = 199;
                for (var i=SHAKES; i>0; i--) {
                    var MAG_REDUCE = (i/SHAKES);
                    var xDelta = Math.floor((Math.random() * SHAKE_X_MAGNITUDE - 2) * MAG_REDUCE);
                    var yDelta = Math.floor(Math.random() * SHAKE_Y_MAGNITUDE * MAG_REDUCE);
                    groundShake.push({e: $mars, p: {translateX: xDelta, translateY: yDelta}, o: {duration: 10}});
                }
                groundShake.push({e: $mars, p: {translateX: 0, translateY: 0}, o: {duration: 10}});
                velocity.RunSequence(groundShake);
            };

            self.init = function() {
                _moveShip();
                _screenShake();
            };
        };
    }
);
