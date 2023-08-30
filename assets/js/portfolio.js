/**
* Template Name: Personal
* Updated: Jun 18 2023 with Bootstrap v5.3.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
    "use strict";
    
    /**
     * Porfolio isotope and filter
     */
    // window.addEventListener('load', () => {
    //   let portfolioContainer = select('.portfolio-container');
    //   if (portfolioContainer) {
    //     let portfolioIsotope = new Isotope(portfolioContainer, {
    //       itemSelector: '.portfolio-item',
    //       layoutMode: 'fitRows'
    //     });
  
    //     let portfolioFilters = select('#portfolio-flters li', true);
  
    //     on('click', '#portfolio-flters li', function(e) {
    //       e.preventDefault();
    //       portfolioFilters.forEach(function(el) {
    //         el.classList.remove('filter-active');
    //       });
    //       this.classList.add('filter-active');
  
    //       portfolioIsotope.arrange({
    //         filter: this.getAttribute('data-filter')
    //       });
    //     }, true);
    //   }
  
    // });
  
    /**
     * Initiate portfolio lightbox 
     */
    const portfolioLightbox = GLightbox({
      selector: '.portfolio-lightbox'
    });
  
    /**
     * Initiate portfolio details lightbox 
     */
    const portfolioDetailsLightbox = GLightbox({
      selector: '.portfolio-details-lightbox',
      width: '90%',
      height: '90vh'
    });
  
    /**
     * Portfolio details slider
     */
    new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  
      /**
     * Initiate Pure Counter 
     */
      new PureCounter();
  
    })()