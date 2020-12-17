carousel = document.querySelector("#truckCarousel");


// stagger carousel not working, dont know why
setTimeout(function() {
    if(carousel != null){
        carousel.dataset.interval = 6000;
    }
}, 3000);
