import { Request, Response } from 'express'
import ErrorHandler from '../../../modules/error'
import LocationService from './location.service'

export default class LocationControllers extends ErrorHandler {
  private service: LocationService

  constructor() {
    super()
    this.service = new LocationService()
  }

  public create() {
    return async (req: Request, res: Response) => {
      try {
        const RESULT = await this.service.createLocation(req.body)

        return res.status(201).json({ message: true, result: RESULT })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }
}
