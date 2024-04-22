import express from 'express'
import {
  createUser,
  setUserById,
  setUsers
} from '../controllers/users.controller'

export const usersRouter = express.Router()

usersRouter.get('/', setUsers)

usersRouter.get('/:id', setUserById)

usersRouter.post('/', createUser)
