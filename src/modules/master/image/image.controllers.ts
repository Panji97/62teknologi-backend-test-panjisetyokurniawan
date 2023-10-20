import { Request, Response } from 'express'
import ErrorHandler from '../../../modules/error'
import ImageService from './image.service'

export default class ImageControllers extends ErrorHandler {
  private service: ImageService

  constructor() {
    super()
    this.service = new ImageService()
  }

  public create() {
    return async (req: Request, res: Response) => {
      try {
        const RESULT = await this.service.createBusinessImage(req.body)

        return res.status(201).json({ message: true, result: RESULT })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public show() {
    return async (req: Request, res: Response) => {
      try {
        const RESULT = await this.service.showBusinessImage()

        return res.status(200).json({ message: true, result: RESULT })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }
}
