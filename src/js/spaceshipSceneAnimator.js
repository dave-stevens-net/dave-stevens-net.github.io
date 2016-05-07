define(['jquery', 'velocity', 'velocityui', 'spriteanimator'],
    function($, velocity, velocityui, spriteanimator) {
        return function() {
            var self = this;
            var _ship = null;
            var _astronautRunning = null;
            var _astronautStanding = null;
            var _astronautClimbing = null;

            var _resetScene = function(onComplete) {
                _resetShip();
                _resetAstronaut();
                _resetReplayButton();
            };

            var _resetAstronaut = function() {
                $.Velocity.hook($('#astronaut_running'), "translateY", "0px");
                $.Velocity.hook($('#astronaut_running'), "translateX", "0px");
                $('#astronaut_running').show();
                $('#astronaut_standing').hide();
            };

            var _resetShip = function() {
                $.Velocity.hook($('.ship'), "translateY", "0px");
                $.Velocity.hook($('#ladder'), "translateY", "0px");
                $('.thrust').hide();
                _ship.stop();
                _ship.reset();
            };

            var _resetReplayButton = function() {
                $(".replay-button").hide();
                $(".replay-button").removeClass('show');
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
                    $(".replay-button").show();
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
                    {translateX: 170, translateY: 25},
                    {duration: 3000, easing: "linear", complete: onComplete }
                );
                _astronautRunning.play({
                    run: -1,
                    delay: 20
                });
            };

            var _playAstronautStanding = function(onComplete) {
                $.Velocity.hook($('#astronaut_standing'), "translateX", "170px");
                $.Velocity.hook($('#astronaut_standing'), "translateY", "25px");
                $('#astronaut_standing').show();
                _astronautRunning.stop();
                $('#astronaut_running').hide();
                _astronautStanding.play({
                    run: -1,
                    delay: 20
                });
                setTimeout(function() {
                    onComplete();
                }, 1500);
            };

            var _playAstronautClimbing = function(onComplete) {
                $.Velocity.hook($('#astronaut_climbing'), "translateX", "175px");
                $.Velocity.hook($('#astronaut_climbing'), "translateY", "25px");
                $('#astronaut_climbing').show();
                _astronautStanding.stop();
                $('#astronaut_standing').hide();
                _astronautClimbing.play({
                    run: -1,
                    delay: 20
                });
                $('#astronaut_climbing').velocity(
                    {translateY: -20},
                    {duration: 2000, easing: "linear", complete: onComplete }
                );
            };

            var _playLadderDescending = function() {
                $('#ladder').show();
                $('#ladder').velocity(
                    {translateY: 30},
                    {duration: 1000, easing: "easeOutCubic"}
                );
            };

            var _playLadderAscending = function(onComplete) {
                $('#ladder').velocity(
                    {translateY: 0},
                    {duration: 1000, easing: "easeOutCubic", complete: function() {
                            $('#ladder').hide();
                            onComplete();
                        }
                    }
                );
            };

            var _playStarField = function() {
                $('.star-field').velocity(
                    { rotateZ: "360deg"},
                    { duration: 200000, easing: "linear", complete: function () {
                            $.Velocity.hook($('.star-field'), "rotateZ", "0deg");
                            _playStarField();
                        }
                    }
                );
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
                _resetScene();
                _playAstronautRunning(function() {
                    _playLadderDescending();
                    _playAstronautStanding(function() {
                        $('#astronaut_running').hide();
                        _playAstronautClimbing(function() {
                            _playLadderAscending(function() {
                                setTimeout(function() {
                                    _playSpaceshipAnimation();
                                }, 1000);
                            });
                        });
                    });
                });
            };

            self.init = function() {
                _initArtifacts();
            };

            self.playAnimation = function() {
                _playAnimation();
                $(".replay-button").click(function() {
                    _playAnimation();
                });
            };
        };
    }
);
