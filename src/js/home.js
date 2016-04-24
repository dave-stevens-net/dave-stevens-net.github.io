define(['jquery', 'velocity', 'velocityui', 'spriteanimator', 'q'],
    function($, velocity, velocityui, spriteanimator, Q) {
        return function() {
            var self = this;
            var _astronautAnimation = null;

            var _resetScene = function(onComplete) {
                _resetShip(function() {
                    _closeWings();
                    _resetAstronaut(function() {
                        onComplete();
                    });
                });
            };

            var _resetAstronaut = function(onComplete) {
                $('#astronaut').velocity(
                    {translateY: 0, translateX: 0},
                    {duration: 0, complete: onComplete }
                );
                $('#astronaut').show();
            };

            var _resetShip = function(onComplete) {
                $('.ship').velocity(
                    {translateY: 0},
                    {duration: 0, complete: onComplete }
                );
                $('.thrust').hide();
                _resetWings();
            };

            var _resetWings = function() {
                $(".replay-button").removeClass('show');
            };

            var _closeWings = function() {
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
                $thruster.show();
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
                _moveShip(function(elements) {
                    $(".replay-button").addClass('show');
                });
                _screenShake();
                _fireThrusters();
            };

            var _playAstronautAnimation = function(onComplete) {
                _astronautAnimation = $('#astronaut').spriteAnimator({
                    cols: 10,
                    rows: 3,
                    cutOffFrames: 5
                });
                $('#astronaut').velocity(
                    {translateX: 165, translateY: 25},
                    {duration: 3000, easing: "linear", complete: onComplete }
                );
                _astronautAnimation.play({
                    run: -1,
                    delay: 20
                });
            };

            var _playAnimation = function() {
                _resetScene(function() {
                    _playAstronautAnimation(function() {
                        _astronautAnimation.stop();
                        $('#astronaut').hide();
                        _playSpaceshipAnimation();
                    });
                });
            };

            self.init = function() {
                _playAnimation();
                $(".replay-button").click(function() {
                    _playAnimation();
                });
            };
        };
    }
);
