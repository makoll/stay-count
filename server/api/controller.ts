import { defineController } from '$/api/$relay'

export default defineController(() => ({
  get: () => ({ status: 200, body: 'health check OK!' })
}))
