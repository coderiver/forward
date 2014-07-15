head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	$(".js-select select").on("change",function(){
		var	val = $(this).val();
		$(this).parent().find(".js-select-text").text(val);
	});


	function fotoramaInit() {
	  	var $fotoramaDiv = $('.js-fotorama').on('fotorama:ready', function () {
		    $('.js-fotorama').addClass("is-ready");
		}).fotorama();
	}
	fotoramaInit();

});