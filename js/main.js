$(document).ready(function() {


   $('.main-header__icon-menu-bars').click(function(){
		$('.main-header').toggleClass('open-block');
	});

   $('.left-asside__open-btn').click(function(){
    $('.left-asside__content').toggleClass('active');
  });

    $('.right-asside__open-btn').click(function(){
    $('.right-asside__content').toggleClass('active');
  });


   $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 40;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

  var topPos = $('#floating').offset().top - 40;

  $(window).scroll(function() { 
      var top = $(document).scrollTop(),
          pip = $('footer').offset().top,
          height = $('#floating').outerHeight();
          
      if (top > topPos && top < pip - height) {
        $('#floating').addClass('fixed').removeAttr("style");
      } else if (top > pip - height) {
        $('#floating').removeClass('fixed').css({'position':'absolute','bottom':'0'});
      } else {
        $('#floating').removeClass('fixed').removeAttr("style");
      }
      if(window.matchMedia('(max-width: 1024px)').matches && top > pip - height) {
        $('#floating').removeClass('fixed').css({'position':'absolute','bottom':'0','width' : '20%'});
      }
      if(window.matchMedia('(max-width: 876px)').matches && top > pip - height) {
        $('#floating').removeClass('fixed').css({'position':'absolute','bottom':'0','width' : '27.9%'});
      }

      if(window.matchMedia('(max-width: 670px)').matches && top > topPos && top < pip - height) {
        $('#floating').removeClass('fixed').removeAttr("style");
      }
  });
});

 
