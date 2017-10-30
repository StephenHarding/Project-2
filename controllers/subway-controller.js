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
  Subway.findById(req.params.id).then((returnSubway) =>{
    res.render('subway/subway-sinle', {
      data: returnSubway,
    })
  }).catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

module.exports = subwayController
