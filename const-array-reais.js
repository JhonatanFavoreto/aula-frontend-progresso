const precosEmReais = [10, 20, 30];
const precosEmDolares = precosEmReais.map(preco => preco * 5);
console.log(precosEmDolares);

const precosEmRublo = precosEmReais.map(preco => preco * 14.85);
console.log(precosEmRublo)
