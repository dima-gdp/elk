$(document).ready(function () {

	const vkHeight = $(window).width() > '1440' ? '447px' : $(window).width() > '425' ? '397px' : '297px';
	const mobMenu = $('.mob-menu');
	const burger = $('.header__burger');

	function animateSection() {
		let a = $(document).scrollTop() + $(window).height() / 2,
			b = $('.news').offset().top;

		if (a >= b) {
			$('.news__men').removeClass('transform');
		}
	};

	objectFitImages();

	const bg = parseInt($('.bg').css('bottom'));
	const hill = parseInt($('.hill').css('bottom'));
	const girl = parseInt($('.girl').css('bottom'));
	const grime1 = parseInt($('.girl').css('grime1'))
	const grime2 = parseInt($('.girl').css('grime2'))
	const grime3 = parseInt($('.girl').css('grime3'))
	const grime4 = parseInt($('.girl').css('grime4'))

	// var scrollPos = 0;
	// $(window).scroll(function () {
	// 	var st = $(this).scrollTop();
	// 	if (st > scrollPos) {
	// 		console.log('vniz')
	// 	} else {
	// 		console.log('verh')
	// 	}
	// 	scrollPos = st;
	// });

	function parallax() {
		let scrollPos = 0;
		let a = $(document).scrollTop() + $(window).height() / 10,
			b = $('.parallax__container').offset().top;


		if (a >= b) {
			console.log('wefwef')
			let value = $(document).scrollTop() - b;

			if (a > scrollPos) {
				$('.girl').css('bottom', girl + value * 0.25)
				$('.hill').css('bottom', girl - value * 0.05)

			}
			else {
				$('.girl').css('bottom', girl - value * 0.25)
				$('.hill').css('bottom', girl + value * 0.05)
			}


		}

	}

	const slider_first = new Swiper('.first__slider', {

		slidesPerView: 1,
		observer: true,
		observeParents: true,
		loop: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
	});

	$('ul.tabs__list').on('click', 'li:not(.active)', function () {
		$(this).addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__block').removeClass('active').eq($(this).index()).addClass('active');
	})

	VK.Widgets.Group("vk-group", { mode: 4, height: vkHeight, width: 'auto', wide: 1, no_cover: 1 }, 186419904);


	burger.click(function () {
		mobMenu.addClass('active')
	})

	$('.mob-menu__close').click(function () {
		mobMenu.removeClass('active')
	})

	$(document).click(function (ev) {

		if (!ev.target.closest('.header__burger')) {

			if (!ev.target.closest('.mob-menu')) {
				mobMenu.removeClass('active')
			}

		}
	})


	$(".to-modal").on('click', function () {

		$.fancybox.open({
			src: '#modal',
			touch: 'false',
			smallBtn: false,
			buttons: '',
		});

	});

	$("#to-privacy").on('click', function () {

		$.fancybox.open({
			src: '#modal-polit',
			touch: 'false',
			smallBtn: false,
			buttons: '',
		});

	});

	$("#to-privacy-footer").on('click', function () {

		$.fancybox.open({
			src: '#modal-polit',
			touch: 'false',
			smallBtn: false,
			buttons: '',
		});

	});


	$('input[type="tel"]').inputmask({ "mask": "+7 (999)-999-99-99" });


	$(window).on('scroll', animateSection);
	$(window).on('scroll', parallax);

})