const { SlashCommandBuilder } = require('@discordjs/builders');

var frases = [
	"passei para comprar o brinquedao",
	"o brinquedao é pika",
	"eu peguei ele de costa",
	"so vi o bagulho subindo",
	"eu queria saber onde tava enfiando a boca",
	"tive que ir pra luz pra meter a boca",
	"era de 30cm",
	"era grossa pra kct e muito boa",
	"era duro pra karaleo",
	"peguei a porra inteira",
	"ela bateu na bola",
	"voce esta colocando na minha boca",
	"estou brincando com a boca rsrs",
	"deve ser grosso o bagulho dele",
	"Mostra a bolinha, mostra a bolinha,, Mostra a bolinha,  glub glub",
	"o que fez com a minha bunda jamais podera ser revertido",
	" cade o bagulho do jhon?",
	"jhon senta no sofa  e pega o taco, que eu apago a luz",
	"Mostra a bolinha, mostra a bolinha,, Mostra a bolinha,  glub glub",
	"'manda a foto de novo, mas retinha pra ficar mais bonito",
	"gosto de peru de diferentes tamanhos",
	"' As vezes é duro também.",
	"vocês estão descendo, chupando divagarinho",
	"' Eu levei você pro chuveiro, por que você não pode me levar junto?",
	"' Por que você ta falando baixo?",
	"AAAIIII,",
	"Ta enfiando a vara no ouvido.",
	"AIIIAIAIII, NOSSA, CARALHO, faz uma massagem",
	"AI MINHA BOLA, AI AI AI, DEU UMA PUCHADA NELA",
	"O dedo dele é grosso",
	"tomo tudo que vier, só ir socando,  socando que aguento",
	"os cara ficou metendo, metendo e metendo essa porra",
	"os cara entregou bilhetinho pra ir pro puteiro ",
	"quer deitar comigo? vou deitar com vc",
	"tomei uma picada do médico, e era grossa",
	"tomei 15 rolada.",
	"E essa música?",
	"Parece aquelas que toca quando ta no puteiro",
	"Eu apanho, eu apanho..",
	"Inclusive para o Paulo, ele vai me bater segunda, rs.",
	"Paulo vai enfiar o paulo junior em mim amanhã",
	"Depende do dedo do cara",
	"O dele é fino e o meu é grosso.",
	"que volume é esse embaixo da coberta?",
	"O cara me pegou de quatro, foi na moita",
	"Eu quero tomar no cuzinho",
	"quero a sensação de tomar no cu",
	"apanhei , mas gostei de apanhar com carinho",
	"O chuveiro começa tremer, parece que vai ficar ereto ",
	"pode deixar que eu faço fio terra nele.",
	"Ele passou a cobra em todo mundo. Deu cobrada na cara de geral, a cobra ficou até assada de tanto que passaram a mão nela.",
	"meu cu ta doendo",
	"bragrbrgrbrgrbrgrbrgrbrgrbrgrbrgrbrgr"
]

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jhon')
		.setDescription('Gera frase do Jhon!'),
	async execute(interaction) {
		let i = Math.floor(Math.random() * frases.length)
		await interaction.reply(frases[i]);
	},
};