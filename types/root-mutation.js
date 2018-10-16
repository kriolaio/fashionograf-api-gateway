const { gql } = require("apollo-server");

const rootMutation = gql`
  type Mutation {
    signin(email: String!, password: String!): Token
    signup(email: String!, password: String!): Token
    createUser(email: String!): String
  }
`;

module.exports = rootMutation;
