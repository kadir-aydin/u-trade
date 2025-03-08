import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app: Express = express()
const port = 8080

app.get('/', (_req: Request, res: Response) => {
  let message = "We successfully hit Kadir's backend"
  res.send(message)
})

app.listen(port, () => {
  console.log('Server in http://localhost:' + port)
})
