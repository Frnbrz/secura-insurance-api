import { addUser, findUserById, getUsers } from '../services/user.services'
import { StatusMessage, StatusType } from '../types/enums'
import { toNewUserEntry } from '../utils/utils'

export const setUsers = async (_req: any, res: any) => {
  const users = await getUsers()
  res.send({ status: StatusType.OK, data: users })
}

export const setUserById = async (_req: any, res: any) => {
  const id = _req.params.id
  const user = findUserById(+id)

  return user !== undefined
    ? res.send({ status: StatusType.OK, data: user })
    : res
        .status(404)
        .send({ status: StatusType.NOT_FOUND, message: StatusMessage.USER })
}

export const createUser = async (_req: any, res: any) => {
  try {
    const newUserEntry = toNewUserEntry(_req.body)
    const addedUserEntry = addUser(newUserEntry)

    res.json(addedUserEntry)
  } catch (error: any) {
    res
      .status(400)
      .send({ status: StatusType.BADREQUEST, message: error.message })
  }
}
