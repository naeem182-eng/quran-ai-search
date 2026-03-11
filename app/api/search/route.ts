import embeddings from "@/data/quran_vectors.json"
import { search } from "@/lib/search"

type Ayah = {
surah: number
ayah: number
arabic: string
thai: string
embedding: number[]
}

export async function POST(req: Request) {

const body = await req.json()
const queryEmbedding = body.embedding

const results = search(queryEmbedding, embeddings as Ayah[])

return Response.json(results.slice(0,5))
}
