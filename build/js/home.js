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

//                _initArtifacts();
//                _playStarField();
//                _playAnimation();

/*

                    var _scrollTo = function(navElement, sectionId, offset) {
                        $('html, body').animate({
                            scrollTop: $(sectionId).offset().top - offset
                        }, 500);
                        $('.nav-link').removeClass('active');
                        $(navElement).addClass('active');
                    };

                    $(document).ready(function() {

                        $('.nav-worship').click(function() {
                            _scrollTo(this, "a[name=worship-heading]", 0);
                            return false;
                        });
                        $('.nav-location').click(function() {
                            _scrollTo(this, "a[name=location-heading]", 0);
                            return false;
                        });
                        $('.nav-contact').click(function() {
                            _scrollTo(this, "a[name=contact-heading]", 0);
                            return false;
                        });
                        $('.nav-mobile-worship').click(function() {
                            _scrollTo(this, "a[name=worship-heading]", 0);
                            $('.menu-close-action').click();
                            return false;
                        });
                        $('.nav-mobile-location').click(function() {
                            _scrollTo(this, "a[name=location-heading]", 0);
                            $('.menu-close-action').click();
                            return false;
                        });
                        $('.nav-mobile-contact').click(function() {
                            _scrollTo(this, "a[name=contact-heading]", 0);
                            $('.menu-close-action').click();
                            return false;
                        });
                    });
*/


            };
        };
    }
);
