$(document).ready(function() {

	$('.gallery__inner').slick({
		arrows: true,
		dots: true,
	});
	$('.reviews__items').slick({
		arrows: true,
		fade: true,
		asNavFor: '.reviews__comments',
	});
	$('.reviews__comments').slick({
		arrows: false,
		fade: true,
		asNavFor: '.reviews__items',
	});
})