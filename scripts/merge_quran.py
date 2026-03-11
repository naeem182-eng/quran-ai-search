import json

verses = []
arabic_dict = {}

# อ่าน Arabic
with open("quran-uthmani-min.txt", encoding="utf8") as f:
    for line in f:

        parts = line.strip().split("|")

        if len(parts) != 3:
            continue

        surah, ayah, text = parts
        key = f"{surah}|{ayah}"

        arabic_dict[key] = {
            "surah": int(surah),
            "ayah": int(ayah),
            "arabic": text.strip()
        }


# อ่าน Thai
with open("th.thai.txt", encoding="utf8") as f:
    for line in f:

        parts = line.strip().split("|")

        if len(parts) != 3:
            continue

        surah, ayah, text = parts
        key = f"{surah}|{ayah}"

        if key in arabic_dict:
            verse = arabic_dict[key]
            verse["thai"] = text.strip()
            verses.append(verse)


# save json
with open("quran.json", "w", encoding="utf8") as f:
    json.dump(verses, f, ensure_ascii=False, indent=2)

# ตรวจสอบ
import json

with open("quran.json", encoding="utf8") as f:
    data = json.load(f)

print(len(data))
print(data[0])