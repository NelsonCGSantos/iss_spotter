const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('70.64.52.116', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});
