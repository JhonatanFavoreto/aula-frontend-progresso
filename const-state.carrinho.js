const item = [
    { preco: 10, quantidade: 2 },
    { preco: 5, quantidade: 3 },
    { preco: 2, quantidade: 4 },
];

const totalCarrinho = item.reduce((total, item) => {
    return total + (item.preco * item.quantidade);
}, 0);

console.log(totalCarrinho);
