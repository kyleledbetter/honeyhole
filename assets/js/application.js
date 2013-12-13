
$(function(){
    // smooth scroll
    $("a[href^='#']").on('click', function(e) {
	   // e.preventDefault();
	   $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 300);
	});

	// sidebar Toggle
	$(".sidebar-toggle,.sidebar .contact-toggle").click(function(){
		$(".sidebar").toggleClass("active");
		$(".content").toggleClass("content-sidebar");
		$("body").toggleClass("body-sidebar");
		$(".header").toggleClass("header-sidebar");
		return false;
	});
	$('.sidebar').bind('clickoutside', function (event) {
		$(".sidebar").removeClass("active");
	});
	// aside Toggle
	$(".aside-toggle,.contact-toggle").click(function(){
		$(".aside").toggleClass("active");
		$(".content").toggleClass("content-aside");
		$("body").toggleClass("body-aside");
		$(".header").toggleClass("header-aside");
		return false;
	});
	$('.aside').bind('clickoutside', function (event) {
		$(".aside").removeClass("active");
	});
	// Activate tooltip
    $("[data-toggle='tooltip']").tooltip();
});
$(document).ready(function() {
     $('.collabo img').addClass('animate');
});