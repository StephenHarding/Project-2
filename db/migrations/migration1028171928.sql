DROP TABLE IF EXISTS subway;
CREATE TABLE IF NOT EXISTS subway(
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  oneRide decimal(18,2),
  express decimal(18,2),
  card decimal(18,2),
  rideTransfer decimal(18,2),
  oneDayPass decimal(18,2),
  threeDayPass decimal(18,2),
  sevenDayPass decimal(18,2),
  thirtyDayPass decimal(18,2),
  notes TEXT
);
