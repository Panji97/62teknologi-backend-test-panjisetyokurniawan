import { Router } from 'express'
import ImageControllers from './image.controllers'

export default class ImageRoutes {
  private router: Router
  private controller: ImageControllers

  constructor() {
    this.router = Router()
    this.controller = new ImageControllers()
  }

  routes(): Router {
    this.router.post('/v1/create', this.controller.create())
    this.router.get('/v1/show', this.controller.show())

    return this.router
  }
}
