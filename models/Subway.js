const db = require('../db/config')
const Subway = {}

Subway.ShowAll = () => {
 return  db.query('SELECT * FROM subway')
}

Subway.findById = id => {
  return db.one('SELECT * FROM subway WHERE id = $1', [id])
}

Subway.create = subwayObj => {
  return db.one(`
    INSERT INTO subway(oneRide, DowntownExpress, card, oneRideTrensfer, OneDayPass, threeDayPass, sevenDayPass,
    thirtyDayPass, notes) VALUES($/oneRide/, $/DowntownExpress/, $/card/, $/oneRideTrensfer/, $/OneDayPass/, $/threeDayPass/, $/sevenDayPass/,
    $/thirtyDayPass/, $/notes/) RETURNUNG *`, subwayObj)
}
