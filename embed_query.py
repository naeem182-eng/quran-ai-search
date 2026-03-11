from sentence_transformers import SentenceTransformer
import json
import sys

model = SentenceTransformer("all-MiniLM-L6-v2")

query = sys.argv[1]

embedding = model.encode(query).tolist()

print(json.dumps(embedding))
