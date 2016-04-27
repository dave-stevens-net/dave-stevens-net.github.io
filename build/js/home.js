define(['jquery', 'velocity', 'velocityui', 'spriteanimator', 'q'],
    function($, velocity, velocityui, spriteanimator, Q) {
        return function() {
            var self = this;
            var _ship = null;
            var _astronautRunning = null;
            var _astronautStanding = null;
            var _astronautClimbing = null;

            var _resetScene = function(onComplete) {
                _resetShip(function() {
                    _closeWings();
                    _resetAstronaut(function() {
                        onComplete();
                    });
                });
            };

            var _resetAstronaut = function(onComplete) {
                $('#astronaut_running').velocity(
                    {translateY: 0, translateX: 0},
                    {duration: 0, complete: onComplete }
                );
                $('#astronaut_running').show();
                $('#astronaut_standing').hide();
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
                _ship.reset();
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
                setTimeout(function() {
                    _ship.play({
                        run: 1,
                        delay: 40
                    });
                }, 1500);
            };

            var _playAstronautRunning = function(onComplete) {
                $('#astronaut_running').velocity(
                    {translateX: 165, translateY: 25},
                    {duration: 3000, easing: "linear", complete: onComplete }
                );
                _astronautRunning.play({
                    run: -1,
                    delay: 20
                });
            };

            var _playAstronautStanding = function(onComplete) {
                $.Velocity.hook($('#astronaut_standing'), "translateX", "165px");
                $.Velocity.hook($('#astronaut_standing'), "translateY", "25px");
                $('#astronaut_standing').show();
                $('#astronaut_running').hide();
                _astronautStanding.play({
                    run: -1,
                    delay: 20
                });
                setTimeout(function() {
                    onComplete();
                }, 3000);
            };

            var _initArtifacts = function() {
                _astronautRunning = $('#astronaut_running').spriteAnimator({
                    cols: 10,
                    rows: 3,
                    cutOffFrames: 5
                });
                _astronautStanding = $('#astronaut_standing').spriteAnimator({
                    cols: 10,
                    rows: 3,
                    cutOffFrames: 5
                });
                _astronautClimbing = $('#astronaut_climbing').spriteAnimator({
                    cols: 10,
                    rows: 3,
                    cutOffFrames: 5
                });
                _ship = $('#ship_anim').spriteAnimator({
                    cols: 5,
                    rows: 1
                });
            };

            var _playAnimation = function() {
                _resetScene(function() {
                    _playAstronautRunning(function() {
                        _playAstronautStanding(function() {
                            _astronautRunning.stop();
                            $('#astronaut_running').hide();
                            _playSpaceshipAnimation();
                        });
                    });
                });
            };

            self.init = function() {
                _initArtifacts();
                _playAnimation();
                $(".replay-button").click(function() {
                    _playAnimation();
                });
            };
        };
    }
);
