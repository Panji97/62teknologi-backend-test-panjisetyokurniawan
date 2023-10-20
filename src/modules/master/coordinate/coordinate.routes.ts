import { Router } from 'express'
import CoordinateController from './coordinate.controllers'

export default class CoordinateRoutes {
  private router: Router
  private controller: CoordinateController

  constructor() {
    this.router = Router()
    this.controller = new CoordinateController()
  }

  routes(): Router {
    this.router.post('/v1/create', this.controller.create())

    return this.router
  }
}
