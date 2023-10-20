import { v4 as uuidv4 } from 'uuid'
import database from '../../../models'
import { businesscategoryAttributes } from '../../../models/businesscategory'
import _ from 'lodash'

export default class CategoryService {
  public async showCategory() {
    try {
      const newData = await database.businesscategory.findAll()

      return newData
    } catch (error) {
      throw error
    }
  }

  public async createCategory(data: businesscategoryAttributes) {
    try {
      const dataAlias = _.kebabCase(_.lowerCase(data.alias))

      const newData = await database.businesscategory.create({
        ...data,
        id: uuidv4(),
        alias: dataAlias,
      })

      return newData
    } catch (error) {
      throw error
    }
  }

  public async updateCategory(data: businesscategoryAttributes, paramsId: string) {
    try {
      await database.businesscategory.update(
        {
          alias: data.alias,
          title: data.title,
        },
        {
          where: {
            id: paramsId,
          },
        }
      )

      return 'Success update category'
    } catch (error) {
      throw error
    }
  }

  public async deleteCategory(paramsId: string) {
    try {
      await database.businesscategory.destroy({
        where: {
          id: paramsId,
        },
      })

      return 'Success delete category'
    } catch (error) {
      throw error
    }
  }
}
