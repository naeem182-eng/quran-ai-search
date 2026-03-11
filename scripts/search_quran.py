import json
import numpy as np
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("paraphrase-multilingual-MiniLM-L12-v2")

# โหลด vector
with open("quran_vector.json", encoding="utf8") as f:
    data = json.load(f)

# แปลง embedding เป็น numpy
vectors = np.array([v["embedding"] for v in data])

while True:

    query = input("\nถามอะไรเกี่ยวกับอัลกุรอาน: ")

    query_vector = model.encode(query)

    # cosine similarity
    scores = np.dot(vectors, query_vector)

    top_index = np.argsort(scores)[-5:][::-1]

    print("\nอายะห์ที่เกี่ยวข้อง:\n")

    for i in top_index:

        v = data[i]

        print(f"{v['surah']}:{v['ayah']}")
        print(v["arabic"])
        print(v["thai"])
        print("------")