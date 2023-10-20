import { MYSQL } from '../gajah.json'
import { Sequelize } from 'sequelize'

export default class MySQLProvider {
  public sequelize: Sequelize

  constructor() {
    const db = MYSQL

    if (db) {
      this.sequelize = new Sequelize(db.NAME, db.USER, db.PASS, {
        dialect: 'mysql',
        host: db.HOST,
        port: db.PORT,
        logging: false,
      })
    } else {
      throw new Error('Database configuration not found.')
    }
  }

  public connect() {
    try {
      if (this.sequelize) {
        this.sequelize.authenticate()
        this.sequelize.sync({ alter: true })
        console.log('Connection has been established successfully.')
      } else {
        throw new Error('Sequelize instance not initialized.')
      }
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
  }

  public getConnection(): Sequelize {
    return this.sequelize
  }
}
