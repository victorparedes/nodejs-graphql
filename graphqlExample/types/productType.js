const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');
const { products, modalitys, descriptions, prices } = require('../dataMock')

const productType = new GraphQLObjectType({
    name: 'Product',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { // nombre de la propiedad
            type: GraphQLString, // Es el tipo de dato que corresponde a la propiedad
            resolve(parent, args){ // Resolver de la propiedad
                /**
                 * Cuando ejecutes una query proba pedir mas y menos propiedades
                 * y verifica en la consola que hay campos que se ejecutan y otros que no.
                 */
                console.log('Se ejecuto el name resolver')
                return descriptions.find(description => description.id == parent.id_type )?.name
            }
        },
        modality: { 
            type: GraphQLString,
            resolve(parent, args){
                console.log('Se ejecuto el modality resolver')
                return modalitys.find(modality=> modality.id == parent.id_type)?.name
            }        
        },
        price: {
            type: GraphQLString,
            resolve(parent, args){
                console.log('Se ejecuto el price resolver.')
                return prices.find(price=> price.id_type == parent.id_type && price.id_modality == parent.id_modality)?.price
            }
        }
    })
});


module.exports = {
    productType
}