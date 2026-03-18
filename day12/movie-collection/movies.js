const movies = [];


let movie1 = {
    title: "인셉션",
    director: "크리스토퍼 놀란",
    year: 2010,
    genere: "드라마",
    rating: 8.8,
}
console.log(movie1);

let movie2 = {
    title: "피아니스트",
    director: "로이 티슨",
    year: 2002,
    genere: "드라마",
    rating: 8.6,
}

let movie3 = {
    title: "기생충",
    director: "봉준호",
    year: 2019,
    genere: "드라마",
    rating: 8.6,
}

movies.push(movie1);
movies.push(movie2);
movies.push(movie3);
movies.push({
    title: "어벤져스: 엔드게임",
    director: "로이 티슨",
    year: 2019,
    genere: "액션",
    rating: 8.6,
})

console.log(movies);



const printMovies = (movies) => {
    for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        console.log(movie);
        console.log(`${i + 1}. ${movie.title}`, `${movie.director}`)
    }
    console.log(`Totla Movies: ${movies.length}`)
}
