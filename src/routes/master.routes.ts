import { Router } from 'express'

import BusinessRoutes from '../modules/master/business/business.routes'
import CategoryRoutes from '../modules/master/category/category.routes'
import ImageRoutes from '../modules/master/image/image.routes'
import UploadRoutes from '../modules/upload/upload.routes'
import CoordinateRoutes from '../modules/master/coordinate/coordinate.routes'
import LocationRoutes from '../modules/master/location/location.routes'

export default class MasterRoutes {
  private router: Router
  private business: BusinessRoutes
  private category: CategoryRoutes
  private image: ImageRoutes
  private upload: UploadRoutes
  private coordinate: CoordinateRoutes
  private location: LocationRoutes

  constructor() {
    this.router = Router()
    this.business = new BusinessRoutes()
    this.category = new CategoryRoutes()
    this.image = new ImageRoutes()
    this.upload = new UploadRoutes()
    this.coordinate = new CoordinateRoutes()
    this.location = new LocationRoutes()
  }

  routes(): Router {
    this.router.use('/business', this.business.routes())
    this.router.use('/category', this.category.routes())
    this.router.use('/image', this.image.routes())
    this.router.use('/upload', this.upload.routes())
    this.router.use('/coordinate', this.coordinate.routes())
    this.router.use('/location', this.location.routes())

    return this.router
  }
}
