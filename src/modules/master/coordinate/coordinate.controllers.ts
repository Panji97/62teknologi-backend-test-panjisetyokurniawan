import { Request, Response } from 'express'
import ErrorHandler from '../../../modules/error'
import CoordinateService from './coordinate.service'

export default class CoordinateController extends ErrorHandler {
  private service: CoordinateService

  constructor() {
    super()
    this.service = new CoordinateService()
  }

  public create() {
    return async (req: Request, res: Response) => {
      try {
        const RESULT = await this.service.createCoordinate(req.body)

        return res.status(201).json({ message: true, result: RESULT })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }
}
