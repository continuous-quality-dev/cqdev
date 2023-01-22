// import express from "express"
import { handler as ssrHandler } from "./dist/server/entry.mjs"
import PinoHttp from "pino-http"
import http from "node:http"
const logger = PinoHttp()
// const app = express()

// function handle(req, res) {
//   logger(req, res)
// }
// http.static("dist/client/")
const server = http.createServer(function (req, res) {
  logger(req, res)
  ssrHandler(req, res, async (err) => {
    if (err) {
      res.writeHead(500)
      res.end(err.toString())
    }
    //  else {
    //   const buffer = await middleware(req, res);

    //   if (buffer) {
    //     res.writeHead(200);
    //     res.end(buffer);
    //   } else {
    // Serve your other static assets or return 404
    res.writeHead(404)
    res.end()
    // }
    // }
  })
})
// server.use(handle)
// server.use()
// server.use(ssrHandler)

server.on("listening", () => {
  console.log("Ready")
})

server.listen(8080)
// app.use(handle)
// app.use(express.static("dist/client/"))
// app.use(ssrHandler)

// app.on("ready", () => {
//   const server = app.listen(8080)
//   console.log("Listening on port %d", server.address().port)
// })

// app.listen(8080)
