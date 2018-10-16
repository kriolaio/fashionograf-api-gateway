const { makeExecutableSchema } = require("graphql-tools");
const schemaDefinition = require("./types/schema-definition");
const rootQuery = require("./types/root-query");
const rootMutation = require("./types/root-mutation");
const token = require("./types/token");
const rootResolver = require("./resolvers/query-resolver");
const authenticationResolver = require("./resolvers/authentication");
const userResolver = require("./resolvers/user");

const schema = makeExecutableSchema({
  typeDefs: [schemaDefinition, rootQuery, rootMutation, token],
  resolvers: {
    Query: {
      ...rootResolver.Query,
      ...authenticationResolver.Query,
      ...userResolver.Query
    },
    Mutation: {
      ...rootResolver.Mutation,
      ...authenticationResolver.Mutation,
      ...userResolver.Mutation
    }
  }
});

module.exports = schema;
