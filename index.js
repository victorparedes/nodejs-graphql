const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const schema = require('./graphqlExample/schema');

const app = express();

/**
 * Implementacion del playground de Graphql
 */
app.use(
    "/graphql",
    graphqlHTTP({
    schema: schema,
    graphiql: true,
    }));  

app.listen(5000, () => {
    console.log('now listening for requests on port 5000');
});