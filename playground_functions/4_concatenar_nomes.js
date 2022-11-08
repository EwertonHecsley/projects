//Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.

//Isso quer dizer que, caso o parâmetro passado para concatName seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar Paolillo, Lucas.

let lista = ['Maria', 'Cassiano', 'Ferraz', 'Ewerton'];

// Forma completa

function concatName(array){
    lista1 = lista[3] + ', ' +  lista[0];
return lista1     
}

console.log(concatName(lista));

//forma resumida

const concatName1 = array => `${lista[3]}, ${lista[0]}`;

console.log(concatName1(lista));

