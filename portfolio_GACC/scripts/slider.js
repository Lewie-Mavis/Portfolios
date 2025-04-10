$(document).ready(function(){
    var slider = $('.gallery-slider');

    slider.slick({
        slidesToShow: 1,        // Show 1 image at a time
        slidesToScroll: 1,      // Scroll 1 image at a time
        autoplay: true,         // Enable auto sliding
        autoplaySpeed: 2000,    // Slide change speed in ms
        dots: true,             // Show navigation dots
        arrows: true,           // Show navigation arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2   // Show 2 images on medium screens
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1   // Show 1 image on small screens
                }
            }
        ]
    });

    // Ensure autoplay continues after clicking on an image
    $('.gallery-slider img').on('click', function() {
        slider.slick('slickPlay');  // Resume autoplay after clicking an image
    });
});
