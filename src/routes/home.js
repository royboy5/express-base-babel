'use strict'

import log from '../utils/logger'
import express from 'express'

const router = new express.Router()

router.get('/', (req, res) => {
  log.info('Accessed /')
  res.send('Home')
})

module.exports = router
