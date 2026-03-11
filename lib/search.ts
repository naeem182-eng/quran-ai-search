type Ayah = {
  surah: number
  ayah: number
  arabic: string
  thai: string
  embedding: number[]
}

export function cosineSimilarity(a: number[], b: number[]) {
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0)

  const magA = Math.sqrt(
    a.reduce((sum, val) => sum + val * val, 0)
  )

  const magB = Math.sqrt(
    b.reduce((sum, val) => sum + val * val, 0)
  )

  return dot / (magA * magB)
}

export function search(queryEmbedding: number[], data: Ayah[]) {

  return data
    .map((item) => ({
      ...item,
      score: cosineSimilarity(queryEmbedding, item.embedding)
    }))
    .sort((a, b) => b.score - a.score)

}