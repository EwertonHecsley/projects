const numbers = require('./script');

describe('A função numbers recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo "number" e false caso contrário',()=>{
    it('Deve retornar TRUE se todos os elementos do array forem do timpo number',()=>{
        expect(numbers([0,1,2,3,4,5])).toBeTruthy();
    })

    it('Deve retornar FALSE, caso algum elemento do array nao seja do tipo number',()=>{
        expect(numbers([0,3,'um',4,'dois',3])).toBeFalsy();
    })
})
