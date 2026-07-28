const meuCatalogo = [
    {
        nome: "Blue",
        preco: 100,
        categoria: "Musica",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROG4ZYBhzQ_MWjl5Rr5B2AaTYuqX-K50Sjvg-dIDdV9A&s=10"
    },
    {
        nome: "Rainy days",
        preco: 150,
        categoria: "Indie",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSBOGwLgpnul9NcNJhClc-Vw0LPa_nRJySyWObfYlJA&s=10"
    },
    {
        nome: "Slow dancing",
        preco: 200,
        categoria: "R&B",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJks2gBUuyx0JPEqDkLIgPtC4Sw7x22VF-mxqDchlxw&s=10"
    },
    {
        nome: "buttercup",
        preco: 250,
        categoria: "Pop",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQD9Jypdfb1kh9BCr87gyX7x1Xf3Murj9w8IktsH7BQ&s=10"
    },
    {
        nome: "remember the time",
        preco: 300,
        categoria: "Rock",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xyXu_ANW76CZwQdfCI47Q4xfGesXp-Hz0svxfdz3Wg&s=10"
    }


// Criando a função
const listarProdutos = (lista) => {
lista.forEach((produto) => {
        // Fazendo o destructuring (tirando os dados de dentro do objeto)
        const { nome, preco, categoria } = produto; 
        
        // Exibindo no console
        console.log(`Música: ${nome} | Preço: R$ ${preco} | Categoria: ${categoria}`);
    });
};

// Chamando a função e passando o seu catálogo como material de trabalho
listarProdutos(meuCatalogo);

]
