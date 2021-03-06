/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function($, Drupal) {

    /**
     * Use this behavior as a template for custom Javascript.
     */

    // sökblocket
    jQuery(".search-button").click(function() {
        jQuery('#search-wrapper').slideToggle();

    });
    // ============= Megamenu ================ 
    // var a = 0;
    // var b = 0;
    jQuery("._lev_").click(function() {
        jQuery(".mega-1").toggleClass("show");

    });
    // jQuery(".mega-1").hover(function() {
    //     a = 1;
    // });
    // jQuery(".mega-1").mouseleave(function() {
    //     if (a == 1) {
    //         jQuery(".mega-1").removeClass("show");
    //         a = 0;
    //     }
    // });


    jQuery("._prod_").click(function() {
        jQuery(".mega-2").toggleClass("show");

    });
    // jQuery(".mega-2").hover(function() {
    //     b = 1;
    // });
    // jQuery(".mega-2").mouseleave(function() {
    //     if (b == 1) {
    //         jQuery(".mega-2").removeClass("show");
    //         b = 0;
    //     }
    // });



    // stäng megameny click outside
    jQuery(document).bind('click', function(e) {
        //http://stackoverflow.com/questions/1403615/use-jquery-to-hide-a-div-when-the-user-clicks-outside-of-it
        var txt = jQuery(e.target).attr('class');
        //console.log(txt);
        var clicked = jQuery(e.target);
        if (!clicked.parents().hasClass("megamenu")) {


            if (txt == "_lev_ is-active" || txt == "_lev_") {
                jQuery('#search-wrapper').hide();
            } else {
                jQuery(".mega-1").removeClass("show");
                //console.log("outside");
                //

            }

            if (txt == "_prod_ is-active" || txt == "_prod_") {
                jQuery('#search-wrapper').hide();
            } else {
                jQuery(".mega-2").removeClass("show");
                //jQuery('#search-wrapper').hide();

            }
        }

    });

    // timer
    var interval = 1;

    setInterval(function() {
        if (interval == 425) {
            /* if intervall reaches 5 the user is inactive hide element/s */
            jQuery(".mega-2").removeClass("show");
            jQuery(".mega-1").removeClass("show");
            jQuery('#search-wrapper').slideUp();
            interval = 1;
        }
        interval = interval + 1;
        //console.log(interval);
    }, 1000);

    jQuery(document).bind('mousemove keypress', function() {
        interval = 1;
    });


    Drupal.behaviors.exampleBehavior = {
        attach: function(context, settings) {

            // special för activa länkar
            var pathArray = location.pathname.split('/');
            var secondLevelLocation = pathArray[1];
            //console.log(location.pathname);
            //console.log(secondLevelLocation);
            if (secondLevelLocation == "produkter") {
                $("li .expand ._prod_").toggleClass("is-active");
            } else if (secondLevelLocation == "leverantor") {
                $("li .expand ._lev_").toggleClass("is-active");
            }
            // dödar länkar för dropdown
            jQuery('.menu .dropdown').click(function() {
                return false;
            });





            // Mobilmenu
            jQuery(".c-hamburger").click(function() {
                jQuery('#main-navigation').toggleClass('open');
                jQuery('.c-hamburger').toggleClass('is-active');
            });
            jQuery("ul.mobile-menu-root > li.has-flyout > .expand").click(function() {
                jQuery(this).next().slideToggle();
            });

            jQuery('.has-flyout .has-flyout .expand-indicator').text('');
            jQuery(".block-huvudmeny-11 .dropdown").click(function() {
                jQuery(this).next().slideToggle();

            });
            //        jQuery("ul.mobile-menu-root > li.has-flyout > .expand span").click(function(){ 
            jQuery(".block-huvudmeny-11 .menu-item--expanded span").click(function() {
                jQuery(this).next().slideToggle();

            });


            // fix för frontpage slick gallery texten onpå bilden
            jQuery('.slider-body').delay(500).fadeIn(200);




            // Scroll topp
            jQuery(".scroll-top").click(function() {
                jQuery("html, body").animate({
                    scrollTop: 0
                }, "slow");
                return false;

            });

            var offset = 120;
            var duration = 500;

            jQuery('.scroll-top').hide();

            jQuery(window).scroll(function() {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery('.scroll-top').fadeIn(duration);
                } else {
                    jQuery('.scroll-top').fadeOut(duration);
                }
            });

            //        Slick sliders

            jQuery('.leverantorer-slick').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,

                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 6,
                            slidesToScroll: 6,
                            infinite: true,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,

                            arrows: false
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
                lazyLoad: 'ondemand',
                slidesToShow: 1,
                infinite: true,
                speed: 400,
                arrows: false,
                dots: true
            });

        }
    };

})(jQuery, Drupal);