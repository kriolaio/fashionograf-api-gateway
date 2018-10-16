const { gql } = require("apollo-server");

const rootQuery = gql`
  type Query {
    dummy: String
  }
`;

module.exports = rootQuery;
