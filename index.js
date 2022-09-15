const booksArr = [
    { bookName: 'Залежні від ненависті', bookAuthor: 'Ксана Рейлі', genre: 'Любовний роман', year: 2022 },
    { bookName: 'Дві грані', bookAuthor: 'Єва Басіста', genre: 'Трилер', year: 2021 },
    { bookName: 'Той що вижив', bookAuthor: 'Олександр Шаравар', genre: 'Фентезі', year: 2022 },
    { bookName: 'Перехрестя', bookAuthor: 'Маряна Доля', genre: 'Детектив', year: 2019 },
    { bookName: 'На роботу у філію Пекла', bookAuthor: 'Ганна Зюман', genre: 'Фентезі', year: 1997 },
    { bookName: 'Без права на помилку', bookAuthor: 'Ксана Рейлі', genre: 'Трилер', year: 2020 },
    { bookName: 'Мій дегустатор', bookAuthor: 'Холод Влада', genre: 'Трилер', year: 2021 },
    { bookName: 'Твій останній бій', bookAuthor: 'Ксана Рейлі', genre: 'Любовний роман', year: 1995 },
    { bookName: 'Місто дощу', bookAuthor: 'Богдан Государський', genre: 'Трилер', year: 2021 },
    { bookName: 'Світи під ногами', bookAuthor: 'Наталія Девятко', genre: 'Фентезі', year: 2021 },
];

let genresArr = [];
for (let genres of booksArr) { genresArr.push(genres.genre) };

let thrillerQ = genresArr.filter((thriller) => { return thriller === 'Трилер' });
let novelQ = genresArr.filter((novel) => { return novel === 'Любовний роман' });
let fantasyQ = genresArr.filter((fantasy) => { return fantasy === 'Фентезі' });
let detectiveQ = genresArr.filter((detective) => { return detective === 'Детектив' });

let x = Math.max(thrillerQ.length, novelQ.length, fantasyQ.length, detectiveQ.length)

let winArr = []
if (x === thrillerQ.length) {
    let w = booksArr.filter(x => x.genre === 'Трилер').map(x => x.bookName.toUpperCase());
    winArr.push(w);
} else if (x === novelQ.length) {
    let w = booksArr.filter(x => x.genre === 'Любовний роман').map(x => x.bookName.toUpperCase());
    winArr.push(w);
} else if (x === fantasyQ.length) {
    let w = booksArr.filter(x => x.genre === 'Фентезі').map(x => x.bookName.toUpperCase());
    winArr.push(w);
} else if (x === detectiveQ.length) {
    let w = booksArr.filter(x => x.genre === 'Детектив').map(x => x.bookName.toUpperCase());
    winArr.push(w);
};
console.log(winArr);    // Книги c наибольшим количеством одного вида жанра

let b20 = booksArr.filter(j => j.year < 2000).map(x => x.bookName);
let a20 = booksArr.filter(j => j.year > 2000).map(x => x.bookName);
console.log(b20);   // Книги написанные до XXI в.
console.log(a20);   // Книги написанные в XXI в.