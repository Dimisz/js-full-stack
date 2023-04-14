const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

const isHabitablePlanet = (planet) => {
  return planet['koi_disposition'] === 'CONFIRMED' 
        && planet['koi_insol'] > 0.36 
        && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
};

function loadPlanetsData(){
    return new Promise((resolve, reject) => {
      fs.createReadStream('kepler_data.csv')
      .pipe(parse({
        comment: '#',
        columns: true,
      })) // setting up the parser
      .on('data', (data) => {
        if(isHabitablePlanet(data)){
          habitablePlanets.push(data);
        }
      })
      .on('error', (err) => {
        console.log(err);
        reject(err);
      })
      .on('end', () => {
        console.log(`${habitablePlanets.length} habitale planets found`);
        resolve();
      });
   });
}


module.exports = {
  loadPlanetsData,
  planets: habitablePlanets,
};