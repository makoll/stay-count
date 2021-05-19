import { User as DbUser } from '@prisma/client'

import { defineController } from './$relay'

import { User } from '$/entities'
import { getUser } from '$/service/user/user'

export default defineController(() => ({
  get: async ({ params }) => {
    const dbUser: DbUser | null = await getUser(params.userId)
    if (!dbUser) {
      return { status: 400 }
    }
    const user = new User({ id: dbUser.id, firstName: dbUser.firstName, lastName: dbUser.lastName })
    return { status: 200, body: user }
  }
}))
