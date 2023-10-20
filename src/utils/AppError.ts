export default class AppError extends Error {
  statuCode: any
  status: string
  isOperational: boolean
  constructor(message: any, statusCode: any) {
    super(message)

    this.statuCode = statusCode
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'
    this.isOperational = true

    Error.captureStackTrace(this, this.constructor)
  }
}
