const vqv = require('./vqv')

    describe('Conjunto de testes, sera listado para iniciar',()=>{
        
        it('Verificar se vqv é uma função',()=>{
            expect(typeof vqv).toBe('function');
        })

        it('Verifica o retorno da função com a frase: Oi, meu nome é Ewerton! Tenho 30 anos, trabalho na Trybe e mando muito em programação! #VQV!',()=>{
            expect(vqv('Ewerton',30)).toBe('Oi, meu nome é Ewerton! Tenho 30 anos, trabalho na Trybe e mando muito em programação! #VQV!');
        })

        it('Verificar se nao huver paramentros, retorna erro',()=>{
            expect(vqv("","")).toBe('Valores não podem ser vazios')
        })

        it('Verifica se algum campo não é do tipo espefificado, caso nao seja, deve retornar undefined',()=>{
            expect(vqv('Ewerton','30')).toBe('undefined');
        })
        
    })