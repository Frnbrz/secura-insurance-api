import express from 'express'
import {
  fetchDetalle1,
  fetchDetalle2
} from '../controllers/detalles.controller'

export const detalleRouter = express.Router()

detalleRouter.get('/1', fetchDetalle1)
detalleRouter.get('/2', fetchDetalle2)
