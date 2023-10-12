from langchain.chat_models import ChatOpenAI
from langchain.chains import GraphCypherQAChain
from langchain.graphs import Neo4jGraph
from langchain.llms import OpenAI

llm = OpenAI(openai_api_key="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")

graph = Neo4jGraph(
    url="bolt://localhost:7687", username="neo4j", password="pleaseletmein"
)

print(graph.get_schema)

# graph.query(
#     """
# MERGE (m:Movie {name:"Top Gun"})
# WITH m
# UNWIND ["Tom Cruise", "Val Kilmer", "Anthony Edwards", "Meg Ryan"] AS actor
# MERGE (a:Actor {name:actor})
# MERGE (a)-[:ACTED_IN]->(m)
# """
# )

chain = GraphCypherQAChain.from_llm(
    llm, graph=graph, verbose=True
)

print(chain.run("Who played in Top Gun?"))