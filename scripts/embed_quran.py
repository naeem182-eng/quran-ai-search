import json
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("paraphrase-multilingual-MiniLM-L12-v2")

with open("quran.json", encoding="utf8") as f:
    data = json.load(f)

vectors = []

for verse in data:

    text = verse["arabic"] + " " + verse["thai"]

    embedding = model.encode(text)

    verse["embedding"] = embedding.tolist()

    vectors.append(verse)

with open("quran_vector.json", "w", encoding="utf8") as f:
    json.dump(vectors, f, ensure_ascii=False)