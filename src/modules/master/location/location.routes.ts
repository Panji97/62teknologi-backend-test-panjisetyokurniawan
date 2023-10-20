import { Router } from 'express'
import LocationControllers from './location.controllers'

export default class LocationRoutes {
  private router: Router
  private controller: LocationControllers

  constructor() {
    this.router = Router()
    this.controller = new LocationControllers()
  }

  routes(): Router {
    this.router.post('/v1/create', this.controller.create())

    return this.router
  }
}
