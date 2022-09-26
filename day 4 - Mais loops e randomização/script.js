
let chancesTotais = 3
alert("BEM VINDO AO JOGO DE ADIVINHAR NUMEROS!")

while (true) {

    let iniciarJogo = prompt("Deseja iniciar o Jogo da Adivinhação?\n1 - Sim\n2 - Não")

    if (iniciarJogo == 1) {

        let numeroComputador = Math.floor(Math.random() * (10 - 0 + 1) + 0); 
        let escolherNumero = prompt("Digite um número de 1 até 10");
        
        if (chancesTotais == 1) {
            alert("Desculpa, acabaram suas chances.")
            break;
        }

        if (escolherNumero <= 10 && chancesTotais >= 1) {
            if (escolherNumero == numeroComputador){

                alert(`Parabens! o número ${escolherNumero} é o mesmo escolhido pelo computador!`)
                break;

            }

        } else if (escolherNumero > 10 ) {
                
            alert("o numero precisa ser menor que 10!")
            continue;

        }
        if (escolherNumero <= 10 && chancesTotais >= 1) {

            if (numeroComputador != escolherNumero) {
                chancesTotais -= 1;
                alert(`Ops! Parece que o numero não é o mesmo do COMPUTADOR, você tem mais ${chancesTotais}`)
                continue;
            }
        }
    
    }
    if (iniciarJogo == 2) {
        alert("Obrigado por jogar comigo! Até a proxima.")
        break;
        
    } else {
        alert("[ERRO] Só um número entre 1 e 10. Digite um número válido.")
        continue;
    }
}