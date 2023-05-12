// Código que roda quando a página é carregada
const maxAttribute = 5; // Valor máximo de cada atributo
const maxPoints = 15; // Pontos totais a serem distribuídos
let pointsToSpend = maxPoints; // Variável iniciada com o valor máximo
let forValue = agilValue = inteliValue = 0; // Uma variável para cada atributo, iniciadas em 0
updatePips(); // Chama a função que atualiza o estado dos pips


//Funções

// - Atualiza os pips

function updatePips(){
    resetPips(); // Chama a função que apaga todos os pips, para depois acender os que precisam ser acesos

    for (i = 0; i < forValue; i++) { // i++ = add 1 ao valor de i
        turnOn("forP" + (i + 1));

        /*
        Loop que roda uma vez cada ponto colocado no atributo

        Chama a função que acende um pip, passando como parâmetro uma string formada do prefixo do atributo + o índice da iteração atual do loop

        Ele é somado de 1 porque os Ids começam em 1, enquanto i começa em 0. 
        
        Sendo assim, se forValue for 3, o loop vai rodar 3 vezes (i=0, i=1 e i=2), chamando turnOn 3 vezes, com os parâmetros "forP1", "forP2" e "forP3"

        Os parênteses em volta do 'i + 1' são só para garantir que esses dois ints sejam somados antes do resultado ser concatenado à string "forP" (senão você pode acabar com um "forP01" por exemplo)



        */
    }






}
