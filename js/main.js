// Initialising the lightbox plugin
lightbox.option({
    maxWidth: 800,
    positionFromTop: 225,
    showImageNumberLabel: false,
    wrapAround: true,
    alwaysShowNavOnTouchDevices: true
});

// Select all the anchor elements on the page
let images = document.querySelectorAll('a');

$(document).ready(function(){
    $("#search").on("keyup", function() {
        // Get the value of the search box and cover to lowercase
        let search = $(this).val().toLowerCase();
        // Loop through the images and match the search value to the data-title attribute of the images
        for (let i = 0; i < images.length; i++) {
            let input = images[i].getAttribute('data-title');
            if (input.toLowerCase().indexOf(search) > -1) {
                images[i].style.display = '';
            } else {
                images[i].style.display = 'none';
            }
        }
    });
  });