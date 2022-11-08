//Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.

//Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.

let vitorias = 1;
let empates = 1

const footballPoints = (nVitorias, nEmpates) => {
    nVitorias = vitorias * 3
    nEmpates = empates * 1
return nVitorias + nEmpates + ' Pontos'
};


console.log(footballPoints(vitorias,empates));