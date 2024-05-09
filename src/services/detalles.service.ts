import detalle1Data from '../bd/detalle1.json'
import detalle2Data from '../bd/detalle2.json'
import { Detalle, OwnerData } from '../types/types'

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

async function updateDetalleUno(
  _id: string,
  body: OwnerData
): Promise<Detalle> {
  try {
    if (!body) {
      throw new Error('Clientes no encontrado')
    }

    if (body.cif === '123') {
      throw new Error('CIF no encontrado')
    }

    detalle1.ownerData.cif = body.cif || detalle1.ownerData.cif
    detalle1.ownerData.name = body.name || detalle1.ownerData.name
    detalle1.ownerData.surname = body.surname || detalle1.ownerData.surname
    detalle1.ownerData.phone = body.phone || detalle1.ownerData.phone
    detalle1.ownerData.email = body.email || detalle1.ownerData.email
    detalle1.ownerData.fiscalAddress =
      body.fiscalAddress || detalle1.ownerData.fiscalAddress
    detalle1.ownerData.state = body.state || detalle1.ownerData.state

    return detalle1
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export { getDetalleDos, getDetalleUno, updateDetalleUno }
