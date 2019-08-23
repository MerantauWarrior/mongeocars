$(document).ready(function() {

	var nav = $('.header__menu');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});
	
	$('.akkordeon__item__link').click(function(e){
		e.preventDefault();
		$('.akkordeon__item__link').removeClass('active');
		$(this).addClass('active');
	});

	$("a[href*='#']").mPageScroll2id({offset:51});
	
	$('.mob_menu-h').click(function(){
		$('.header__menu__list').toggleClass('active');
	});

	var owl = $("#owl-slider");
	owl.owlCarousel({
		autoPlay: 3000,
		navigation : false,
		stopOnHover: false,
		pagination: true,
		items : 1, //10 items above 1000px browser width
		itemsDesktop : [1024,1], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,1], // betweem 900px and 601px
		itemsTablet: [767,1], //2 items between 600 and 0
		itemsMobile : [480,1] // itemsMobile disabled - inherit from itemsTablet option
	});
	$(".slider_control.left").click(function(){
    owl.trigger('owl.prev');
  })
  $(".slider_control.right").click(function(){
		owl.trigger('owl.next');
  })
		
})