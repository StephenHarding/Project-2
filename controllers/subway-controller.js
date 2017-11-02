const Subway = require('../models/Subway')
const subwayController = {}

subwayController.index = (req, res) => {
  Subway.ShowAll().then((returnSubway) => {
  res.render('subway/subway-index' , {
    data: returnSubway,
  })
}).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

subwayController.show = (req, res) => {
  Subway.findById(req.params.name).then((returnSubway) =>{
    res.render('subway/subway-single', {
      data: returnSubway,
    })
  }).catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}
subwayController.create = (req, res) => {
  console.log('.create')
  Subway.create({
    name: req.body.name,
    oneRide: req.body.oneRide,
    express: req.body.express,
    card: req.body.card,
    RideTransfer: req.body.RideTransfer,
    oneDayPass: req.body.oneDayPass,
    threeDayPass: req.body.threeDayPass,
    sevenDayPass: req.body.sevenDayPass,
    thirtyDayPass: req.body.thirtyDayPass,
    notes: req.body.notes,
  }).then((returnSubway) => {
    res.send(returnSubway)
  }).catch(err=>{
    console.log(err)
    res.status(500).json(err)
  });
}

subwayController.edit = (req, res) => {
  Subway.findById(req.params.name).then(returnSubway =>{
    res.status(200).render('subway/subway-edit', {
      data: returnSubway,
    })
  }).catch(err=> {
    console.log(err);
    res.status(500).json({error: err})
  })
}
module.exports = subwayController
