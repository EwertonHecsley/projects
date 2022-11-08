//magine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão caçando um mesmo rato chamado mouse. Imagine que os animais estão em uma reta, cada um em uma posição representada por um número.

//Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).

//Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, sua função deverá retornar "cat2".

//Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".

let position1 = 3;
let position2 = 4;
const positionMouse = 0;

const cat1 = position1;
const cat2 = position2;
const mouse = positionMouse;


const catAndMouse = (rato, gato1, gato2) => {
    let dist1 = position1 - positionMouse;
    let dist2 = position2 - positionMouse;
    let retorno;
        if (dist1 < dist2){
            retorno = 'cat1 está mias próximo';
        }
        else if(dist2 < dist1){
            retorno = 'cat2 está mais próximo';
        }
        else{
            retorno = 'Os gatos trombam e o rato foge'
        }
    return retorno;    
}


console.log(catAndMouse(mouse,cat1,cat2));