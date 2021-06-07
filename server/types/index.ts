export type User = {
  id: number
  name: string
}

export type StayGet = {
  name: string
  count: number
}

export type StayUpsert = {
  count: number
  userId: number
  countryId: number
}
