import renovacionesData from '../bd/listado_renovaciones.json'
import { newRenovacionEntry, Renovaciones } from '../types/types'

const renovaciones: Renovaciones[] = renovacionesData as Renovaciones[]

async function getRenovaciones(): Promise<Renovaciones[]> {
  try {
    return renovaciones
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
