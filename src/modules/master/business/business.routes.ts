import { Router } from 'express'
import BusinessControllers from './business.controllers'

export default class BusinessRoutes {
  private router: Router
  private controller: BusinessControllers

  constructor() {
    this.router = Router()
    this.controller = new BusinessControllers()
  }

  routes(): Router {
    this.router.post('/v1/create', this.controller.create())
    this.router.get('/v1/show', this.controller.show())
    this.router.get('/v1/show/:id', this.controller.showDetails())
    this.router.put('/v1/update/:id', this.controller.update())
    this.router.delete('/v1/delete/:id', this.controller.delete())

    return this.router
  }
}
