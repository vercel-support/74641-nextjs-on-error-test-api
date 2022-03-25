// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const axios = require('axios').default

export default async function handler(req, res) {
  const {data: response} = await axios.get('https://nextjs-time-api-1.vercel-support.app/api/time')
  console.log(response)
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate=2678400") // 2678400 seconds = 31 days
  res.status(200).json(response)
}
