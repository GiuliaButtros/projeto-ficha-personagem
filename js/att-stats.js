

// Código que roda quando a página é carregada
const maxAttribute = 5; // Valor máximo de cada atributo
const maxPoints = 10; // Pontos totais a serem distribuídos
let pointsToSpend = maxPoints; // Variável iniciada com o valor máximo
let forcValue = agilValue = inteliValue = 0; // Uma variável para cada atributo, iniciadas em 0
let raca = "";
let classe = "";
let arma = "";
let equipamento = "";
let dano = 0;
let defesa = 0;
let magia = 0;
let bonusRacaForc = 0;
let bonusRacaAgil = 0;
let bonusRacaInteli = 0;
let bonusDanoArma = 0;
let bonusDefesaEq = 0;
let bonusMagiaEq = 0;
updatePips(); // Chama a função que atualiza o estado dos pips

//Funções

// Bonus raça + equipamentos etc

function updateRacaEClasse () {
    
    // Usar no switch o texto do item selecionado em Raca  
    switch (document.getElementById("raca-select").options[document.getElementById("raca-select").selectedIndex].text) {
        case "Humano":
            raca = "humano";
            bonusRacaForc = 0;
            bonusRacaAgil = 0;
            bonusRacaInteli = 0;
            //inner.Text ok
            document.getElementById("textoRaca").innerText = "Humano: Sem bonus";
            break;
        case "Elfo":
            raca = "elfo";    
            bonusRacaForc = -1;
            bonusRacaAgil = 0;
            bonusRacaInteli = 1;
            document.getElementById("textoRaca").innerHTML = "Elfo: -1 em Força, +1 em Inteligência";
            break;
        case "Anão":
            raca = "anao";
            bonusRacaForc = 1;
            bonusRacaAgil = -1;
            bonusRacaInteli = 0;
            document.getElementById("textoRaca").innerText = "Anão: +1 em Força, -1 em Agilidade";
            break;
        case "Hobbit":
            raca = "hobbit";
            bonusRacaForc = -1;
            bonusRacaAgil = 1;
            bonusRacaInteli = 0;
            document.getElementById("textoRaca").innerText = "Hobbit: -1 em Força, +1 em Agilidade";
            break;
        default:
            console.log("Erro no switch 1 em updateRacaEClasse");
            break;
    }

    // Usar no switch o texto do item selecionado em Classe
    switch (document.getElementById("classe-select").options[document.getElementById("classe-select").selectedIndex].text) {
        case "Guerreiro":
            classe = "guerreiro";
            arma = "Espada: Dano +2";
            bonusDanoArma = 2;
            equipamento = "Armadura média: Defesa +3";
            bonusDefesaEq = 3;
            bonusMagiaEq = 0;
            break;
        case "Ladino":
            classe = "ladino";
            arma = "Adaga: Dano +1";
            bonusDanoArma = 1;
            equipamento = "Armadura leve: Defesa +1";
            bonusDefesaEq = 1;
            bonusMagiaEq = 0;
            break;
        case "Mago":
            classe = "mago";
            arma = "Cajado: Dano +2";
            bonusDanoArma = 1;
            equipamento = "Anel mágico: Magia +1";
            bonusDefesaEq = 0;
            bonusMagiaEq = 1;
            break;
        default:
            console.log("Erro no switch 2 em updateRacaEClasse");
            break;
    }

    // Troca o texto da arma e do equipamento
    document.getElementById("textoArma").innerText = arma;
    document.getElementById("textoEquip").innerText = equipamento;

    // Troca a figura. A figura é background na div
    document.getElementById("figura").style.backgroundImage="url(./imagens/" + raca + "_" + classe + ".PNG)";
    
    updateEstatisticas();   
}

function updateEstatisticas() {   
    dano = forcValue + bonusRacaForc + bonusDanoArma;
    defesa = agilValue + bonusRacaAgil + bonusDefesaEq;
    magia = inteliValue + bonusRacaInteli + bonusMagiaEq;

    document.getElementById("textoDano").innerText = dano;
    document.getElementById("textoDefesa").innerText = defesa;
    document.getElementById("textoMagia").innerText = magia;
}

// - Atualiza os pips >

