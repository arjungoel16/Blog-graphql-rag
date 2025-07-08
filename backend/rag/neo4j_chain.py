from langchain.graphs import Neo4jGraph
from langchain.chains import GraphCypherQAChain
from langchain.chat_models import ChatOpenAI

graph = Neo4jGraph(
    url="bolt://neo4j:7687",
    username="neo4j",
    password="example"
)

llm = ChatOpenAI(model="gpt-4")

chain = GraphCypherQAChain.from_llm(llm=llm, graph=graph)

def run_query(q):
    return chain.run(q)