import { Role } from './enums'

export interface User {
  id: number
  name: string
  email: string
  role: Role
  password: string
}

export interface Trainer {
  id: number
  name: string
  email: string
  description: string
  role: Role
  password: string
}

export interface Profesor {
  id: number
  name: string
  email: string
  description: string
  role: Role
  password: string
}

interface Clase {
  id: number
  name: string
  aforo: number
  horario: string[]
  profesor: number
  usuarios: number[]
}

export interface Cliente {
  id: number
  offerProduct: string
  personalData: {
    name: string
    surname: string
    email: string
    phone: string
  }
}

export interface Detalle {
  nPolicy: number
  riskName: string
  ownerData: OwnerData
  invoicingDepartment: InvoicingDepartment
  instalments: Instalment[]
  paymentMethod: PaymentMethod
  correspondenceAddress: CorrespondenceAddress
  contactData: ContactData
}

export interface OwnerData {
  name: string
  surname: string
  cif: string
  email: string
  phone: string
  fiscalAddress: string
  state: string
}

export interface InvoicingDepartment {
  address: string
  addressCode: string
  postalCode: string
  city: string
  country: string
}

export interface Instalment {
  issueDate: string
  startDate: string
  endDate: string
  amount: number
  state: string
}

export interface PaymentMethod {
  name: string
  cif: string
  type: string
  iban: string
  bank: string
}

export interface CorrespondenceAddress {
  name: string
  cif: string
  address: string
  postalCode: string
  city: string
  country: string
  addressCode: string
  detail: string
}

export interface ContactData {
  email: string
  email2: string
  phone: string
}

export interface Renovaciones {
  nPolicy: number
  riskName: string
  contractDate: string
  expirationDate: string
  amount: number
  state: string
}

export type newRenovacionEntry = Omit<Renovaciones, 'nPolicy'>

export type newUserEntry = Omit<User, 'id', 'password'>

export type newLoginEntry = Omit<User, 'id', 'name', 'role'>

export interface Product {
  id: number
  name: string
  category: string
  price: number
  stock: number
  img: string
}

export type newProductEntry = Omit<Product, 'id'>
