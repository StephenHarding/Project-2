const express = require('express')
const authHelpers = require('../services/auth/auth-helpers');
const subwayRoutes = express.Router()
const subwayController = require('../controllers/subway-controller')
console.log(subwayController)
subwayRoutes.get('/:name/edit',authHelpers.loginRequired, subwayController.edit)
subwayRoutes.get('/',authHelpers.loginRequired, subwayController.index)
subwayRoutes.post('/',authHelpers.loginRequired, subwayController.create)
subwayRoutes.get('/add',authHelpers.loginRequired, (req, res)=> {
  res.render('subway/subway-add.ejs')
})
subwayRoutes.get('/:name',authHelpers.loginRequired, subwayController.show)


module.exports = subwayRoutes
