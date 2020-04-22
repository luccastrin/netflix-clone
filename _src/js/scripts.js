$(document).ready(function() {

    function slick() {

        $('#slick-sliders ul').slick({
            dots:false,
            infinite: false,
            arrows: false,
            centerMode: false,
            slidesToShow: 7.5,
                
            responsive: [
                    {
                    breakpoint: 480,
                        settings: {
                        dots:false,
                        infinite: false,
                        arrows: false,                        centerMode: false,
                        slidesToShow: 2.1
                    }
                }
            ]
        });
    }

    slick();
    
});