import { Request, Response, NextFunction } from 'express'

const catchAsync = (fn: (req: Request, res: Response) => Promise<void>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res).catch((error) => {
      // Tangani kesalahan di sini
      next(error)
    })
  }
}

export default catchAsync
