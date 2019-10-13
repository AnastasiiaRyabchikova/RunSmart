$(document).ready(function () {
    $('.gallery-main').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="gallery-main__prev arrow arrow_prev"></button>',
        nextArrow: '<button type="button" class="gallery-main__next arrow arrow_next"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false
              }
            }
          ]
    });

    $('.tab-titles').on('click', '.tab-title:not(.tab-title_active)', function(){
      $(this).addClass('tab-title_active').siblings().removeClass('tab-title_active')
      .closest('.container').find('.tab-content').removeClass('tab-content_active').eq($(this).index()).addClass('tab-content_active');
    });

    $('.good-item__more, .good-item__back').on('click', function(e){
      e.preventDefault();
      $(this).closest('.good-item__body').toggleClass('good-item__body_active');
    });

    $("[data-modal]").on('click', function(){
      var modalID = "#" + $(this).attr("data-modal");
      $(".overlay, " + modalID).fadeIn();
    });

    $('[data-modal="custom-order"]').on('click', function(){
      var title = $(this).closest('.good-item').find('.good-item__title').text(),
          modalID = "#" + $(this).attr("data-modal");

      $(modalID).find('.modal__descr').text(title);

    });

    $('[data-close]').on('click', function(){
      $(this).closest('.modal').fadeOut();
      $('.overlay').fadeOut();
    })


    
});