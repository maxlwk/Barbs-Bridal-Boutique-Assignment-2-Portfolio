jQuery("#carousel").owlCarousel({
    autoplay: false,
    rewind: true,
    margin: 20,
    


    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 600,
    nav: true,
    responsive: {
      0: {
        items: 2
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 4
      }
    }
  });