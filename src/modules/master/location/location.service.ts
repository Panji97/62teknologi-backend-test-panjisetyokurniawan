import { v4 as uuidv4 } from 'uuid'

import database from '../../../models'
import { businesslocationAttributes } from '../../../models/businesslocation'

export default class LocationService {
  public async createLocation(data: businesslocationAttributes) {
    try {
      await database.businesslocation.create({ ...data, id: uuidv4() })

      return 'Success create location'
    } catch (error) {
      throw error
    }
  }
}
