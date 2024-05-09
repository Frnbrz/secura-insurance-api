import {
  getDetalleDos,
  getDetalleUno,
  updateDetalleUno
} from '../services/detalles.service'
import { StatusType } from '../types/enums'

export const fetchDetalle1 = async (_req: any, res: any) => {
  const clientes = await getDetalleUno()
  res.send({ status: StatusType.OK, data: clientes })
}

export const fetchDetalle2 = async (_req: any, res: any) => {
  const clientes = await getDetalleDos()
  res.send({ status: StatusType.OK, data: clientes })
}

export const updateDetalle1 = async (req: any, res: any) => {
  const { id } = req.params
  const { body } = req
  const clientes = await updateDetalleUno(id, body)
  res.send({ status: StatusType.OK, data: clientes })
}
