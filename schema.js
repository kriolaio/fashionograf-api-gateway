const { makeExecutableSchema } = require("graphql-tools");
const schemaDefinition = require("./types/schema-definition");
const rootQuery = require("./types/root-query");
const rootMutation = require("./types/root-mutation");
const token = require("./types/token");
const rootResolver = require("./resolvers/query-resolver");
const authenticationResolver = require("./resolvers/authentication");
const userResolver = require("./resolvers/user");
const { schemaFormatter } = require("./utils/resolver");

const schema = makeExecutableSchema({
  typeDefs: [schemaDefinition, rootQuery, rootMutation, token],
  resolvers: schemaFormatter([
    rootResolver,
    authenticationResolver,
    userResolver
  ])
});

module.exports = schema;
