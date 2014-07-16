head.ready(function() {

	$(document).on("click", function(){
		$(".js-select").removeClass("is-active");
	});

	$(".js-select select").on("change",function(event){
		var	val = $(this).val();
		$(this).parent().find(".js-select-text").text(val);
		event.stopPropagation();
	});

	$(".js-select").on("click",function(event){
		$(this).toggleClass("is-active");
		event.stopPropagation();
	});

	function fotoramaInit() {
	  	var $fotoramaDiv = $('.js-fotorama').on('fotorama:ready', function () {
		    $('.js-fotorama').addClass("is-ready");
		}).fotorama();
	}
	fotoramaInit();

});