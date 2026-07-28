
const variavel1 = {
    categoria: "Batom",
    cor: "nude",
    preco: 37,
    quantidade: null,
    marca: "Oboticario"            
}

const variavel2 = {...variavel1};

variavel2.cor = "Azul";

console.log("Variavel 1: ", variavel1);
console.log("Variavel 2: ", variavel2);