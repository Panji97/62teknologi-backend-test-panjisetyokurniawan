import { UploadService } from './upload.service'
import ErrorHandler from '../error'
import { type Request, type Response } from 'express'

export class UploadController extends ErrorHandler {
  private readonly service: UploadService

  constructor() {
    super()
    this.service = new UploadService()
  }

  public image() {
    return async (req: Request, res: Response) => {
      try {
        const RESULT = await this.service.uploadImage(req.files)

        return res.status(201).json({ message: true, result: RESULT })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public imageMany() {
    return async (req: Request, res: Response) => {
      try {
        const RESULT = await this.service.uploadImageMany(req.files)

        return res.status(201).json({ message: true, result: RESULT })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public video() {
    return async (req: Request, res: Response) => {
      try {
        const RESULT = await this.service.uploadVideo(req.files)

        return res.status(201).json({ message: true, result: RESULT })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }
}
