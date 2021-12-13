const { GraphQLString, GraphQLID, GraphQLList } = require('graphql');
const { products, modalitys, descriptions } = require('../dataMock')
const { productType } = require('./productType')
const { descriptionType } = require('./descriptionType')
const { modalityType } = require('./modalityType')

var queryType = {
    name: 'RootQueryType',
    fields: {
        product: { // Esta es la query de producto
            type: productType, // Aqui se indica el tipo de dato que devuelve.
            args: {id:{type: GraphQLID}},  // estos son los parametros que recibe
            resolve(parent, args){
                /**
                 * Esto es un resolver, aqui se resuelve la consulta y devuelve los datos.
                 * Previamente pasaran por el type productType que realzara la misma operacion 
                 * intentara hacerlo matchear con el type (productType en este caso)
                 * 
                 * productType recibira el retorno de esta funcion como "parent" en los parametros
                 * 
                 */
                return products.find(producto => producto.id == args.id)
            }
        },
        products: {
            type: GraphQLList(productType), // en este caso devuelve una lista de productType
            args: {description:{type: GraphQLString}},
            resolve(parent, args){
                /**
                 * Sucede lo mismo, que el caso anterior pero con una lista.
                 * Tambien se ejecutaran los resolvers de productType.
                 */
                var valoresQueDeboMostrar = descriptions.filter(item => item.name.includes(args.description))

                return products.filter(
                    x=> valoresQueDeboMostrar.some( y=> y.id == x.id)
                )
            }
        },
        description: {
            type: descriptionType,
            args: {id:{type: GraphQLID}},
            resolve(parent, args){
                return descriptions.find( description => description.id == args.id)
            }
        },
        modality: {
            type: modalityType,
            args: {id:{type: GraphQLID}},
            resolve(parent, args){
                return modalitys.find(modality => modality.id ==  args.id)
            }
        }
    }
}

module.exports = {
    queryType
}