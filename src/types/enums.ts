export enum Role {
  admin = 'admin',
  instructor = 'instructor',
  user = 'user',
  asistente = 'asistente'
}

export enum StatusType {
  OK = 'OK',
  NOT_FOUND = 'NOT FOUND',
  BADREQUEST = 'BADREQUEST',
  UNAUTHORIZED = 'UNAUTHORIZED'
}

export enum StatusMessage {
  CLIENT = 'Client not found',
  USER = 'User not found',
  LOGIN = 'error at login',
  EMAIL = 'Email required',
  PASSWORD = 'Incorrect password'
}

export enum ThrowError {
  STATE = 'Incorrect or missing state',
  NUMBER = 'Incorrect or missing number',
  DATE = 'Incorrect or missing date',
  NPOLICY = 'Incorrect or missing policy',
  EMAIL = 'Email already exists',
  PASSWORD = 'Incorrect password',
  ROLE = 'Incorrect or missing role',
  DESCRIPTION = 'Incorrect or missing description',
  IMG = 'Incorrect or missing img',
  STOCK = 'Incorrect or missing stock',
  PRICE = 'Incorrect or missing price',
  NAME = 'Incorrect or missing name',
  ID = 'Incorrect or missing id',
  NOT_FOUND = 'User not found',
  NOT_FOUND_PRODUCT = 'Product not found',
  CATEGORY = 'Incorrect or missing category',
  PRODUCT = 'Incorrect or missing product'
}
