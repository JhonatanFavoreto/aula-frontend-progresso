const grausCelsius = [20, 40, 60];

const grausFahrenheit = grausCelsius.map((graus) => (graus * 9) / 5 + 32);

console.log(grausFahrenheit);
