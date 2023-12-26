document.addEventListener('DOMContentLoaded', () => {
	const bannerSwiper = new Swiper('.banner-swiper', {
		// Optional parameters
		speed: 1000,
		spaceBetween: 0,
		direction: 'horizontal',
		loop: true,

		// If we need pagination
		pagination: {
			el: '.banner-swiper .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.banner-swiper .swiper-button-next',
			prevEl: '.banner-swiper .swiper-button-prev',
		},
	});
})