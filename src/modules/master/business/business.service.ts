import { Op } from 'sequelize'
import { v4 as uuidv4 } from 'uuid'

import database from '../../../models'
import { businessAttributes } from '../../../models/business'
import _ from 'lodash'

export default class BusinessService {
  public async createBusiness(data: businessAttributes) {
    try {
      const dataAlias = _.kebabCase(_.lowerCase(data.alias))

      const existBusiness = await database.business.findOne({
        where: {
          alias: dataAlias,
        },
      })

      if (existBusiness) {
        return 'Duplicate Business'
      }

      const newBusiness = await database.business.create({
        ...data,
        id: uuidv4(),
        alias: dataAlias,
      })

      return newBusiness
    } catch (error) {
      throw error
    }
  }

  public async showBusiness(limit: number, page: number, search?: any, sort?: any) {
    try {
      const offset = (page - 1) * limit

      const queryOptions: any = {
        offset,
        limit,
        include: [
          {
            model: database.businesscategory,
            as: 'businesscategories',
          },
          {
            model: database.businessimage,
            as: 'businessimages',
          },
          {
            model: database.businesscoordinate,
            as: 'businesscoordinates',
          },
          {
            model: database.businesslocation,
            as: 'businesslocations',
          },
        ],
      }

      if (search) {
        queryOptions.where = {
          [Op.or]: [
            { name: { [Op.like]: `%${search}%` } },
            { is_closed: { [Op.like]: `%${search}%` } },
            { rating: { [Op.like]: `%${search}%` } },
            { transactions: { [Op.like]: `%${search}%` } },
            { price: { [Op.like]: `%${search}%` } },
            { phone: { [Op.like]: `%${search}%` } },
            { disploy_phone: { [Op.like]: `%${search}%` } },
            { distance: { [Op.like]: `%${search}%` } },
            { '$businesscategories.title$': { [Op.like]: `%${search}%` } },
            { '$businesslocations.city$': { [Op.like]: `%${search}%` } },
          ],
        }
      }

      if (sort) {
        if (sort === 'name-asc') {
          queryOptions.order = [['name', 'ASC']]
        } else if (sort === 'name-desc') {
          queryOptions.order = [['name', 'DESC']]
        }
      }

      const { count, rows } = await database.business.findAndCountAll(queryOptions)

      const totalData = count
      const totalPage = Math.ceil(totalData / limit)

      const result = {
        page: {
          totalData,
          totalPage,
          currentPage: page,
          limit,
        },
        datas: rows,
      }

      return result
    } catch (error) {
      throw error
    }
  }

  public async showBusinessDetail(paramsId: string) {
    try {
      const data = await database.business.findOne({
        where: {
          id: paramsId,
        },
      })

      if (!data) throw new Error('Data business it not found')

      return data
    } catch (error) {
      throw error
    }
  }

  public async updateBusiness(data: businessAttributes, paramsId: string) {
    try {
      return await database.business.update({ ...data }, { where: { id: paramsId } })
    } catch (error) {
      throw error
    }
  }

  public async deleteBusiness(paramsId: string) {
    try {
      return await database.business.destroy({
        where: {
          id: paramsId,
        },
      })
    } catch (error) {
      throw error
    }
  }
}