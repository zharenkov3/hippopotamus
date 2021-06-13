$(document).ready(function() {
	$('.burger').click(function() {
		$('.burger').toggleClass('burger--open');
		$('.page-header').toggleClass('page-header--black-background');
		$('.page-header__nav').toggleClass('open');
	});
});

