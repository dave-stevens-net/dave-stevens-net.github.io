define(['jquery', 'spaceshipSceneAnimator'],
    function($, SpaceshipSceneAnimator) {
        return function() {
            var self = this;

            var _setupSidebarNavigation = function() {
                $(".menu-open-close").click(function() {
                    if ($(".page-overlay").hasClass("active")) {
                        $(".page-overlay").removeClass("active");
                        $(".slider-menu").removeClass("active");
                    } else {
                        $(".page-overlay").addClass("active");
                        $(".slider-menu").addClass("active");
                    }
                });
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
