const { ApolloServer } = require('apollo-server');
const typeDefs = require('../graphql/schema');
const resolvers = require('../graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

describe('GraphQL Blog API', () => {
  it('fetches latest blogs (mock)', async () => {
    const res = await server.executeOperation({
      query: `
        query {
          latestBlogs(limit: 1) {
            title
          }
        }
      `
    });
    expect(res.errors).toBeUndefined();
  });
});