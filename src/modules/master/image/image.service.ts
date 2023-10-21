import fs from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

import { businessimageAttributes } from '../../../models/businessimage'
import database from '../../../models'

export default class ImageService {
  public async createBusinessImage(data: businessimageAttributes) {
    try {
      const fileExtension = path.extname(data.url)
      const id = uuidv4()
      const filesName = `${id}${fileExtension}`

      const oldPath = path.join(__dirname, '../../../../public' + data.url)
      const newPath = path.join(__dirname, `../../../../public/img/${data.business_id}/` + filesName)

      const dir = path.join(__dirname, `../../../../public/img/${data.business_id}`)

      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

      fs.rename(oldPath, newPath, async (err) => {
        if (err) throw err
        else fs.unlink(oldPath, (err) => {})
      })

      const result = await database.businessimage.create({
        id: uuidv4(),
        business_id: data.business_id,
        url: `/img/${data.business_id}/${filesName}`,
      })

      return result
    } catch (error) {
      throw error
    }
  }

  public async showBusinessImage() {
    try {
      const data = await database.businessimage.findAll()

      let newData = []
      for (const result of data) {
        const object = {
          id: result.id,
          business_id: result.business_id,
          url: path.join(__dirname, '../../../../public' + result.url),
        }

        newData.push(object)
      }

      return newData
    } catch (error) {
      throw error
    }
  }
}
