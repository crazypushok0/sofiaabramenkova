
$(document).ready(function() {
	$('select[name="lang"]').change(function(){
		var lang = this.value;
		if(lang != window.location.pathname){
			window.location.href = lang;
		} 
	});
	$('a[href*="#"]:not([href="#"]').click(function() {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 600);
		return false;
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


	$('.work__item').click(function (e) {
		let modalWork = $('.work__fade');
		let workTitle = $(this).find('.work__name').text();
		let workSize = $(this).find('.work__size').html();
		let workDesc = $(this).find('.work__description').text();
		let workPrice = $(this).find('.work__price').text();
		modalWork.find('.work__fade-title').text(workTitle);
		modalWork.find('.work__fade-size span').html(workSize);
		modalWork.find('.work__fade-description').text(workDesc);
		modalWork.find('.work__fade-price').text(workPrice);
		$('.work__fade-wrapper').addClass('active');;
		$('body').css('overflow', 'hidden');
		return false;
	});
	$('.btn-close').click(function(e) {
		e.preventDefault();
		$('.work__fade-wrapper').removeClass('active');
		$('.work__item').removeClass('active');
		$('body').css('overflow', '');
		return false;

	});
	// modal master-class
	$('.master-class__item').click(function(e) {
		let modalMaster = $('.master-class__fade');
		let masterTitle = $(this).find('.master-class__name').text();
		let masterName = $(this).find('.master-class__parameters--name').text();
		let masterFormat = $(this).find('.master-class__parameters--format').text();
		let masterCons = $(this).find('.master-class__parameters--consumption').text();
		let masterSize = $(this).find('.master-class__parameters--size').text();
		let masterHook = $(this).find('.master-class__parameters--hook').text();
		let masterPrice = $(this).find('.master-class__price').text();
		modalMaster.find('.master-class__fade-title').text(masterTitle);
		modalMaster.find('.master-class__fade-name span').text(masterName);
		modalMaster.find('.master-class__fade-format span').text(masterFormat);
		modalMaster.find('.master-class__fade-consumption span').text(masterCons);
		modalMaster.find('.master-class__fade-size span').text(masterSize);
		modalMaster.find('.master-class__fade-hook span').text(masterHook);
		modalMaster.find('.master-class__fade-price').text(masterPrice);
		$('.master-class__fade-wrapper').addClass('active');;
		$('body').css('overflow', 'hidden');
		return false;
	});
	$('.master-class__btn-close').click(function(e) {
		e.preventDefault();
		$('.master-class__fade-wrapper').removeClass('active');
		$('.master-class__item').removeClass('active');
		$('body').css('overflow', '');
	});

	// // Индивидуальный заказ модальное окно
	$('.individual-order__link').click(function(e) {
		e.preventDefault();
		$('#modal-individual').addClass('active');
		$('body').css('overflow', 'hidden');
		return false;
	});

		// Индивидуальный заказ модальное окно
		$('.modal-individual__form button').submit(function() {
			$('.modal-individual-win').reveal();;
		});

	// baskets
	$('.top-line__baskets').click(function(e){
		e.preventDefault();
		$('.baskets-fade__wrapper').addClass('active');
		$('.baskets-fade__inner').addClass('active');
		$('body').addClass('lock');
	});
	$('.baskets-fade__btn-close').click(function(e){
		e.preventDefault();
		$('.baskets-fade__wrapper').addClass('active');
		$('.baskets-fade__inner').removeClass('active');
		$('body').removeClass('lock');
	});
	$('.top-line__btn-menu').click(function(e){
		e.preventDefault();
		$('.header').addClass('active');
		$('body').css('overflow', 'hidden');
	});
	$('.header__btn-close').click(function(e){
		e.preventDefault();
		$('.header').removeClass('active');
		$('body').css('overflow', '');
	});
});

document.querySelector('.work__fade-wrapper').addEventListener('click', function (event) {
	if(!event.target.closest('.work__fade')){
		document.querySelector('.work__fade-wrapper').classList.remove('active');
		document.querySelector('.work__item').classList.remove('active');
		document.body.style.overflow = '';
	}
});
document.querySelector('.master-class__fade-wrapper').addEventListener('click', function (event){
	if(!event.target.closest('.master-class__fade')){
		document.querySelector('.master-class__fade-wrapper').classList.remove('active');
		document.querySelector('.master-class__item').classList.remove('active');
		document.body.style.overflow = '';
	}
});
document.querySelector('.modal-individual').addEventListener('click', function (event){
	if(!event.target.closest('.modal-individual__inner')){
		document.querySelector('.modal-individual').classList.remove('active');
		document.body.style.overflow = '';
	}
});
document.querySelector('.header').addEventListener('click', function (event){
	if(!event.target.closest('.header__inner')){
		document.querySelector('.header').classList.remove('active');
		document.body.style.overflow = '';
	}
});
document.addEventListener('mouseup', function (event){
	if(!event.target.closest('.baskets-fade')){
		document.querySelector('.baskets-fade__inner').classList.remove('active');
		document.body.classList.remove('lock');
	}
});