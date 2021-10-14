$(document).ready(function () {
	$("#pesquisar").keyup(function () {
		var stringPesquisa = $(this).val();
		$('.geral_perguntas div').parent().hide();
		$('.geral_perguntas div:contains(' + stringPesquisa + ')').parent().show()
	});

});