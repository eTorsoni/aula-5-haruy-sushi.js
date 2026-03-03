let categorias = [
    { id: 1, nome: "Temaki" },
    { id: 2, nome: "Combinado" },
    { id: 3, nome: "Bebidas" },
    { id: 4, nome: "Sobremesa" },
];

let produtos = [
    { categoriaid: 1, nome: "Temaki Completo", preco: 35.50, descricao: "Temaki com salmão, atum, cream cheese e cebolinha.", imagem: "https://www.seara.com.br/wp-content/uploads/2025/09/R0625-SP-temaki-tradicional-1200x675-1.webp" },
    { categoriaid: 2, nome: "Combinado 20 Peças", preco: 45.00, descricao: "Combinado com 20 peças sortidas.", imagem: "https://kingtemaki.com.br/lojas/wp-content/uploads/2022/12/CLUB_kingtemaki_800x800_2022_LOGO.jpg" },
    { categoriaid: 3, nome: "Refrigerante", preco: 7.50, descricao: "Refrigerante Coca-Cola.", imagem: "https://andinacocacola.vtexassets.com/arquivos/ids/158051/Pack-6-Coca-Cola-Original-350ml.jpg?v=638507764518030000" },
    { categoriaid: 4, nome: "Pudim", preco: 10.00, descricao: "Pudim de leite condensado.", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAAEzABNRKSO-3vQeDHUfd8w7ZkB9h3sPBAw&s" },
];

module.exports = { categorias, produtos };