import renovacionesData from '../bd/listado_renovaciones.json'
import { newRenovacionEntry, Renovaciones } from '../types/types'

const renovaciones: Renovaciones[] = renovacionesData as Renovaciones[]

async function getRenovaciones(
  page = 1,
  pageSize = 10,
  state?: string
): Promise<{
  data: Renovaciones[]
  totalPages: number
  totalItems: number
}> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100))
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    const totalPages = Math.ceil(renovaciones.length / pageSize)
    const totalItems = renovaciones.length

    if (state) {
      const filteredRenovaciones = renovaciones.filter(
        (renovacion) => renovacion.state === state
      )
    }

    return {
      data: renovaciones.slice(startIndex, endIndex),
      totalPages,
      totalItems
    } as {
      data: Renovaciones[]
      totalPages: number
      totalItems: number
    }
  } catch (error: any) {
    throw new Error(error.message)
  }
}

async function findRenovacionById(
  id: number
): Promise<Renovaciones | undefined> {
  try {
    const renovacion = renovaciones.find(
      (renovacion) => renovacion.nPolicy === id
    )
    return renovacion
  } catch (error: any) {
    throw new Error(error.message)
  }
}

async function addRenovacion(
  newRenovacionEntry: newRenovacionEntry
): Promise<Renovaciones> {
  const newRenovacion = {
    nPolicy: renovaciones.length + 1,
    ...newRenovacionEntry
  }

  renovaciones.push(newRenovacion)

  return newRenovacion
}

export { addRenovacion, findRenovacionById, getRenovaciones }
