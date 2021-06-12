$(document).ready(function() {
	$('.burger').click(function() {
		$('.burger').toggleClass('burger--open');
		$('.page-header__nav').toggleClass('open');
		$('.main-nav').toggleClass('open');
	});
});

