import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })

console.log(process.env.OPENAI_API_KEY)

import fs from "fs"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

const quran = JSON.parse(
  fs.readFileSync("data/quran.json")
)

async function run() {

  for (const ayah of quran) {

    const text = ayah.arabic + " " + ayah.thai

    const res = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: text
    })

    ayah.embedding = res.data[0].embedding
  }

  fs.writeFileSync(
    "data/quran-embeddings.json",
    JSON.stringify(quran)
  )

  console.log("Embeddings created")
}

run()