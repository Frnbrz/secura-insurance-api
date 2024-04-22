import express from 'express'
import { setClienteById, setClientes } from '../controllers/clientes.controller'

export const clientesRouter = express.Router()

clientesRouter.get('/', setClientes)

clientesRouter.get('/:id', setClienteById)
