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

	$('.order-button').magnificPopup({
		type: 'inline',
		showCloseBtn: false,
		removalDelay: 100,
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
	});

	$('.modal-form-close').on('click', function () {
		$.magnificPopup.close();
	});

	$('.gallery-item').magnificPopup({
		type: 'image',
		showCloseBtn: false,
		gallery: { enabled: true },
		callbacks: {
			beforeOpen: function () {
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
	});

	$('.gallery-button a').on('click', function (e) {
		e.preventDefault();
		var galleryItem = $('.gallery-item');

		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$(this).text('Показать еще');
			galleryItem.each(function () {
				if ($(this).hasClass('is-active')) {
					$(this).removeClass('is-active');
					$(this).slideUp();
				}
			});
		}
		else {
			$(this).addClass('is-active');
			$(this).text('Скрыть');
			galleryItem.each(function () {
				if (!$(this).is(':visible')) {
					$(this).addClass('is-active');
					$(this).slideDown();
				}
			});
		}
	});
})