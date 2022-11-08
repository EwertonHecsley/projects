//Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

//a -> 1
//e -> 2
//i -> 3
//o -> 4
//u -> 5

//Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".

//A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").

const encode = (string) => {
    let conv = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
    };
return string.replace(/a/g, conv.a).replace(/e/g, conv.e).replace(/i/g, conv.i).replace(/o/g, conv.o).replace(/u/g, conv.u)    
}

console.log(encode('hi there'));

const decode = (string) => {
    let conv2 = {
        1: 'a',
        2: 'e',
        3: 'i',
        4: 'o',
        5: 'u',
    }
return string.replace(1, conv2[1]).replace(2, conv2[2]).replace(3, conv2[3]).replace(4, conv2[4]).replace(5, conv2[5])
}

console.log(decode('h3 th2r4'));