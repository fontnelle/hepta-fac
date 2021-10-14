// Perguntas frequentes - Biometria
var x;
var i = 1;
var perguntas = {
	
	
	// perguntas sobre o título de eleitor

	pergunta_titulo_1: {
		sigla: 'pergunta_titulo_1',
		titulo: 'Documentação Necessária para Efetivação',
		resposta: '<p>Para efetivação do registro, você deverá preencher essa Ficha de Cadastro e anexar cópias digitais dos documentos abaixo relacionados, além de entregar o original do <a href="#Atestado">Atestado Admissional</a> (e laudo PCD, se for o caso) na sede da Hepta*.</p>'+
		'<li>Documento oficial de identidade (Carteira de identidade ou CNH)</li>'+
		'<li>CPF</li>'+
		'<li>Certidão de casamento ou união estável (se for o caso)</li>'+
		'<li>Cartão PIS ou NIT (se tiver)</li>'+
		'<li>Certificado de reservista ou Dispensa do Serviço Militar (se for o caso)</li>'+
		'<li>Título de Eleitor (ou certidão de quitação eleitoral emitida no site do TSE)</li>'+
		'<li>Comprovante de residência</li>'+
		'<li>Certidão de nascimento dos filhos (se for o caso)</li>'+
		'<li>Carteira de vacinação dos filhos menores de 7 anos (se for o caso)</li>'+
		'<li>Declaração semestral de frequência na escola dos filhos, a partir dos 7 anos (se for o caso)</li>'+
		'<li>Em caso PCD, laudo com enquadramento (anexar cópia digital na área de documentos desse formulário e entregar original na empresa)</li>'+
		'<li><a href="#AtestadoMedico">Atestado admissional</a> (anexar cópia digital na área de documentos desse formulário e entregar/enviar original)</li>'+
		'<p>É importante que você já organize os documentos a serem enviados e agende a realização do exame admissional. O prazo para preenchimento e envio da Ficha de Cadastro é de 48 horas.</p>'+
		'<hr>'+
		'<span>* Se você é de outra localidade, pode enviar o Atestado e Laudo pelos Correios e será reembolsado.</span>'
	},
	pergunta_titulo_2: {
		sigla: 'pergunta_titulo_2',
		titulo: 'Atestado Médico Admissional',
		resposta: '<p>No Distrito Federal e São Paulo, os colaboradores devem agendar horário de atendimento na empresa Brasilmed e se apresentar na data agendada portando a Guia de Atendimento. Como a Hepta possui convênio com a Brasilmed, não será cobrado de você nenhum valor pelos serviços de exames médicos. </p>'+
		'<p>Os colaboradores em outras cidades deverão procurar uma clínica especializada e realizar o exame admissional por conta própria. A nota fiscal deste exame deverá ser encaminhada digitalizada para o e-mail  departamentopessoal@hepta.com.br para que seja feito o reembolso imediato.</p>'+
		'<h4>IMPORTANTE: O ATESTADO MÉDICO ADMISSIONAL é documento obrigatório, não sendo possível proceder com a contratação sem a sua apresentação.</h4>'+
		'<h3>Agendando o seu exame com a Brasilmed</h3>'+
		'<p>Entre em contato com a Brasilmed para agendar o exame na unidade de sua preferência.</p>'+
		'<li>São Paulo: (11) 3042-6141</li>'+
		'<li>Brasília: (61) 3574-7600</li>'+
		'<li>Site da Brasilmed: <a href="http://www.brasilmed.com.br" alt="Acessar site">www.brasilmed.com.br</a></li>'+
		'<li>SAC: <a href="mailto:sac@brasilmed.com.br" alt="e-mail Brasilmed">sac@brasilmed.com.br</a></li>'
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
	},
	pergunta_titulo_8: {
		sigla: 'pergunta_titulo_8',
		titulo: 'vamos que vamos',
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




