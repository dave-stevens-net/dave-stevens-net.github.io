define(['jquery'],
    function($) {
        return function() {
            self = this;

            self.init = function() {
                require('velocity');
                
                console.log('inside init...');
                $('.ship').velocity(
                    {translateY: -200},
                    {duration: 2000, easing: "swing"}
                );
            };
        };
    }
);
