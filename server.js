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

import http from 'http'
import { parse } from 'url'
import next from 'next'
import payload from 'payload'
import config from './payload.config.ts' // adjust if .ts

const port = parseInt(process.env.PORT || '7777', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const start = async () => {
  // Initialize Payload
  await payload.init({
    config,
    express: null, // we’ll let Payload hook into the HTTP server
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Prepare Next.js
  await app.prepare()

  // Create one HTTP server for both
  http
    .createServer((req, res) => {
      const parsedUrl = parse(req.url, true)

      // If the request starts with /api, hand it to Payload
      if (parsedUrl.pathname.startsWith('/api')) {
        return payload.expressMiddleware(req, res)
      }

      // Otherwise, let Next.js handle it
      return handle(req, res, parsedUrl)
    })
    .listen(port, (err) => {
      if (err) throw err
      console.log(`> Server listening at http://localhost:${port} [${dev ? 'dev' : 'prod'}]`)
    })
}

start()
