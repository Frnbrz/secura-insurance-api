import { findClienteById, getClientes } from '../services/clientes.service'
import { StatusMessage, StatusType } from '../types/enums'

export const setClientes = async (_req: any, res: any) => {
  const clientes = await getClientes()
  res.send({ status: StatusType.OK, data: clientes })
}

export const setClienteById = async (_req: any, res: any) => {
  const id = _req.params.id
  const cliente = await findClienteById(+id)

  return cliente !== undefined
    ? res.send({ status: StatusType.OK, data: cliente })
    : res
        .status(404)
        .send({ status: StatusType.NOT_FOUND, message: StatusMessage.CLIENT })
}
