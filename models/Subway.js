const db = require('../config/config')
const Subway = {}

Subway.ShowAll = () => {
 return  db.query('SELECT * FROM subway')
}

Subway.findById = id => {
  return db.one('SELECT * FROM subway WHERE name = $1', [id])
}

 Subway.create = subwayObj => {
  return db.one(`
    INSERT INTO subway(name, oneride, express, card, ridetransfer, oneDayPass, threedaypass, sevendaypass,
    thirtydaypass, notes) VALUES($/name/, $/oneRide/, $/express/, $/card/, $/RideTransfer/, $/OneDayPass/, $/threeDayPass/, $/sevenDayPass/,
    $/thirtyDayPass/, $/notes/) RETURNUNG *`, subwayObj)
}

Subway.update = (subwayObj, id) => {
  return db.one(`UPDATE subway SET
    oneride =$/oneRide/,
    express= $/express/,
    card = $/card/,
    ridetransfer= $/RideTransfer/,
    onedaypass=$/oneDayPass/,
    threedaypass=$/threeDayPass/,
    sevendaypass=$/sevenDayPass/,
    thirtydaypass=$/thirtyDayPass/,
    notes=$/notes/, WHERE name=$2`, [subwayObj, id])
}

module.exports = Subway
