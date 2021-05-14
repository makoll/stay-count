import { User, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUser = (id: User['id']) =>
  prisma.user.findUnique({
    where: { id }
  })
