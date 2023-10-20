import { mysqlClient } from '../config/database'
import { initModels } from './init-models'

const sequalize = mysqlClient.getConnection()
const database = initModels(sequalize)
export default database
