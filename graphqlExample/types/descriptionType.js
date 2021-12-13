const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

const descriptionType = new GraphQLObjectType({
    name: 'Descriptions',
    fields: ( ) => ({
        /**
         * En este caso (id y name) recibe como parametro un objeto con ambas propiedades
         * con el nombre exacto con lo cual no hace falta crear un resolver.
         * Esto es un Resolver implicito.
         */
        id: { type: GraphQLID },
        name: { type: GraphQLString }
    })
});

module.exports = {
    descriptionType
}