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

	const bg = parseInt($('.bg-2').css('bottom'));
	const hill = parseInt($('.hill').css('bottom'));
	const girl = parseInt($('.girl').css('bottom'));
	const grime1 = parseInt($('.grime-1').css('top'))
	const grime2 = parseInt($('.grime-2').css('top'))
	const grime4 = parseInt($('.grime-3').css('top'))


	function parallax() {
		let scrollPos = 0;
		let offsetScroll = $(document).scrollTop() + $(window).height() / 3,
			offsetBlock = $('.parallax__block').offset().top;

		if (offsetScroll >= offsetBlock && offsetScroll < offsetBlock + $(window).height() / 1.2) {

			let value = $(document).scrollTop() - offsetBlock;
			let ratio = 1;

			if ($(window).width() < 1410) {
				ratio = $(window).width() / 1410
			}

			if (offsetScroll > scrollPos) {
				$('.girl').css('bottom', girl + value * 0.1 * ratio)
				$('.bg-2').css('bottom', bg + value * 0.13 * ratio)
				$('.hill').css('bottom', hill - value * 0.12 * ratio)
				$('.grime-2').css('top', grime2 - value * 0.3 * ratio)
				$('.grime-1').css('top', grime1 + value * 0.25 * ratio)
				$('.grime-4').css('top', grime4 + value * 0.2 * ratio)

			}
			else {
				$('.girl').css('bottom', girl - value * 0.1 * ratio)
				$('.bg-2').css('bottom', bg - value * 0.13 * ratio)
				$('.hill').css('bottom', hill + value * 0.12 * ratio)
				$('.grime-2').css('top', grime2 + value * 0.3 * ratio)
				$('.grime-1').css('top', grime1 - value * 0.25 * ratio)
				$('.grime-4').css('top', grime4 - value * 0.2 * ratio)
			}
		}

	}


	// Ширина блоков с логотипами
	const partnersRow = $('.partners__row');
	partnersRow.each(function(i, el){
		let maxWidth = 0;

		$(el).find('.partners__moving-block').each(function(i, el){
			if ($(el).innerWidth() > maxWidth){
				maxWidth = $(el).innerWidth()
			}
		})

		$(el).find('.partners__moving-block').css('min-width', `${maxWidth}px`);
		$(el).find('.partners__moving-block--helper').css('left', `${maxWidth}px`);
	})
	

	const slider_first = new Swiper('.first__slider', {

		slidesPerView: 1,
		observer: true,
		observeParents: true,
		loop: false,
		breakpoints: {
			577: {
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true
				},
			}
		}
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