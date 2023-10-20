import { Router } from 'express'
import CategoryControllers from './category.controllers'

export default class CategoryRoutes {
  private router: Router
  private controller: CategoryControllers

  constructor() {
    this.router = Router()
    this.controller = new CategoryControllers()
  }

  routes(): Router {
    this.router.get('/v1/show', this.controller.show())
    this.router.post('/v1/create', this.controller.create())
    this.router.put('/v1/update/:id', this.controller.update())
    this.router.delete('/v1/delete/:id', this.controller.delete())

    return this.router
  }
}
