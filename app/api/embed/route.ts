import { spawn } from "child_process"

export async function POST(req: Request): Promise<Response> {
  const body = await req.json()
  const query = body.query

  return new Promise<Response>((resolve) => {
    const py = spawn("python", ["embed_query.py", query])

    let result = ""

    py.stdout.on("data", (data) => {
      result += data.toString()
    })

    py.stderr.on("data", (err) => {
      console.error(err.toString())
    })

    py.on("close", () => {
      try {
        const embedding = JSON.parse(result)
        resolve(Response.json(embedding))
      } catch (e) {
        resolve(Response.json({ error: "Embedding failed" }, { status: 500 }))
      }
    })
  })
}