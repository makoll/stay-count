import path from 'path'

import Fastify, { FastifyServerFactory } from 'fastify'
import cors from 'fastify-cors'
import helmet from 'fastify-helmet'
import fastifyJwt from 'fastify-jwt'
import fastifyStatic from 'fastify-static'

import server from '$/$server'
import { API_JWT_SECRET, API_BASE_PATH, API_UPLOAD_DIR } from '$/service/envValues'

export const init = (serverFactory?: FastifyServerFactory) => {
  const app = Fastify({ serverFactory })
  app.register(helmet)
  app.register(cors)
  app.register(fastifyStatic, {
    root: path.join(__dirname, 'static'),
    prefix: '/static/'
  })
  if (API_UPLOAD_DIR) {
    app.after(() => {
      app.register(fastifyStatic, {
        root: path.resolve(__dirname, API_UPLOAD_DIR),
        prefix: '/upload/',
        decorateReply: false
      })
    })
  }
  app.register(fastifyJwt, { secret: API_JWT_SECRET })
  server(app, { basePath: API_BASE_PATH })
  return app
}
