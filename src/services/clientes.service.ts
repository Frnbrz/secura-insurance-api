import clientessData from '../bd/clientes_potenciales.json'
import { Cliente } from '../types/types'

const clientes: Cliente[] = clientessData as Cliente[]

async function getClientes(): Promise<Cliente[]> {
  try {
    return clientes
  } catch (error: any) {
    throw new Error(error.message)
  }
}

async function findClienteById(id: number): Promise<Cliente | undefined> {
  try {
    const cliente = clientes.find((cliente) => cliente.id === id)
    return cliente
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export { findClienteById, getClientes }
