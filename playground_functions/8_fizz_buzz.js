//Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

//Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";
//Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";
//Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
//Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
//Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].


let tres = 3;
let cinco = 5;
let lista = [2,15,7,9,45]

const fizzBuzz = (array) => {

    let lista2 = [];

    for( i = 0; i < lista.length; i +=1)
        if( lista[i] % tres === 0 && lista[i] % cinco === 0){
            lista2.push('fizzBuzz');
        }
        else if( lista[i] % tres === 0 && lista[i] % cinco !== 0){
            lista2.push('fizz');
        }
        else if (lista[i] % tres !== 0 && lista[i] % cinco === 0){
            lista2.push('buzz');
        }
        else{
            lista2.push('bug!');
        }
    return lista2    
}

console.log(fizzBuzz(lista));