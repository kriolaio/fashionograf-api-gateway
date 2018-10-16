const { ApolloServer } = require("apollo-server");
const schema = require("./schema");

const { NODE_ENV } = process.env;
const isProduction = NODE_ENV && NODE_ENV === "production";

const app = new ApolloServer({
  schema,
  playground: !isProduction,
  introspection: !isProduction
});

module.exports = app;
