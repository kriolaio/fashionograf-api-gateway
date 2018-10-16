const { gql } = require("apollo-server");

const schemaDefinition = gql`
  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = schemaDefinition;
