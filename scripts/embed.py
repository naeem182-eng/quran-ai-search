from sentence_transformers import SentenceTransformer
import json

model = SentenceTransformer("all-MiniLM-L6-v2")

with open("../data/quran.json", "r", encoding="utf-8") as f:
    ayat = json.load(f)

for a in ayat:
    text = a["arabic"] + " " + a["thai"]
    embedding = model.encode(text).tolist()
    a["embedding"] = embedding

with open("../data/embeddings.json", "w", encoding="utf-8") as f:
    json.dump(ayat, f, ensure_ascii=False, indent=2)

print("Embeddings created successfully")