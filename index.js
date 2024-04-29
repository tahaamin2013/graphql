// index.js

const { ApolloServer } = require('apollo-server');
const { startStandaloneServer } = require('apollo-server/standalone');
const { gql } = require('apollo-server');


  const server = new ApolloServer({
    // Is object mein hum type definitions (typeDefs) aur resolvers define karenge
  });

  const { url } = await startStandaloneServer(server, { port: 4000 });

  console.log(`Server ready at ${url}`);
