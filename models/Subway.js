const db = require('../db/config')
const Subway = {}

Subway.ShowAll = () => {
 return  db.query('SELECT * FROM subway')
}

Subway.findById = id => {
  return db.one('SELECT * FROM subway WHERE name = $1', [id])
}

 Subway.create = subwayObj => {
  return db.one(`
    INSERT INTO subway(name, oneride, express, card, oneridetrensfer, oneDayPass, threedaypass, sevendaypass,
    thirtydaypass, notes) VALUES($/name/, $/oneRide/, $/express/, $/card/, $/oneRideTrensfer/, $/OneDayPass/, $/threeDayPass/, $/sevenDayPass/,
    $/thirtyDayPass/, $/notes/) RETURNUNG *`, subwayObj)
}

Subway.update = (subwayObj, id) => {
  return db.one(`UPDATE subway SET
    oneride =$/oneRide/,
    express= $/express/,
    card = $/card/,
    oneridetransfer= $/oneRideTransfer/,
    onedaypass=$/oneDayPass/,
    threedaypass=$/threeDayPass/,
    sevendaypass=$/sevenDayPass/,
    thirtydaypass=$/thirtyDayPass/,
    notes=$/notes/, WHERE name=$2`, [subwayObj, id])
}

module.exports = Subway
