import { Request, Response } from 'express'
import ErrorHandler from '../../../modules/error'
import BusinessService from './business.service'

export default class BusinessControllers extends ErrorHandler {
  private service: BusinessService

  constructor() {
    super()
    this.service = new BusinessService()
  }

  public create() {
    return async (req: Request, res: Response) => {
      try {
        const RESULT = await this.service.createBusiness(req.body)

        return res.status(201).json({ message: true, result: RESULT })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public show() {
    return async (req: Request, res: Response) => {
      try {
        const { limit = 10, page = 1, search, sort } = req.query

        const RESULT = await this.service.showBusiness(Number(limit), Number(page), search, sort)

        return res.status(200).json({ message: true, result: RESULT })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public update() {
    return async (req: Request, res: Response) => {
      try {
        const RESULT = await this.service.updateBusiness(req.body, req.params.id)

        return res.status(200).json({ message: true, result: RESULT })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public delete() {
    return async (req: Request, res: Response) => {
      try {
        const RESULT = await this.service.deleteBusiness(req.params.id)

        return res.status(200).json({ message: true, result: RESULT })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }
}
