const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const { queryType } = require('./types/queryType')

const query = new GraphQLObjectType(queryType);

/**
 * Aqui se crea el schema
 * Esta obteniendo los datos de los querys que permite ejecutar desde 
 * el type queryType
 */
module.exports = new GraphQLSchema({
    query
});