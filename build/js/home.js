define(['jquery', 'spaceshipSceneAnimator'],
    function($, SpaceshipSceneAnimator) {
        return function() {
            var self = this;

            var _setupSidebarNavigation = function() {
                $(".menu-open-close").click(function() {
                    if ($(".page-overlay").hasClass("active")) {
                        _morphToHamburger();
                        $(".page-overlay").removeClass("active");
                        $(".slider-menu").removeClass("active");
                    } else {
                        _morphToX();
                        $(".page-overlay").addClass("active");
                        $(".slider-menu").addClass("active");
                    }
                });
                var nav = function(scrollTo) {
                    $('html, body').animate({
                        scrollTop: scrollTo
                    }, 500);
                    $(".menu-open-close").click();
                    return false;
                };
                $(".nav-top").click(function() { return nav(0); });
                $(".nav-about-me").click(function() { return nav($("a[name=about-me-section]").offset().top); });
            };

            var _morphToX = function() {
                $('.menu-open-close .line1').velocity(
                    {translateY: 9},
                    {duration: 250, easing: "easeInOutCubic", complete: function() {
                        $('.menu-open-close .line2').hide();
                        $('.menu-open-close .line1').velocity(
                            {rotateZ: "45deg"},
                            {duration: 250, easing: "easeInOutCubic"}
                        );
                    }}
                );
                $('.menu-open-close .line3').velocity(
                    {translateY: -9},
                    {duration: 250, easing: "easeInOutCubic", complete: function() {
                        $('.menu-open-close .line3').velocity(
                            {rotateZ: "-45deg"},
                            {duration: 250, easing: "easeInOutCubic"}
                        );
                    }}
                );
            };

            var _morphToHamburger = function() {
                $('.menu-open-close .line1').velocity(
                    {rotateZ: "0deg"},
                    {duration: 250, easing: "easeInOutCubic", complete: function() {
                        $('.menu-open-close .line2').show();
                        $('.menu-open-close .line1').velocity(
                            {translateY: 0},
                            {duration: 250, easing: "easeInOutCubic"}
                        );
                    }}
                );
                $('.menu-open-close .line3').velocity(
                    {rotateZ: "0deg"},
                    {duration: 250, easing: "easeInOutCubic", complete: function() {
                        $('.menu-open-close .line3').velocity(
                            {translateY: 0},
                            {duration: 250, easing: "easeInOutCubic"}
                        );
                    }}
                );
            };

            self.init = function() {
                var spaceshipSceneAnimator = new SpaceshipSceneAnimator();
                spaceshipSceneAnimator.init();
                spaceshipSceneAnimator.playAnimation();
                _setupSidebarNavigation();
            };
        };
    }
);
