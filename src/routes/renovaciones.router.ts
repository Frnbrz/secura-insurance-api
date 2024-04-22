import express from 'express'
import {
  createRenovacion,
  setRenovacionById,
  setRenovaciones
} from '../controllers/renovaciones.controller'

export const renovacionesRouter = express.Router()

renovacionesRouter.get('/', setRenovaciones)

renovacionesRouter.get('/:id', setRenovacionById)

renovacionesRouter.post('/', createRenovacion)
