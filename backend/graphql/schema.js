const { gql } = require('apollo-server');

module.exports = gql`
  type Blog {
    id: ID!
    title: String!
    content: String!
    author: User!
  }

  type User {
    id: ID!
    name: String!
  }

  type Query {
    latestBlogs(limit: Int!): [Blog!]!
    answer(question: String!): String!
  }

  type Mutation {
    addBlog(title: String!, content: String!, authorId: ID!): Blog!
  }
`;