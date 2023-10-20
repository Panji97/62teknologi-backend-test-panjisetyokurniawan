import { v4 as uuidv4 } from 'uuid'

import database from '../../../models'
import { businesscoordinateAttributes } from '../../../models/businesscoordinate'

export default class CoordinateService {
  public async createCoordinate(data: businesscoordinateAttributes) {
    try {
      await database.businesscoordinate.create({ ...data, id: uuidv4() })

      return 'Success create coordinate'
    } catch (error) {
      throw error
    }
  }
}
