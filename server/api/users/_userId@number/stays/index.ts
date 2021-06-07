import type { StayGet, StayUpsert } from '$/types'

export type Methods = {
  get: {
    resBody: StayGet[]
  }
  put: {
    reqBody: Pick<StayUpsert, 'count' | 'countryId'>
  }
}
