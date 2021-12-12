const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

const descriptionType = new GraphQLObjectType({
    name: 'Descriptions',
    fields: ( ) => ({
        id: { type: GraphQLID }, 
        name: { type: GraphQLString }
    })
});

module.exports = {
    descriptionType
}