$(document).ready(function () {
	$("#pesquisar").keyup(function () {
		var stringPesquisa = $(this).val();
		$('.geral_perguntas div').parent().hide();
		$('.geral_perguntas div:contains(' + stringPesquisa + ')').parent().show()
	});


	//Abrir cards quando clicar no 'menu'
	(function () {
		$(".ancoras a").on('click', function () {
			$("#accordion .card .collapse").removeClass("show");
			var ancora = $(this).attr("href").split("#")[1];
			$("#" + ancora).next("div").find(".collapse").addClass("show ativo");
		});
	})();

});