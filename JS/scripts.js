function calcular(){
// variaveis
// em js as variaveis não possuem tipagem
let mascote, homenagem,leite,kitavulso,suplementoavulso
mascote = document.getElementById("mascote").value //puxa o valor do id e salva na variavel

leite = document.getElementById("leite").value

homenagem = document.getElementById("homenagem").value

kitavulso = document.getElementById("kitavulso").value

suplementoavulso = document.getElementById("suplementoavulso").value

let soma = Number(mascote) + Number(homenagem) + (2 * Number(leite)) + (30 * Number(kitavulso)) + (15 * Number(suplementoavulso))
document.getElementById("soma").innerHTML = 'Resultado: ' + soma//retorna o valor ao html
}

function limpar() {
    // Reseta os valores dos inputs para 0 (ou "")
    document.getElementById("mascote").value = "0";
    document.getElementById("leite").value = "0";
    document.getElementById("homenagem").value = "0";
    document.getElementById("kitavulso").value = "0";
    document.getElementById("suplementoavulso").value = "0";
    
    // Limpa o resultado
    document.getElementById("soma").innerHTML = "Resultado: ";
}