# 🧠 CortexBlog ReadME

A full-stack project that combines:

* ✍️ **Blog Platform** (PostgreSQL + GraphQL API)
* 🤖 **Neo4j Graph Knowledge Base** with **LangChain + OpenAI** for RAG (Retrieval-Augmented Generation)
* 💻 **React Frontend** powered by Apollo Client
* 🚀 **CI/CD with GitHub Actions**
* 🐳 **Docker Compose** for local development
* ↺ **Deploy-ready** for Heroku (backend), Render (RAG), and Vercel (frontend)

---

## 📦 Tech Stack

| Layer       | Tech                               |
| ----------- | ---------------------------------- |
| Frontend    | React + Apollo Client              |
| API         | GraphQL (Apollo Server)            |
| Database    | PostgreSQL                         |
| RAG Service | Python + Flask + LangChain + Neo4j |
| Graph Store | Neo4j                              |
| Deployment  | Vercel, Heroku, Render             |
| CI/CD       | GitHub Actions                     |

---

## 📁 Folder Structure

  ```
  blog-graphql-rag/
  ├── backend/             # GraphQL API + DB + RAG
  │   ├── graphql/         # schema + resolvers
  │   ├── db/              # knex config + migrations
  │   ├── rag/             # Flask app with LangChain
  ├── frontend/            # React app
  ├── docker-compose.yml   # Dev containers
  ├── .github/workflows/   # GitHub Actions for CI
  ├── README.md            # You're reading it!
  ```
  
  ---
  
## 🚀 Quick Start (Dev)

### 1. Clone & Setup

```bash
git clone https://github.com/YOUR_USERNAME/blog-graphql-rag.git
cd blog-graphql-rag
cp backend/.env.example backend/.env
```

### 2. Run with Docker

```bash
docker compose up --build
```

* GraphQL API: [http://localhost:4000](http://localhost:4000)
* RAG Server: [http://localhost:5005/rag](http://localhost:5005/rag)
* Neo4j Browser: [http://localhost:7474](http://localhost:7474)
* Postgres: localhost:5432

### 3. Frontend

```bash
cd frontend
npm install
npm start
```

* Frontend: [http://localhost:3000](http://localhost:3000)

---

## ✅ Deploy Instructions

### 🔹 Frontend → Vercel

* Connect `frontend/` folder to Vercel
* Set environment variable:

```
REACT_APP_GRAPHQL_URI=https://your-backend.herokuapp.com/
```

---

### 🔹 GraphQL API → Heroku

```bash
cd backend
heroku create blog-graphql-api
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
```

---

### 🔹 RAG Service → Render

* Create new Web Service on Render
* Root: `backend/rag`
* Runtime: Python 3.10+
* Add `requirements.txt`
* Start command:

```bash
python rag_server.py
```

---

## 🧪 Testing

Run tests for the GraphQL API:

```bash
cd backend
npm test
```

---

## ⚙️ CI/CD

On every push to `main`, GitHub Actions will:

* Spin up a PostgreSQL container
* Install Node.js dependencies
* Run GraphQL tests

Workflow file: `.github/workflows/deploy.yml`

---

## 🧠 Neo4j + LangChain RAG

Sample Cypher to seed graph:

```cypher
CREATE (:Blog {title: 'AI'})-[:HAS_TOPIC]->(:Topic {name: 'Machine Learning'});
```

LangChain uses this graph to answer natural language questions through OpenAI.

---

## 📝 License

MIT License. Use freely, modify respectfully.

---

## 👨‍💻 Author

Built by Arjun Goel
