from flask import Flask, request, jsonify
from neo4j_chain import run_query

app = Flask(__name__)

@app.route("/rag", methods=["POST"])
def rag():
    data = request.get_json()
    question = data.get("question")
    answer = run_query(question)
    return jsonify({"answer": answer})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5005)