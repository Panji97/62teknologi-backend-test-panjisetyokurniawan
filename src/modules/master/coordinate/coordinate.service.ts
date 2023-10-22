import { v4 as uuidv4 } from 'uuid'

import database from '../../../models'
import { businesscoordinateAttributes } from '../../../models/businesscoordinate'

export default class CoordinateService {
  public async createCoordinate(data: businesscoordinateAttributes) {
    try {
      const result = await database.businesscoordinate.create({
        ...data,
        id: uuidv4(),
      })

      return result
    } catch (error) {
      throw error
    }
  }

  public async showCoordinate() {
    try {
      const result = await database.businesscoordinate.findAll()

      return result
    } catch (error) {
      throw error
    }
  }
}
