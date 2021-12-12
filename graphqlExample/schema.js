const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const { queryType } = require('./types/queryType')

const query = new GraphQLObjectType(queryType);

module.exports = new GraphQLSchema({
    query
});