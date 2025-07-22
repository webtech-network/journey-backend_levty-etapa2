const produtos = [
    { titulo: 'Laptop', preco: 2000, categoria: 'Tecnologia', estoque: 15 },
    { titulo: 'Massinha', preco: 120, categoria: 'Infantil', estoque: 120 },
    { titulo: 'Kindle', preco: 300, categoria: 'Tecnologia', estoque: 64 },
    { titulo: 'Kit de Ferramentas', preco: 1100, categoria: 'Ferramentas', estoque: 3 },
    { titulo: 'Celular', preco: 2000, categoria: 'Tecnologia', estoque: 44 },
    { titulo: 'Código Limpo', preco: 80, categoria: 'Livros', estoque: 12 },
    { titulo: 'Arquitetura Limpa', preco: 80, categoria: 'Livros', estoque: 1 },
];

produtos.forEach((item, index) => {
    // Percorre todos os produtos do array
    produtos[index].estoque = item.estoque -= 1; // Diminui 1 unidade no estoque de cada item
});

const promocao = produtos.map((produto) => {
    // Cria um novo array com base nos produtos
    return {
        ...produto, // Copia todas as propriedades do produto
        preco: produto.preco / 2, // Altera o preço para metade do original
    };
});

// Cria um novo array apenas com os produtos da categoria "Tecnologia"
const preferencias = produtos.filter((produto) => produto.categoria === 'Tecnologia');

// Verifica se todos os produtos ainda têm estoque maior que 0
const isStockFull = produtos.every((produto) => produto.estoque > 0);

// Verifica se algum produto já está com estoque 0
const hasAnyOutOfStock = produtos.some((produto) => produto.estoque === 0);

// Retorna o objeto do produto cujo título é "Código Limpo"
const findBook = produtos.find((produto) => produto.titulo === 'Código Limpo');

// Retorna o índice (posição) do produto com título "Código Limpo"
const findBookIndex = produtos.findIndex((produto) => produto.titulo === 'Código Limpo');

console.log(produtos); // Exibe a lista de produtos atualizada no console
