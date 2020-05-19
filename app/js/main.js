$(document).ready(function() {
	$('select[name="lang"]').change(function(){
		var lang = this.value;
		if(lang != window.location.pathname){
			window.location.href = lang;
		} 
		
		console.log(lang);
		
	});
	//Sliders
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
	$('.work__fade-slider').slick({
		arrows: false,
		fade: true,
	});



	//radio_btn-color
	$.each($('.work__fade-radio'),function(index, val){
		if($(this).find('input').prop('checked')==true){
			$(this).addclass('active');
		}
	});
	$(document).on('click', '.work__fade-radio', function(e){
		$(this).parents('.work__fade-color-list').find('.work__fade-radio').removeClass('active');
		$(this).parents('.work__fade-color-list').find('.work__fade-radio input').prop('checked', false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked', true);
		return false;

	});



	$('.arrow__top').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	});
})