export default {
  async fetch(request, env) {
    return await handleRequest(request)
  }
}

async function handleRequest(request) {
  if (request.method === "POST") {
    const payload = await request.json() 

    const url = "https://moshema8.wixstudio.com/speak-pt/_functions/telegramHook"
    const data = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Content-Type": "application/json"
      }
    }) 
    
  }
  return new Response("OK") // Doesn't really matter
}
