import { PrismaClient } from '@prisma/client'

import type { StayUpsert } from '$/types'
import type { User } from '$prisma/client'

const prisma = new PrismaClient()

export const getStays = (id: User['id']) =>
  prisma.stay.findMany({
    where: { userId: id },
    include: {
      country: true
    }
  })

export const upsertStay = (stay: StayUpsert) =>
  prisma.stay.upsert({
    where: { userId_countryId: { userId: stay.userId, countryId: stay.countryId } },
    update: stay,
    create: stay
  })
