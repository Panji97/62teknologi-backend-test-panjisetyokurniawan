import { Router } from 'express'
import { UploadController } from './upload.controllers'
import { MulterConfig } from '../../middlewares/files'

export default class UploadRoutes {
  private readonly router: Router
  private readonly controller: UploadController
  private readonly middleware: MulterConfig

  constructor() {
    this.router = Router()
    this.controller = new UploadController()
    this.middleware = new MulterConfig()
  }

  routes(): Router {
    this.router.post('/v1/image-single', this.middleware.getImageUpload(), this.controller.image())
    this.router.post('/v1/image-many', this.middleware.getImageUpload(), this.controller.imageMany())
    this.router.post('/v1/video-single', this.middleware.getVideoUpload(), this.controller.video())

    return this.router
  }
}
