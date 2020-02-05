// Initialising the lightbox plugin
lightbox.option({
    maxWidth: 800,
    positionFromTop: 225,
    showImageNumberLabel: false,
    wrapAround: true,
    alwaysShowNavOnTouchDevices: true
});

// Selection all anchor elements
let images = document.querySelectorAll('a'); 

$('#search').on('keyup', function() {
    // Gets the value of the search box and converts it all to lowercase
    let search = $(this).val().toLowerCase();
    // Loop through all of the links in the images collection
    for (let i = 0; i < images.length; i++) {
        let input = images[i].getAttribute('data-title');
        if (input.toLowerCase().indexOf(search) > -1) {
            images[i].style.display = '';
        } else {
            images[i].style.display = 'none';
        }
    }
});