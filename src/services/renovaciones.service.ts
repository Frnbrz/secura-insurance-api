import renovacionesData from '../bd/listado_renovaciones.json'
import { newRenovacionEntry, Paginated, Renovaciones } from '../types/types'

const renovaciones: Renovaciones[] = renovacionesData as Renovaciones[]

async function getRenovaciones(query: {
  page: string
  pageSize: string
  searchBy?: string[]
  sortBy?: string[]
}): Promise<Paginated<Renovaciones>> {
  try {
    const searchBy: string[] = []
    const sortBy: string[] = []
    const page = parseInt(query.page as string) || 1
    const pageSize = parseInt(query.pageSize as string) || 10
    await new Promise((resolve) => setTimeout(resolve, 100))
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    let totalPages = 0
    let totalItems = 0
    const searchByMap = new Map<string, string>()
    const sortByMap = new Map<string, string>()

    if (query.searchBy) {
      const params = (
        !Array.isArray(query.searchBy) ? [query.searchBy] : query.searchBy
      ) as string[]
      for (const param of params) {
        if (typeof param === 'string') {
          searchBy.push(param)
        }
      }
    }
    if (query.sortBy) {
      const params = (
        !Array.isArray(query.sortBy) ? [query.sortBy] : query.sortBy
      ) as string[]
      for (const param of params) {
        if (typeof param === 'string') {
          sortBy.push(param)
        }
      }
    }

    searchBy.forEach((param) => {
      const [key, value] = param.split(':')
      searchByMap.set(key, value)
    })

    // sortBy = ['campo:asc', 'campo2:desc']
    // mayor prioridad al primer campo y asi sucesivamente

    /**
     * TODO:
     * Como un sql, primero te traes todo luego where(filtros) y por ultimo order by(sorting) y limit/offset(paginacion)
     * Ver que filtros vienen
     * si exsite se filtra
     * por ultimo se pagina
     * renovaciones?searchBy:state=pendiente&page=1&pageSize=10&searchBy:name=Jose
     *
     * searchBy:[nombre]?campo=valor
     *
     * sortBy:[nombre]?campo=asc|desc,campo2=asc|desc
     *
     * /api/v1/renovaciones?searchBy:state=pendiente&page=1&pageSize=10&searchBy:name=Jose
     *
     * 
     * amountSort?: 'asc' | 'desc'
  nPolicy?: string
  riskName?: string
  dateValid?: string
  amoutCantity?: number
  state?: string
     */

    // if (state) {
    //   const filteredRenovaciones = renovaciones.filter(
    //     (renovacion) => renovacion.state === state
    //   )
    // }

    sortBy.forEach((param) => {
      const [key, value] = param.split(':')
      sortByMap.set(key, value)
    })

    console.log('searchByMap', searchByMap)
    console.log('sortByMap', sortByMap)

    let filteredRenovaciones = [...renovaciones]

    searchByMap.forEach((value, key) => {
      filteredRenovaciones = filteredRenovaciones.filter(
        (renovacion) => renovacion[key as keyof Renovaciones] == value
      )
    })

    totalPages = Math.ceil(filteredRenovaciones.length / pageSize)
    totalItems = filteredRenovaciones.length

    let sortedRenovaciones = [...filteredRenovaciones]

    sortByMap.forEach((value, key) => {
      sortedRenovaciones = sortedRenovaciones.sort((a, b) => {
        if (value === 'asc') {
          return a[key as keyof Renovaciones] > b[key as keyof Renovaciones]
            ? 1
            : -1
        } else {
          return a[key as keyof Renovaciones] < b[key as keyof Renovaciones]
            ? 1
            : -1
        }
      })
    })

    console.log('sortedRenovaciones', sortedRenovaciones)

    const paginatedRenovaciones = sortedRenovaciones.slice(startIndex, endIndex)

    return {
      data: paginatedRenovaciones,
      totalPages,
      totalItems
    }
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
