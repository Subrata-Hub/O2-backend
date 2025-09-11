// import payload from "payload"
// import config from "./payload.config"

// const start = async () => {
//   await payload.init({
//     config, // use imported config directly
//     onInit: () => {
//       payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
//     },
//   })
// }

// start()

// import { createServer } from 'http'
// import { parse } from 'url'
// import next from 'next'

// const port = parseInt(process.env.PORT || '3000', 10)
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   createServer((req, res) => {
//     const parsedUrl = parse(req.url, true)
//     handle(req, res, parsedUrl)
//   }).listen(port)

//   console.log(
//     `> Server listening at http://localhost:${port} as ${
//       dev ? 'development' : process.env.NODE_ENV
//     }`,
//   )
// })

// import http from 'http'
// import { parse } from 'url'
// import next from 'next'
// import payload from 'payload'
// import config from './payload.config' // adjust if .ts

// const port = parseInt(process.env.PORT || '7777', 10)
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// const start = async () => {
//   // Initialize Payload
//   await payload.init({
//     config,
//     express: null, // we’ll let Payload hook into the HTTP server
//     onInit: () => {
//       payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
//     },
//   })

//   // Prepare Next.js
//   await app.prepare()

//   // Create one HTTP server for both
//   http
//     .createServer((req, res) => {
//       const parsedUrl = parse(req.url, true)

//       // If the request starts with /api, hand it to Payload
//       if (parsedUrl.pathname.startsWith('/api')) {
//         return payload.expressMiddleware(req, res)
//       }

//       // Otherwise, let Next.js handle it
//       return handle(req, res, parsedUrl)
//     })
//     .listen(port, (err) => {
//       if (err) throw err
//       console.log(`> Server listening at http://localhost:${port} [${dev ? 'dev' : 'prod'}]`)
//     })
// }

// start()

// server.ts
// import express from 'express'
// import next from 'next'
// import payload from 'payload'
// import config from './payload.config.js' // use .ts if running with tsx
// import dotenv from 'dotenv'

// dotenv.config()

// const PORT = parseInt(process.env.PORT || '7777', 10)
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// const start = async () => {
//   const server = express()

//   // Initialize Payload CMS
//   await payload.init({
//     config,
//     onInit: () => {
//       payload.logger.info(`✅ Payload Admin URL: ${payload.getAdminURL()}`)
//     },
//   })

//   // Mount Payload middleware
//   server.use(payload.express) // this handles /api and /admin internally

//   // Let Next.js handle all other requests
//   server.all('*', (req, res) => handle(req, res))

//   server.listen(PORT, () => {
//     console.log(`🚀 Server ready at http://localhost:${PORT} (${dev ? 'dev' : 'prod'})`)
//   })
// }

// // Start the combined server
// start()

// import path from 'path'
// import next from 'next'
// import nextBuild from 'next/dist/build'
// import express from 'express'
// import payload from 'payload'
// import { config as dotenv } from 'dotenv'

// dotenv({ path: path.resolve(__dirname, '../.env') })

// // Make Payload + Next aware of server URL
// process.env.PAYLOAD_PUBLIC_SERVER_URL = process.env.SERVER_URL
// process.env.NEXT_PUBLIC_SERVER_URL = process.env.SERVER_URL

// const dev = process.env.NODE_ENV !== 'production'
// const server = express()

// // ✅ Initialize Payload CMS with Express
// payload.init({
//   secret: process.env.PAYLOAD_SECRET_KEY || 'changeme',
//   mongoURL: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/o2_nutrition',
//   express: server,
//   onInit: () => {
//     payload.logger.info(`✅ Payload Admin ready at ${payload.getAdminURL()}`)
//   },
// })

// if (!process.env.NEXT_BUILD) {
//   const nextApp = next({ dev })
//   const nextHandler = nextApp.getRequestHandler()

//   nextApp.prepare().then(() => {
//     console.log('✅ Next.js ready')

//     // Catch-all → forward to Next
//     server.get('*', (req, res) => nextHandler(req, res))

//     server.listen(process.env.PORT || 7777, () => {
//       console.log(`🚀 Server listening on port ${process.env.PORT || 7777}`)
//     })
//   })
// } else {
//   // Special mode: build Next.js
//   server.listen(process.env.PORT || 7777, async () => {
//     console.log('🛠 Next.js is building...')
//     await nextBuild(path.join(__dirname, '../'))
//     process.exit()
//   })
// }

// import path from 'path'
// import next from 'next'
// import { build as nextBuild } from 'next/dist/build'
// import express from 'express'
// import payload from 'payload'
// import config from './payload.config.js' // or .ts if using tsx
// import { config as dotenv } from 'dotenv'

// dotenv({ path: path.resolve(__dirname, '../.env') })

// process.env.PAYLOAD_PUBLIC_SERVER_URL = process.env.SERVER_URL
// process.env.NEXT_PUBLIC_SERVER_URL = process.env.SERVER_URL

// const dev = process.env.NODE_ENV !== 'production'
// const server = express()

// const start = async () => {
//   // ✅ Init Payload v3 with config
//   await payload.init({
//     config,
//     express: server,
//     onInit: () => {
//       payload.logger.info(`✅ Payload Admin ready at ${payload.getAdminURL()}`)
//     },
//   })

//   if (!process.env.NEXT_BUILD) {
//     const nextApp = next({ dev })
//     const nextHandler = nextApp.getRequestHandler()

//     await nextApp.prepare()
//     console.log('✅ Next.js ready')

//     server.get('*', (req, res) => nextHandler(req, res))

//     server.listen(process.env.PORT || 7777, () => {
//       console.log(`🚀 Server listening on port ${process.env.PORT || 7777}`)
//     })
//   } else {
//     server.listen(process.env.PORT || 7777, async () => {
//       console.log('🛠 Next.js is building...')
//       await nextBuild(path.join(__dirname, '../'))
//       process.exit()
//     })
//   }
// }

// start()

// import { createServer } from 'http'
// import { parse } from 'url'
// import next from 'next'
// import httpProxy from 'http-proxy'

// const PORT = parseInt(process.env.PORT || '4000', 10) // Next.js port
// const PAYLOAD_PORT = parseInt(process.env.PAYLOAD_PORT || '7777', 10) // Payload API port
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// const apiProxy = httpProxy.createProxyServer()

// app.prepare().then(() => {
//   createServer((req, res) => {
//     const parsedUrl = parse(req.url, true)

//     if (parsedUrl.pathname?.startsWith('/api')) {
//       // Forward /api requests to Payload backend
//       apiProxy.web(req, res, { target: `http://localhost:${PAYLOAD_PORT}` })
//       return
//     }

//     // Otherwise, Next.js handles the request
//     handle(req, res, parsedUrl)
//   }).listen(PORT, () => {
//     console.log(`> Next.js server listening on http://localhost:${PORT}`)
//     console.log(`> Proxying /api to Payload at http://localhost:${PAYLOAD_PORT}`)
//   })
// })

// server.js
import express from 'express'
import payload from 'payload'
import config from './payload.config.js'

const PORT = process.env.PORT || 7777
const server = express()

// Initialize Payload CMS
await payload.init({
  config,
  express: server,
  onInit: () => {
    payload.logger.info(`✅ Payload Admin ready at ${payload.getAdminURL()}`)
  },
})

// Payload handles /api internally
server.use(payload.express)

server.listen(PORT, () => {
  console.log(`🚀 Payload API running on http://localhost:${PORT}`)
})
