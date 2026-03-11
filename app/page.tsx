"use client"

import { useState } from "react"
import embeddings from "@/data/quran_vectors.json"
import { search } from "@/lib/search"

type Ayah = {
surah: number
ayah: number
arabic: string
thai: string
embedding: number[]
}

export default function Home() {

const [query, setQuery] = useState<string>("")
const [results, setResults] = useState<Ayah[]>([])
const [loading, setLoading] = useState<boolean>(false)

async function getEmbedding(text: string) {

const res = await fetch("/api/embed", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ query: text })
})

const data = await res.json()
return data


}

async function runSearch() {


if (!query.trim()) return

setLoading(true)

const queryEmbedding = await getEmbedding(query)

const searchResults = search(queryEmbedding, embeddings as Ayah[])

setResults(searchResults.slice(0, 5))

setLoading(false)


}

return (
<main style={{ padding: 40, fontFamily: "sans-serif" }}>


  <h1>Quran AI Semantic Search</h1>

  <input
    placeholder="เช่น มนุษย์"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    style={{
      padding: 10,
      width: 300,
      marginTop: 20
    }}
  />

  <button
    onClick={runSearch}
    style={{ marginLeft: 10, padding: 10 }}
  >
    Search
  </button>

  {loading && (
    <p style={{ marginTop: 20 }}>Searching...</p>
  )}

  <div style={{ marginTop: 40 }}>

    {results.map((ayah, i) => (
      <div key={i} style={{ marginBottom: 30 }}>

        <b>Surah {ayah.surah}:{ayah.ayah}</b>

        <p style={{ fontSize: 20 }}>
          {ayah.arabic}
        </p>

        <p>
          {ayah.thai}
        </p>

      </div>
    ))}

  </div>

</main>


)
}

