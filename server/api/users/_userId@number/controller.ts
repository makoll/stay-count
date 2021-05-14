import { defineController } from './$relay'

import { getUser } from '$/service/user/user'

export default defineController(() => ({
  get: async ({ params }) => {
    const user = await getUser(params.userId)
    return { status: 200, body: user }
  }
}))
