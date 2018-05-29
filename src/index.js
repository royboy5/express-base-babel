'use strict'

import log from './utils/logger'
import app from './app'
import dotenv from 'dotenv'

dotenv.config()

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.listen(port, host, log.info(`App listening at http://${host}:${port}`))
