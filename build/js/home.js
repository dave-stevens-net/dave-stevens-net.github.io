define(['jquery',
        'velocity'],
    function($,
            velocity) {
        return function() {
            self = this;

            self.init = function() {
                console.log('inside init...');
                $('.ship').velocity(
                    {translateY: -200},
                    {duration: 2000, easing: "swing"}
                );
            };
        };
    }
);
