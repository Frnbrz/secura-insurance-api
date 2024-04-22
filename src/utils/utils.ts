import bcrypt from 'bcrypt'
import { Role, ThrowError } from '../types/enums'
import { newLoginEntry, newRenovacionEntry, newUserEntry } from '../types/types'

export function toNewUserEntry(object: any): newUserEntry {
  const newUserEntry: newUserEntry = {
    name: parseName(object.name),
    email: parseEmail(object.email),
    description: parseDescription(object.description),
    role: parseRole(object.role),
    password: parsePassword(object.password)
  }

  return newUserEntry
}

export function toNewRenovacion(object: any): newRenovacionEntry {
  const newRenovacion: newRenovacionEntry = {
    riskName: parseName(object.riskName),
    contractDate: parseDate(object.contractDate),
    expirationDate: parseDate(object.expirationDate),
    amount: parseNumber(object.amount),
    state: parseState(object.state)
  }

  return newRenovacion
}

function parseState(stateFromRequest: any): string {
  if (!isString(stateFromRequest) || isUndefined(stateFromRequest)) {
    throw new Error(ThrowError.STATE)
  }

  return stateFromRequest
}

function parseNumber(numberFromRequest: number): number {
  if (isUndefined(numberFromRequest) || isNaN(numberFromRequest)) {
    throw new Error(ThrowError.NUMBER)
  }

  return numberFromRequest
}

function parseDate(dateFromRequest: any): string {
  if (!isString(dateFromRequest) || isUndefined(dateFromRequest)) {
    throw new Error(ThrowError.DATE)
  }

  return dateFromRequest
}

export function toNewLoginEntry(object: any): newLoginEntry {
  const newLoginEntry: newLoginEntry = {
    email: parseEmail(object.email),
    password: parsePassword(object.password)
  }
  return newLoginEntry
}

function isString(text: any): boolean {
  return typeof text === 'string' || text instanceof String
}

function isUndefined(text: any): boolean {
  return text === undefined
}

function parseName(nameFromRequest: any): string {
  if (!isString(nameFromRequest) || isUndefined(nameFromRequest)) {
    throw new Error(ThrowError.NAME)
  }

  return nameFromRequest
}

function parseEmail(emailFromRequest: any): string {
  if (!isString(emailFromRequest) || isUndefined(emailFromRequest)) {
    throw new Error(ThrowError.EMAIL)
  }

  return emailFromRequest
}

function parsePassword(passwordFromRequest: any): string {
  if (!isString(passwordFromRequest) || isUndefined(passwordFromRequest)) {
    throw new Error(ThrowError.PASSWORD)
  }

  const passwordEncrypt: string = encryptPassword(passwordFromRequest)

  return passwordEncrypt
}

function encryptPassword(password: string): string {
  const saltRounds = 10
  const passwordEncrypt = bcrypt.hashSync(password, saltRounds)

  return passwordEncrypt
}

function parseDescription(descriptionFromRequest: string): string {
  if (
    !isString(descriptionFromRequest) ||
    isUndefined(descriptionFromRequest) ||
    descriptionFromRequest === ''
  ) {
    throw new Error(ThrowError.DESCRIPTION)
  }

  return descriptionFromRequest
}

function parseRole(roleFromRequest: Role): Role {
  if (
    roleFromRequest === Role.admin ||
    roleFromRequest === Role.instructor ||
    roleFromRequest === Role.user ||
    roleFromRequest === Role.asistente ||
    isUndefined(roleFromRequest)
  ) {
    throw new Error(ThrowError.ROLE)
  }

  return roleFromRequest
}
