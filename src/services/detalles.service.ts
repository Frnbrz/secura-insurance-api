import detalle1Data from '../bd/detalle1.json'
import detalle2Data from '../bd/detalle2.json'
import { Detalle } from '../types/types'

const detalle1: Detalle = detalle1Data as Detalle
const detalle2: Detalle = detalle2Data as Detalle

async function getDetalleUno(): Promise<Detalle> {
  try {
    return detalle1
  } catch (error: any) {
    throw new Error(error.message)
  }
}

async function getDetalleDos(): Promise<Detalle> {
  try {
    return detalle2
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export { getDetalleDos, getDetalleUno }
