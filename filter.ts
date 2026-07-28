//filter.ts

const produtos: {
    categoria: string
    cor: string | null
    preco: number
    quantidade: number|null
    marca: string
} [] = [
    {
        categoria: "Batom",
        cor: "vermelho",
        preco: 30,
        quantidade: null,
        marca: "Oboticario"
    },
    {
        categoria: "Batom",
        cor: "nude",
        preco: 37,
        quantidade: null,
        marca: "Oboticario"
    },
    {
        categoria: "Perfume",
        cor: null,
        preco: 160,
        quantidade: 200,
        marca: "Oboticario"
    }
]