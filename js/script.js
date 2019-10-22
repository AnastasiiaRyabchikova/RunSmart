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
    });

    //$('form').each(function(item){
    //  console.log(item);
    //  $(item).validate();
    //});

    function formValidation(elem){
      $(elem).validate({
        rules:{
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: {
            required: true,
            email: true
          },
        },
        messages: {
          name: {
            required: "Пожалуйста, введите свое имя",
            minlength: jQuery.validator.format("Введите не менее {0} символов!"),
          },
          phone: "Пожалуйста, введите свой номер телефоана",
          email: {
            required: "Пожалуйста, введите свою почту",
            email: "Неправильно введен адрес почты"
          },
        }
      });
    }

    formValidation('#form-consultation');
    formValidation('#form-consultation-popap');
    formValidation('#form-buy');

    $('[name="phone"]').mask("+7(999)99-99-999");

    $('form').submit(function(e){
      var form = this;
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(form).serialize()
      }).done(function(){
        $(form).find("input").val("");
        $(form).closest('.modal').fadeOut();
        $("#gratitude").fadeIn();
        $('form').trigger('reset');
        
      });
      return false;
    });

    $(window).on('scroll', function(){
      if( $(window).scrollTop() > 100 ){
        $(".btn-up").fadeIn();
      } else {
        $(".btn-up").fadeOut();
      }
    });

     $(".btn-up").on("click", function(){
      $('body,html').animate({scrollTop:0},800);
     });

    
});