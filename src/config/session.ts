import { SESSION_KEY } from '../gajah.json'
import session from 'express-session'

const sessionHandler = (): any => {
  return session({
    secret: SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: 'auto'
    }
  })
}

export default sessionHandler
