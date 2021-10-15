// Perguntas frequentes - Biometria
var x;
var i = 1;
var perguntas = {


	// perguntas sobre o título de eleitor

	pergunta_titulo_1: {
		sigla: 'pergunta_titulo_1',
		titulo: 'Documentação Necessária para Efetivação',
		class: 'teste',
		resposta: '<p>Para efetivação do registro, você deverá preencher essa Ficha de Cadastro e anexar cópias digitais dos documentos abaixo relacionados, além de entregar o original do <a href="#Atestado">Atestado Admissional</a> (e laudo PCD, se for o caso) na sede da Hepta*.</p>' +
			'<li>Documento oficial de identidade (Carteira de identidade ou CNH)</li>' +
			'<li>CPF</li>' +
			'<li>Certidão de casamento ou união estável (se for o caso)</li>' +
			'<li>Cartão PIS ou NIT (se tiver)</li>' +
			'<li>Certificado de reservista ou Dispensa do Serviço Militar (se for o caso)</li>' +
			'<li>Título de Eleitor (ou certidão de quitação eleitoral emitida no site do TSE)</li>' +
			'<li>Comprovante de residência</li>' +
			'<li>Certidão de nascimento dos filhos (se for o caso)</li>' +
			'<li>Carteira de vacinação dos filhos menores de 7 anos (se for o caso)</li>' +
			'<li>Declaração semestral de frequência na escola dos filhos, a partir dos 7 anos (se for o caso)</li>' +
			'<li>Em caso PCD, laudo com enquadramento (anexar cópia digital na área de documentos desse formulário e entregar original na empresa)</li>' +
			'<li><a href="">Atestado admissional</a> (anexar cópia digital na área de documentos desse formulário e entregar/enviar original)</li>' +
			'<p>É importante que você já organize os documentos a serem enviados e agende a realização do exame admissional. O prazo para preenchimento e envio da Ficha de Cadastro é de 48 horas.</p>' +
			'<hr>' +
			'<span>* Se você é de outra localidade, pode enviar o Atestado e Laudo pelos Correios e será reembolsado.</span>'
	},
	pergunta_titulo_2: {
		sigla: 'pergunta_titulo_2',
		titulo: 'Atestado Médico Admissional',
		resposta: '<p>No Distrito Federal e São Paulo, os colaboradores devem agendar horário de atendimento na empresa <a href="https://brasilmed.com.br/" target="_blank" alt="Brasilmed">Brasilmed</a> e se apresentar na data agendada portando a <a href="#" alt="Guia de Atendimento">Guia de Atendimento</a>. Como a Hepta possui convênio com a Brasilmed, não será cobrado de você nenhum valor pelos serviços de exames médicos. </p>' +
			'<p>Os colaboradores em outras cidades deverão procurar uma clínica especializada e realizar o exame admissional por conta própria. A nota fiscal deste exame deverá ser encaminhada digitalizada para o e-mail  <a href="mailto:departamentopessoal@hepta.com.br" alt="departamentopessoal@hepta.com.br">departamentopessoal@hepta.com.br</a> para que seja feito o reembolso imediato.</p>' +
			'<p><strong>IMPORTANTE: O ATESTADO MÉDICO ADMISSIONAL é documento obrigatório, não sendo possível proceder com a contratação sem a sua apresentação.</strong></p>' +
			'<h4>Agendando o seu exame com a Brasilmed</h4>' +
			'<p>Baixe a <a href="#GuiaBrasilmed" alt="Guia de Atendimento da Brasilmed">Guia de Atendimento da Brasilmed</a>, preencha com os seus dados, imprima e assine.</p>'+
			'<p>Entre em contato com a Brasilmed para agendar o exame na unidade de sua preferência.</p>' +
			'<li>São Paulo: (11) 3042-6141</li>' +
			'<li>Brasília: (61) 3574-7600</li>' +
			'<li>Site da Brasilmed: <a href="http://www.brasilmed.com.br" target="_blank" alt="Acessar site">www.brasilmed.com.br</a></li>' +
			'<li>SAC: <a href="mailto:sac@brasilmed.com.br" alt="e-mail Brasilmed">sac@brasilmed.com.br</a></li>'
	},
	pergunta_titulo_3: {
		sigla: 'pergunta_titulo_3',
		titulo: 'Pagamentos',
		resposta: '<p>Conforme dispõe o art. 459, §1º da CLT, o pagamento de seus salários será realizado até o 5º dia útil do mês. Quaisquer eventos diferentes, avisaremos a todos com antecedência por meio dos canais de comunicação interna.</p>' +
			'<h4>Banco do Brasil</h4>' +
			'<p>Seu salário mensal será pago exclusivamente via Banco do Brasil. Caso não possua conta corrente ou salário neste banco, esta será criada pela Hepta. Para saber mais, acesse <a href="https://www.bb.com.br/pbb/pagina-inicial/voce/produtos-e-servicos/contas/conta-aberta-por-sua-empresa#/" target="_blank" alt="Conta aberta por sua empresa">Conta aberta por sua empresa</a> no site do Banco do Brasil. Se você já tem conta no Banco do Brasil, basta informar os dados. </p>' +
			'<h4>O que é conta salário?</h4>' +
			'<p>A conta salário é uma modalidade sem custos, onde é fornecido cartão que permite exclusivamente realizar saque, nenhuma outra movimentação. </p>' +
			'<p>Se você já tem conta corrente em outra instituição bancária, deverá informar ao Banco do Brasil seu desejo de transferir automaticamente os créditos que caírem na conta salário para a conta indicada.</p>' +
			'<p>Para saber mais e tirar dúvidas, acesse as <a href="https://www.bcb.gov.br/acessoinformacao/perguntasfrequentes-respostas/faq_contasalario_portabilidade" target="_blank" alt="Perguntas e Respostas sobre Conta Salário e Portabilidade Salarial">Perguntas e Respostas sobre Conta Salário e Portabilidade Salarial</a> no site do Banco Central do Brasil. </p>'

	},
	pergunta_titulo_4: {
		sigla: 'pergunta_titulo_4',
		titulo: 'Benefícios',
		resposta: '<p>Todos os benefícios são pagos de acordo com a legislação e com Acordo/CCT da cidade na qual você está alocado.</p>' +
			'<h4>Vale transporte</h4>' +
			'<p>Como previsto na legislação (<a href="https://www.planalto.gov.br/ccivil_03/LEIS/L7418.htm" target="_blank" alt="Lei nº 7.418/85">Lei nº 7.418/85</a> e <a href="https://www.planalto.gov.br/ccivil_03/decreto/d95247.htm" target="_blank" alt="Decreto nº 95.247/87">Decreto nº 95.247/87</a>) será descontado 6% de seu salário bruto, ou até o limite do valor disponibilizado, de quem fizer a opção pelo Vale Transporte. Por exemplo, se 6% do seu salário equivale a R$ 180,00 e o valor de seu vale transporte for apenas R$ 120,00, o desconto será de apenas R$ 120. Porém, se o valor de seu vale transporte for R$ 190,00, será feito o desconto de R$ 180 (6% do salário).</p>' +
			'<h4>Vale Restaurante / Vale Alimentação</h4>' +
			'<p>O benefício e seus respectivos descontos seguirão o disposto no Acordo e/ou Convenção Coletiva de Trabalho de sua localidade (cidade e/ou estado).</p>' +
			'<p>A Hepta tem contrato com a empresa Ticket, que solicita um prazo de – em média – 10 dias úteis após a primeira solicitação para a entrega do cartão na sede da empresa.</p>' +
			'<p>A primeira solicitação só pode ocorrer após o seu registro legal na empresa, então é preciso considerar esse prazo de 10 dias úteis e acrescentar o prazo para envio do mesmo por correio ou transportadora, no caso de outras localidades. </p>' +
			'<p>Mensalmente este cartão será carregado com créditos até o dia 30. A opção pelo "Vale Restaurante" lhe permitirá utilizar o cartão em restaurantes ou lanchonetes, onde servem alimentos prontos. O "Vale Alimentação" é utilizado principalmente para compras em redes de supermercados.</p>' +
			'<h4>Plano de saúde</h4>' +
			'<p>A Hepta tem contrato com a Amil para fornecer Plano de Saúde Coletivo Empresarial para seus colaboradores. O benefício e seus respectivos descontos seguirão o disposto no Acordo e/ou Convenção Coletiva de Trabalho de sua localidade (cidade e/ou estado).</p>' +
			'<p>Até 30 dias após a admissão a inclusão do plano de saúde é feita sem carência, após essa data a inclusão já é feita com carência. O plano de saúde padrão é o AMIL S450 QC (Quarto Coletivo), sendo que os percentuais de participação patronal (Hepta) e funcional (funcionário) variam de acordo com o acordo/convenção coletiva de trabalho de cada localidade. </p>' +
			'<p>Também é oferecida ao colaborador a opção de adesão a planos superiores, sendo que nesse caso irá pagar integralmente a diferença de valor entre o plano escolhido e o plano padrão AMIL S450 QC.</p>' +
			'<p><img class="img-fluid" src="assets/img/tabela-plano-saude.png"></p>' +
			'<p>Importante lembrar que:</p>' +
			'<li><strong>Não mais existe carteira física para Plano de Saúde e Plano Dental</strong></li>' +
			'<li>Por definição da Agência Nacional de Saúde (ANS), para planos coletivos empresariais são considerados como dependentes apenas o cônjuge e filhos.</li>' +
			'<li>A Hepta paga o Plano de Saúde de forma antecipada, no início de cada mês, e desconta de seus empregados de forma retroativa, ou seja, somente quando do pagamento do salário no mês seguinte. Sendo assim, em caso de afastamento, será feito o ajuste de valores necessário.</li>' +
			'<li><strong>O empregado afastado por alguma enfermidade que passar a receber Auxílio Doença do INSS continuará usufruindo do Plano de Saúde, juntamente com seus dependentes legais, sendo responsável por arcar com o pagamento de sua parte cabível (O Pagamento do plano de saúde será feito em depósito na conta da Hepta).</strong></li>' +
			'<h4>Plano Dental</h4>' +
			'<p>Além do plano de saúde, o colaborador Hepta também pode aderir ao plano odontológico <a href="https://www.amildental.com.br/" target="_blank" alt="Amil Dental">AMIL Dental</a>. O custo mensal deste plano é descontado integralmente no salário de acordo com a tabela abaixo:</p>' +
			'<p><img class="img-fluid" src="assets/img/plano-odonto.png" alt="Plano Odontológico"></p>'
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

