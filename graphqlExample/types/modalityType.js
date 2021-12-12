const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

const modalityType = new GraphQLObjectType({
    name: 'Modality',
    fields: ( ) => ({
        id: { type: GraphQLID }, 
        name: { type: GraphQLString }
    })
});

module.exports = {
    modalityType
}