function updatePips(){
    resetPips(); // Chama a função que apaga todos os pips, para depois acender os que precisam ser acesos

    for (i = 0; i < forcValue; i++) { // i++ = add 1 ao valor de i
        turnOn("forcP" + (i + 1));

        /*
        Loop que roda uma vez para cada ponto colocado no atributo

        Chama a função que acende um pip, passando como parâmetro uma string formada do prefixo do atributo + o índice da iteração atual do loop

        Ele é somado de 1 porque os Ids começam em 1, enquanto i começa em 0. 
        
        Sendo assim, se forValue for 3, o loop vai rodar 3 vezes (i=0, i=1 e i=2), chamando turnOn 3 vezes, com os parâmetros "forP1", "forP2" e "forP3"

        Os parênteses em volta do 'i + 1' são só para garantir que esses dois ints sejam somados antes do resultado ser concatenado à string "forP" (senão você pode acabar com um "forP01" por exemplo)
        */
    }

    for (i = 0; i < agilValue; i++) {
        turnOn("agilP" + (i + 1));
    }

    for (i = 0; i < inteliValue; i++){
        turnOn("inteliP" + (i + 1));
    }

    for (i = 0; i < pointsToSpend; i++){
        turnOn("pointP" + (i + 1));
    }
}

// - Apaga todos os pips >

function resetPips(){
    /* 
    i = índice inicial ; condição ; oq acontece no final de cada iteração

    Mesma lógica dos loops acima, mas usa maxAttribute para enviar sempre os Ids de todos os pips do atributo

    forcP etc são os is das divs no HTML

    */

    for(i = 0; i < maxAttribute; i++){
        turnOff("forcP" + (i + 1));
    }

    for(i = 0; i < maxAttribute; i++){
        turnOff("agilP" + (i + 1));
    }

    for(i = 0; i < maxAttribute; i++){
        turnOff("inteliP" + (i + 1));
    }

    for(i = 0; i < maxPoints; i++){
        turnOff("pointP" + (i + 1));
    }
}

// - Função que é chamada quando se clica nos botões de + ou - >

/*
Adiciona um ponto de atributo e tira um do pointsToSpend, ou o inverso

Recebe como parâmetros uma string com o código do atributo e um int com o valor da modificação, que vai ser 1 ou -1
*/

function changeValue(att, value){
    /*
     IF antes do SWITCH > Conferir se está tentando adicionar um ponto em um atributo tendo pontos para gastar OU remover um ponto de um atributo tendo espaço em pointsToSpend (nesse caso, esse segundo check é desnecessário porque nunca terá pontos em atributos com o pointsToSpend cheio)
    */

    if((value > 0 && pointsToSpend > 0) || (value < 0 && pointsToSpend < maxPoints)){ // && = AND lógico / || = or 

        switch (att){
            /* Vai para um dos cases dependendo do código de atributo que recebeu como parâmetro */
            case "forc":
                if (forcValue > 0 && value < 0 ){
                    /*Se estiver tentando tirar um ponto (value = -1) e os pontos não já estiverem vazios */
                    forcValue--;
                    pointsToSpend++;                    
                }else if (forcValue < maxAttribute && value > 0){
                    /* Se estiver tentando adicionar um ponto (value = 1) e o máximo não tiver sido atingido */
                    forcValue++;
                    pointsToSpend--;
                }
                break

            case "agil":
                if (agilValue > 0 && value < 0){
                    agilValue--;
                    pointsToSpend++;
                }else if (agilValue < maxAttribute && value > 0){
                    agilValue++;
                    pointsToSpend--;
                }
                break
            
            case "inteli":
                if (inteliValue > 0 && value < 0) {
                    inteliValue--;
                    pointsToSpend++;
                }else if (inteliValue < maxAttribute && value > 0) {
                    inteliValue++;
                    pointsToSpend--;
                }
                break

            default: 
                console.log("changeValue switch error"); /* se o string att recebido não for um dos cases, deu algo errado */
        
        }
    }
    updatePips(); /* Atualiza pips no dinal da mudança das variáveis */

    updateEstatisticas();
}

// Acende o pip referente ao id recebido como parâmetro (string) >

function turnOn (id){
    document.getElementById(id).style.backgroundColor = "rgb(255, 149, 0)";
}

// Apaga pip referente ao id recebido como parâmetro (string) >

function turnOff(id){
    //console.log(id);
    document.getElementById(id).style.backgroundColor = "rgb(163, 149, 129)";
}