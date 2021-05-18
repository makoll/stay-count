import { defineController } from './$relay'

import { getStays } from '$/service/user/stays'

export default defineController(() => ({
  get: async ({ params }) => {
    const stays = await getStays(params.userId)
    const body = stays.map((ss) => {
      return { name: ss.country?.name ?? '', count: ss.count }
    })
    return { status: 200, body }
  }
}))
