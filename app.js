const movies = require("./database")

//pegar o input

//Se for Sim, mostrar as categorias disponíveis, pergunta qyual categoria ela escolhe
//Se for não, mostrar todos os livros em ordem crescente pela quantidade de duração

const readline = require("readline-sync")

const firstEntry = readline.question("Do you want to search for a movie?Y/N")

if (firstEntry.toLocaleUpperCase() ==="Y") {
    console.log("These are the available categories:")
    console.log("/Documentary", "/Fantasy", "/Sci-Fiction", "/Adventure", "/Terror",)

    const entryCategory = readline.question("Which category do you chose:")

    const returning = movies.filter(movie => movie.category === entryCategory)

    console.table(returning)
} else{
    const  ordMovies = movies.sort((a,b)=>a.year - b.year)
    console.log("These are all the movies available:")
    console.table(ordMovies)
}