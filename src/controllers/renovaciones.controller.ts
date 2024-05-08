import {
  addRenovacion,
  findRenovacionById,
  getRenovaciones
} from '../services/renovaciones.service'
import { StatusMessage, StatusType } from '../types/enums'
import { toNewRenovacion } from '../utils/utils'

export const setRenovaciones = async (_req: any, res: any) => {
  const renovaciones = await getRenovaciones()
  res.send({ status: StatusType.OK, data: renovaciones })
}

export const setRenovacionById = async (_req: any, res: any) => {
  const id = _req.params.id
  const renovacion = await findRenovacionById(+id)

  console.log(renovacion)
  if (!renovacion) {
    return res
      .status(404)
      .send({ status: StatusType.NOT_FOUND, message: StatusMessage.USER })
  }

  return renovacion !== undefined
    ? res.send({ status: StatusType.OK, data: renovacion })
    : res
        .status(404)
        .send({ status: StatusType.NOT_FOUND, message: StatusMessage.USER })
}

export const createRenovacion = async (_req: any, res: any) => {
  try {
    const newRenovacionEntry = await toNewRenovacion(_req.body)

    const addedRenovacionEntry = await addRenovacion(newRenovacionEntry)

    res.send({ status: StatusType.OK, data: addedRenovacionEntry })
  } catch (error: any) {
    res
      .status(400)
      .send({ status: StatusType.BADREQUEST, message: error.message })
  }
}
