$(document).ready(function () {

	const vkHeight = $(window).width() > '1440' ? '447px' : '400px'

	objectFitImages();

	$('ul.tabs__list').on('click', 'li:not(.active)', function () {
		$(this).addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__block').removeClass('active').eq($(this).index()).addClass('active');
	})

	VK.Widgets.Group("vk-group", { mode: 4, height: vkHeight, width: 'auto', wide: 1, no_cover: 1 }, 186419904);



	function animateSection() {
		let a = $(document).scrollTop() + $(window).height() / 2,
			b = $('.news').offset().top;

		if (a >= b) {
			$('.news__men').removeClass('transform');
		}
	};

	$(window).on('scroll', animateSection);

})