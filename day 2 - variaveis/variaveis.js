

function variaveis() {
    var nome = window.prompt('Qual seu nome?');
    var idade = window.prompt('Qual sua idade?');
    var prog = window.prompt('Qual linguagem de programação você está aprendendo?');

    var opcao = window.prompt('Escolha uma opção:\n 1 - SIM \n 2 - NÃO');

    if (opcao == 1) {
        window.alert ("Muito bom! Continue estudando e você terá muito sucesso.");
    } else {
        window.alert ("Ah que pena, mas não desista. Você pode continuar estudando a linguagem de programação atual ou tentar aprender uma nova.");
    }

    window.alert("Olá, " + nome + " você tem " + idade + " anos e está aprendendo " + prog +".");
}

