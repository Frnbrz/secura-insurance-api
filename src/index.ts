import cors from 'cors'
import express from 'express'
import { middleware } from './middleware/user.middleware'
import { clientesRouter } from './routes/clientes.router'
import { detalleRouter } from './routes/detalles.router'
import { loginRouter } from './routes/login.router'
import { renovacionesRouter } from './routes/renovaciones.router'
import { usersRouter } from './routes/users.router'

const URL = '/api/v1/'

// EXPRESS
const app = express()
app.use(cors())
app.use(express.json())

// CONFIG
const PORT = 3000

// ROUTES
app.get('/', (_req, res) => {
  res.send('Hola mndo!')
})

app.use(`${URL}login`, loginRouter)
app.use(`${URL}users`, middleware, usersRouter)
app.use(`${URL}clientes`, clientesRouter)
app.use(`${URL}renovaciones`, renovacionesRouter)
app.use(`${URL}detalles`, detalleRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
