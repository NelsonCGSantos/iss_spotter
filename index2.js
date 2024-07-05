const { fetchMyIP } = require('./iss_promised');
const { fetchISSFlyOverTimes} = require('./iss_promised');
const { fetchCoordsByIP} = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


fetchMyIP()
  .then((ip) => fetchCoordsByIP(ip))
  .then((coords) => fetchISSFlyOverTimes(coords))
  .then(body => console.log(body));

nextISSTimesForMyLocation().then((passTimes) => {
  printPassTimes(passTimes);
});