// Perguntas frequentes - Biometria
var x;
var i = 1;
var perguntas = {
	
	
	// perguntas sobre o título de eleitor

	pergunta_titulo_1: {
		sigla: 'pergunta_titulo_1',
		titulo: 'Quem precisa cadastrar?',
		resposta: '<p>Todos os colaboradores devem inserir certificações, exames e provas, independente da área ou tema.</p><p>Somos uma empresa de TI, logo teremos muitas certificações/exames nesta área, mas também contamos com profissionais formados nas mais diversas áreas que também são importantes e devem ser inseridas no módulo de certificações e exames.</p>'
	},
	pergunta_titulo_2: {
		sigla: 'pergunta_titulo_2',
		titulo: 'O que deve ser cadastrado?',
		resposta: '<p>Toda e qualquer certificação e exames.</p> <p> Todos os exames/provas e certificações dos diferentes fornecedores (AWS, Microsoft, Citrix, HDI, etc) devem ser inseridos no sistema. Lembre-se que algumas provas são utilizadas para mais de uma certificação, por isso, é muito importante que o colaborador cadastre todos os exames/provas que fez e, também as certificações.</p> <p>Não se preocupe se o exame/prova ou a certificação que você fez não estiver na lista. Clique aqui para indicar o cadastro e a Academia Hepta irá te informar quando estiver disponível.</p>'+
		'<span class="tags">Tags: título anulado, título revogado, título inválido, título suspenso, título com problema.</span>'
	},
	pergunta_titulo_3: {
		sigla: 'pergunta_titulo_3',
		titulo: 'Devo cadastrar certificações e exames técnicos que foram descontinuados?',
		resposta: '<p>Sim. Mesmo que você tenha alguma certificação ou exame que foram descontinuados ou perderam a validade, devem ser cadastradas pois consideramos que elas também são relevantes para a compreensão do processo de aprendizagem do nosso colaborador. </p>'
	},
	pergunta_titulo_4: {
		sigla: 'pergunta_titulo_4',
		titulo: 'Minha certificação ou exame não está na lista, o que fazer? Não encontrei na lista do módulo o que procurava?',
		resposta: '<p>Não se preocupe se o curso, certificação ou exame que você fez não estiver na lista. Como falamos, o sistema está em constante evolução e basta clicar aqui para indicar seu certificado que a Academia Hepta irá cadastrar e te informar quando estiver disponível. </p>'
	},
	pergunta_titulo_5: {
		sigla: 'pergunta_titulo_5',
		titulo: 'Não tenho nenhuma certificação ou exame para cadastrar',
		resposta: '<p>Isso significa que o seu cadastro está atualizado, portanto, clique no botão <strong>“Confirmar que não tenho certificações no momento”</strong>. Essa informação também é muito importante para traçarmos as melhores práticas e trilhas de aprendizagem para o crescimento profissional do nosso <strong>#capitalhumano</strong>.</p>'
	},
	pergunta_titulo_6: {
		sigla: 'pergunta_titulo_6',
		titulo: 'Quando devo fazer o cadastro de certificações e exames?',
		resposta: '<p>Sempre que for aprovado em um exame ou tirar uma certificação deve realizar o cadastro, dessa forma, você mantém seus dados atualizados.</p>'
	},
	pergunta_titulo_7: {
		sigla: 'pergunta_titulo_7',
		titulo: 'Conhecendo o formulário',
		resposta: '<p>Em certificação/Exame, ao começar a digitar pelo termo da certificação ou exame irá aparecer uma lista para que você encontre mais rápido o que procura.</p>'+
		'<p><img src="assets/img/img-1.png" alt="formulário do sistema"></p>'+
		'<p>Se você não encontrar sua prova ou certificação na lista, basta clicar no link disponível na parte inferior do cadastro e preencher o formulário com os dados solicitados. Em <strong>documento, anexe o arquivo da certificação ou exame cadastrado</strong>. O sistema aceita arquivo em <strong>PDF com limite de tamanho de até 1GB</strong>.</p>'+
		'<img src="assets/img/img-2.png" alt="imagem do anexo até  1gb">'+
		'<p>Por fim, informe a data de emissão e data de validade do exame ou certificação. Antes de clicar em ENVIAR, verifique se todos os dados estão corretos. Se mudar de ideia e quiser cadastrar em outro momento é só cancelar ou sair da página.</p>'
	}


}

// MONTANDO AS SECOES

function montar_unidades() {

	for (x in perguntas) {

		pergunta = '<div class="card-header">' +
			'<h3 data-toggle="collapse" data-target="#' + perguntas[x].sigla + '">' +
			perguntas[x].titulo +
			'</h3>' +
			'</div>' +
			'<div id="' + perguntas[x].sigla + '" class="collapse">' +
			'<div class="card-body">' +
			perguntas[x].resposta +
			'</div>' +
			'</div>';


		str1 = "#estrutura_";
		str2 = ".estrutura_";

		$(sigla = str1.concat(perguntas[x].sigla.toLowerCase())).prepend(pergunta);

		str1 = "#estrutura_";

		$(sigla2 = str2.concat(perguntas[x].sigla.toLowerCase())).prepend(pergunta);

	}
}

montar_unidades();




