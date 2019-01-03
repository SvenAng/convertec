/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.exampleBehavior = {
    attach: function (context, settings) {
//      alert("I'm alive!");
        
        
        // ===================== Slick gallerier ===================== 
        
        jQuery('.leverantorer-slick').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        
        
        });
        
        
        jQuery('.front-slider').slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            speed: 400,
            dots: true,
            arrows: true,
            cssEase: 'linear',
            fade: true
        });
        
        jQuery('.produkt-slider').slick({
            slidesToShow: 1,
            infinite: true,
            speed: 400,
            dots: true
        });
        
        
        
        
        
    }
  };

})(jQuery, Drupal);
