$(document).ready(function () {

	const vkHeight = $(window).width() > '1440' ? '447px' : '400px';
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


	$("#to-modal").on('click', function () {

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

})