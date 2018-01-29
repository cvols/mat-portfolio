$(document).ready(function () {
    // Init Carousel
    $('.carousel').carousel();

    // Init Carousel Slider
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
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

    $('#contact-form').submit(function (e) {
        var name = $('#first_name').val()
        var lastname = $('#last_name').val()
        var email = $('#email').val()
        var message = $('#textarea').val()

        if (name == '' || lastname == '' || email == '' || message == '') {
            alertify.error('Please fill out the entire form')
        } else {
            $.ajax({
                url: 'https://formspree.io/chris.volonnino@gmail.com',
                method: 'POST',
                data: $(this).serialize(),
                datatype: 'json'
            })
            e.preventDefault()
            $('#first_name').val('')
            $('#last_name').val('')
            $('#email').val('')
            $('#textarea').val('')
            alertify.success('Message sent!')
        }
    })

});
