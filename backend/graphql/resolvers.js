const db = require('knex')(require('../db/knexfile').development);
const axios = require('axios');

module.exports = {
  Query: {
    latestBlogs: async (_, { limit }) => {
      return await db('blogs')
        .join('users', 'blogs.author_id', 'users.id')
        .select('blogs.*', 'users.name as author_name')
        .orderBy('blogs.created_at', 'desc')
        .limit(limit)
        .then(rows => rows.map(row => ({
          id: row.id,
          title: row.title,
          content: row.content,
          author: { id: row.author_id, name: row.author_name }
        })));
    },
    answer: async (_, { question }) => {
      const res = await axios.post('http://rag:5005/rag', { question });
      return res.data.answer;
    }
  },
  Mutation: {
    addBlog: async (_, { title, content, authorId }) => {
      const [blog] = await db('blogs')
        .insert({ title, content, author_id: authorId })
        .returning('*');
      return {
        id: blog.id,
        title: blog.title,
        content: blog.content,
        author: { id: blog.author_id }
      };
    }
  }
};