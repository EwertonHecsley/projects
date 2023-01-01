const productDetails = require('./productDetails');

describe('Linha de testes a serem detalhadas',()=>{

    it('Verifica se productDetails é uma função',()=>{
        expect(typeof productDetails).toBe('function');
    })

    it('Verifica se todos os campos estão preenchidos, caso contrario devera dar erro',()=>{
        expect(productDetails()).toBe('Todos os campos devem ser preenchidos');
    })

    it('Verifica se algum campo, existe algum undefined,caso exista retorne um erro',()=>{
        expect(productDetails('Mascara')).toBe('Todos os campos devem ser preenchidos');
    })

    it('Verifica se algum campo é diferente de string, caso seja retorna erro',()=>{
        expect(productDetails('Mascara',2)).toBe('Não pode ser diferente de String');
    })

    it('Verificar se o retorno da função é um array',()=>{
        expect(productDetails('Mascara','Cama')).toEqual([{
            name:'Mascara',
            details:{
                productId:'Mascara123',
            },
        },
        {
            name:'Cama',
            details:{
                productId:'Cama123',
            }
        }]);
    });
});