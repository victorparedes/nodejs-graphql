const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLSchema } = require('graphql');
const { products, modalitys, descriptions } = require('../dataMock')
const { productType } = require('./productType')
const { descriptionType } = require('./descriptionType')
const { modalityType } = require('./modalityType')

var queryType = {
    name: 'RootQueryType',
    fields: {
        product: {
            type: productType,
            args: {id:{type: GraphQLID}},
            resolve(parent, args){
                return products.find(producto => producto.id == args.id)
            }
        },
        products:  {
            type: GraphQLList(productType),
            args: {description:{type: GraphQLString}},
            resolve(parent, args){
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