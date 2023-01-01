const verificaProduct = (produto1,produto2) => {

    if(produto1 == undefined || produto2 == undefined ){
        throw new Error('Todos os campos devem ser preenchidos');
    };

    if(typeof produto1 !== 'string' || typeof produto2 !== 'string'){
        throw new Error('Não pode ser diferente de String');
    };

    
}

const productDetails = (produto1,produto2) => {

    let lista = [
        {
            name: produto1,
            details:{
                productId: `${produto1}123`
            }
        },
        {
            name: produto2,
            details:{
                productId: `${produto2}123`
            }
        }
    ]

    try {
        verificaProduct(produto1,produto2)
            return lista
    } catch (error) {
        return error.message
    }

};

module.exports = productDetails