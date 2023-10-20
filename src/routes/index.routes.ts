import { Router, Request, Response } from 'express'

import MasterRoutes from './master.routes'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json({
    status: true,
    date: new Date(),
    result: 'REST API (Legacy)',
  })
})

router.use('/data', new MasterRoutes().routes())

export default () => router
