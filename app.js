$(document).ready(function () {
    // Init Carousel
    $('.carousel').carousel();

    // Init Carousel Slider
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });

    // Fire off toast
    //Materialize.toast('Hello World', 3000);

    // Init Slider
    $('.slider').slider();

    // Init Modal
    $('.modal').modal();

    // Initialize collapse button
    //$(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //  $('.collapsible').collapsible();

    $('#profile-submit').on('click', function (event) {
        event.preventDefault();

        $('html,body').animate({
                scrollTop: $("#profile").offset().top
            },
            2000);
    })
    $('#technology-submit').on('click', function (event) {
        event.preventDefault();

        $('html,body').animate({
                scrollTop: $("#technology").offset().top
            },
            2000);
    })
    $('#portfolio-submit').on('click', function (event) {
        event.preventDefault();

        $('html,body').animate({
                scrollTop: $("#portfolio").offset().top
            },
            4000);
    })
    $('#contact-submit').on('click', function (event) {
        event.preventDefault();

        $('html,body').animate({
                scrollTop: $("#contact").offset().top
            },
            4000);
    })
});
