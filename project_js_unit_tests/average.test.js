const average = require('./average')

describe('Testar se função retorna média de um array', ()=>{

    it('Função average deve retonar a media de um array', () => {
        expect(average([1,2,4,1])).toBe(2);
    });

});