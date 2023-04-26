const add: (a: number, b: number) => number = (a: number, b: number) => {
   return a + b;
}

const subtract = (a: number, b: number): number => {
  return a - b;
}

function multiply(a: number, b: number): number{
  return a * b;
}

const divide = function(a: number, b: number): number {
  return a / b;
}

const todayWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: {date: Date, weather: string}):void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

const logWeather2 = ({date, weather}: {date: Date, weather: string}):void => {
  console.log(date);
  console.log(weather);
}

logWeather2(todayWeather);