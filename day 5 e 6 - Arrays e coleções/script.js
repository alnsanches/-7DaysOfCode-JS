let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let food = "";
let categoria = "";
let remover = "";


function iniciarCadastro() {
    let listaMercado = "sim";  // valor inicial como "sim", porque a primeira vez sempre vai entrar no while listaMercado
    while (listaMercado != "não") {
        if (frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0) {
            listaMercado = prompt("Você deseja adicionar uma comida na lista de compras?\nResponda 'sim' ou 'não'.");
        } else {
            listaMercado = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim', 'não' ou 'remover'.");
        }

        while (listaMercado != "sim" && listaMercado != "não" && listaMercado != "remover") {  //enquanto o texto lido for diferente de "sim" e de "não", exibir que não foi reconhecido e perguntar novamente
            alert(`Operação não reconhecida!`);
            listaMercado = prompt("Você deseja adicionar uma comida na lista de compras?\nResponda 'sim' ou 'não'.");
        }

        if (listaMercado === "não") {  //se o texto lido for "não", sair do while
            break;
        }

        if (listaMercado === "sim") {
            food = prompt("Qual comida você deseja inserir?");
            categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
            if (categoria === 'frutas') {
                frutas.push(food);
            } else if (categoria === 'laticínios') {
                laticinios.push(food);
            } else if (categoria === 'doces') {
                doces.push(food);
            } else if (categoria === 'congelados') {
                congelados.push(food);
            } else {
                alert("Essa categoria não foi pré-definida.")
            }

        } else if (listaMercado === "remover") {
            if (frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0) {  //se a lista estiver vazia (tratamento de bug, caso a pessoa digite "remover" mesmo quando forem exibidas apenas as opções "sim" e "não"
                alert(`A lista está vazia!`);
            } else {  //se a lista não estiver vazia
                remover = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`);
                if (frutas.indexOf(remover) != -1) {
                    frutas.splice(frutas.indexOf(remover), 1);
                    alert(`O item ${remover} foi removido com sucesso!`)
                } else if (laticinios.indexOf(remover) != -1) {
                    laticinios.splice(laticinios.indexOf(remover), 1);
                    alert(`O item ${remover} foi removido com sucesso!`)
                } else if (doces.indexOf(remover) != -1) {
                    doces.splice(doces.indexOf(remover), 1);
                    alert(`O item ${remover} foi removido com sucesso!`)
                } else if (congelados.indexOf(remover) != -1) {
                    congelados.splice(congelados.indexOf(remover), 1);
                    alert(`O item ${remover} foi removido com sucesso!`)
                } else {
                    alert(`Não foi possível encontrar o item dentro da lista!`)
                }
            }
        }
    }
    alert(`SUA LISTA DE COMPRAS:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
}
