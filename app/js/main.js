$(function () {

	var show = true;
	var countbox = ".innumber__inner-item";
	$(window).on("scroll load resize", function () {
			if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
			var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
			var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
			var w_height = $(window).height(); // Высота окна браузера
			var d_height = $(document).height(); // Высота всего документа
			var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
			if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
					$('.innumber__inner-numb').css('opacity', '1');
					$('.innumber__inner-numb').spincrement({
							thousandSeparator: "",
							duration: 2200
					});

					show = false;
			}
	});

});

$(function() {
 
	$(window).scroll(function() {
	 
	if($(this).scrollTop() != 0) {
	 
	$('.toTop').fadeIn();
	 
	} else {
	 
	$('.toTop').fadeOut();
	 
	}
	 
	});
	 
	$('.toTop').click(function() {
	 
	$('body,html').animate({scrollTop:0},800);
	 
	});
	 
	});

$(function(){

	$('.clients__inner-item').slick({
		arrows:false,
		dots:true,
		slidesToShow:4,
		slidesToScroll:4,
	});
	$('.header-menu__btn').on('click',function(){
		$('.header-menu__list').slideToggle();
	});

	$('.header-menu__btn').click(function(){
		$(this).toggleClass('open');
});


	var mixer = mixitup('.works__inner-box');

});


