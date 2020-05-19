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
	$('.work__fade-slider, .master-class__fade-slider').slick({
		arrows: true,
		dots:true,
		fade: true,
	});



	//radio_btn-color

	$.each($('.work__fade-radio'), function(index, val) {
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.work__fade-radio', function(event) {
		$(this).parents('.work__fade-color-list').find('.work__fade-radio').removeClass('active');
		$(this).parents('.work__fade-color-list').find('.work__fade-radio input').prop('checked',false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked',true);
		return false;
	});


	$('.arrow__top').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	});


	// modal works
	$('.work__item').click(function(e) {
		var work = $(this).attr('data-work');
		$('[data-work='+ work+ ']').addClass('active');;
		$('body').addClass('lock');
		return false;

	});
	$('.btn-close').click(function(e) {
		e.preventDefault();
		var work = $(this).parents('.work__fade-wrapper').attr('data-work');
		$(this).parents('[data-work='+ work+ ']').removeClass('active');
		$('body').removeClass('lock');
		return false;
	});
	$('.work__fade-wrapper').click(function(e) {
		if ($(e.target).closest('.work__fade').length == 0) {
			$(this).removeClass('active');
			$('body').removeClass('lock');					
		}
	});
	// modal master-class
	$('.master-class__item').click(function(e) {
		var master = $(this).attr('master-class');
		$('[master-class='+ master+ ']').addClass('active');;
		$('body').addClass('lock');
		console.log(master);
		return false;

	});
	$('.master-class__btn-close').click(function(e) {
		e.preventDefault();
		var master = $(this).parents('.master-class__fade-wrapper').attr('master-class');
		$(this).parents('[master-class='+ master+ ']').removeClass('active');
		$('body').removeClass('lock');
		return false;
	});
	$('.master-class__fade-wrapper').click(function(e) {
		if ($(e.target).closest('.master-class__fade').length == 0) {
			$(this).removeClass('active');
			$('body').removeClass('lock');					
		}
	});

	// Индивидуальный заказ модальное окно
	$('.individual-order__link').click(function(e) {
		e.preventDefault();
		$('#modal-individual').addClass('active');
		$('body').addClass('lock');
	});
		$('#modal-individual').click(function(e) {
		if ($(e.target).closest('.modal-individual__inner').length == 0) {
			$(this).removeClass('active');
			$('body').removeClass('lock');					
		}
	});
		// Индивидуальный заказ модальное окно
	$('.modal-individual__form button').submit(function() {
		$('.modal-individual-win').reveal();;
	});
})