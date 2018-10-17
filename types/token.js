const { gql } = require("apollo-server");

const type = gql`
  type Token {
    content: String!
  }
`;

module.exports = type;
