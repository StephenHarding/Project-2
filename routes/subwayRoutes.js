const express = require('express')

const subwayRoutes = express.Router()
const subwayController = require('../controllers/subway-controller')
console.log(subwayController)
subwayRoutes.get('/:name/edit', subwayController.edit)
subwayRoutes.get('/', subwayController.index)
subwayRoutes.post('/', subwayController.create)
subwayRoutes.get('/add', (req, res)=> {
  res.render('subway/subway-add.ejs')
})
subwayRoutes.get('/:name', subwayController.show)


module.exports = subwayRoutes
