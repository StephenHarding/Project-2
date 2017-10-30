const express = require('express')

const subwayRoutes = express.Router()
const subwayController = ('../controllers/subway-controller')

subwayRoutes.get('/', subwayController.index)
subwayRoutes.get('/:id', subwayController.show)

module.exports = subwayRoutes
