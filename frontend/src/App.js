import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const BLOGS_QUERY = gql\`
  query {
    latestBlogs(limit: 5) {
      title
      content
      author { name }
    }
  }
\`;

function BlogList() {
  const { data, loading, error } = useQuery(BLOGS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <ul>
      {data.latestBlogs.map((blog, i) => (
        <li key={i}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <p><em>By {blog.author.name}</em></p>
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Latest Blogs</h1>
        <BlogList />
      </div>
    </ApolloProvider>
  );
}

export default App;