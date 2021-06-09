import { defineController } from './$relay'

import { getStays, upsertStay } from '$/service/user/stays'

export default defineController(() => ({
  get: async ({ params }) => {
    const stays = await getStays(params.userId)
    const body = stays.map((ss) => {
      return { name: ss.country?.name ?? '', count: ss.count }
    })
    return { status: 200, body }
  },
  put: async ({ body, params }) => {
    const userId = Number(params.userId)
    const upsert = { ...body, userId }
    await upsertStay(upsert)
    return { status: 204 }
  }
}))
