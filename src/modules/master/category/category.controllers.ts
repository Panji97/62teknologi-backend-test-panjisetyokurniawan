import { Request, Response } from 'express'
import ErrorHandler from '../../../modules/error'
import CategoryService from './category.service'

export default class CategoryControllers extends ErrorHandler {
  private service: CategoryService

  constructor() {
    super()
    this.service = new CategoryService()
  }

  public show() {
    return async (req: Request, res: Response) => {
      try {
        const RESULT = await this.service.showCategory()

        return res.status(200).json({ message: true, result: RESULT })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public create() {
    return async (req: Request, res: Response) => {
      try {
        const RESULT = await this.service.createCategory(req.body)

        return res.status(201).json({ message: true, result: RESULT })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public update() {
    return async (req: Request, res: Response) => {
      try {
        const RESULT = await this.service.updateCategory(req.body, req.params.id)

        return res.status(200).json({ message: true, result: RESULT })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public delete() {
    return async (req: Request, res: Response) => {
      try {
        const RESULT = await this.service.deleteCategory(req.params.id)

        return res.status(200).json({ message: true, result: RESULT })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }
}
