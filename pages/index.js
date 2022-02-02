import Display from './../components/major/display';

export default function Home() {
  const data = [
    {
      title: 'The Shawshank Redemption',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        'Two imprisoners in the gloomy jail of Shawshank are released when they are determined to repay an amount of money borrowed from their long-term inmate, despite the both of them having a long history of mental illness.',
      genre: 'Drama',
      rating: '9.3',
      director: 'Frank Darabont',
      actors: [
        'Tim Robbins',
        'Morgan Freeman',
        'Bob Gunton',
        'William Sadler',
      ],
      language: 'English',
      releaseDate: '1994-09-23',
      duration: 142,
      trailer:
        'https://www.youtube.com/watch?v=6hB3S9bIaco',
    },
    {
      title: 'The Godfather',
      poster:
        'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg',
      description:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      genre: 'Drama',
      rating: '9.2',
      director: 'Francis Ford Coppola',
      actors: [
        'Marlon Brando',
        'Al Pacino',
        'James Caan',
        'Richard S. Castellano',
      ],
      language: 'English',
      releaseDate: '1972-03-24',
      duration: 175,
      trailer:
        'https://www.youtube.com/watch?v=sY1S34973zA',
    },
    {
      title: 'The Godfather: Part II',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg',
      description:
        'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
      genre: 'Drama',
      rating: '9.0',
      director: 'Francis Ford Coppola',
      actors: [
        'Al Pacino',
        'Robert De Niro',
        'Robert Duvall',
        'Diane Keaton',
      ],
      language: 'English',
      releaseDate: '1974-12-20',
      duration: 200,
      trailer:
        'https://www.youtube.com/watch?v=sY1S34973zA',
    },
    {
      title: 'The Dark Knight',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY268_CR3,0,182,268_AL_.jpg',
      description:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
      genre: 'Drama',
      rating: '9.0',
      director: 'Christopher Nolan',
      actors: [
        'Christian Bale',
        'Heath Ledger',
        'Aaron Eckhart',
        'Michael Caine',
      ],
      language: 'English',
      releaseDate: '2008-07-18',
      duration: 152,
      trailer:
        'https://www.youtube.com/watch?v=EXeTwQWrcwY',
    },
    {
      title: 'Inception',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      genre: 'Drama',
      rating: '9.0',
      director: 'Christopher Nolan',
      actors: [
        'Leonardo DiCaprio',
        'Joseph Gordon-Levitt',
        'Ellen Page',
        'Tom Hardy',
      ],
      language: 'English',
      releaseDate: '2010-07-14',
      duration: 148,
      trailer:
        'https://www.youtube.com/watch?v=8hP9D6kZseM',
    },
    {
      title:
        'The Lord of the Rings: The Return of the King',
      poster:
        'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        "Gandalf and Aragorn lead the World of stagecoach against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      genre: 'Drama',
      rating: '9.0',
      director: 'Peter Jackson',
      actors: [
        'Elijah Wood',
        'Viggo Mortensen',
        'Ian McKellen',
        'Orlando Bloom',
      ],
      language: 'English',
      releaseDate: '2003-12-17',
      duration: 201,
      trailer:
        'https://www.youtube.com/watch?v=r5X-hFf6Bwo',
    },
    {
      title:
        'The Lord of the Rings: The Fellowship of the Ring',
      poster:
        'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
      genre: 'Drama',
      rating: '9.0',
      director: 'Peter Jackson',
      actors: [
        'Elijah Wood',
        'Ian McKellen',
        'Viggo Mortensen',
        'Orlando Bloom',
      ],
      language: 'English',
      releaseDate: '2001-12-19',
      duration: 201,
      trailer:
        'https://www.youtube.com/watch?v=Pki6jbSbXIY',
    },
    {
      title:
        'The Lord of the Rings: The Two Towers',
      poster:
        'https://m.media-amazon.com/images/M/MV5BNWM1N2NmZjEtM2U3ZS00Yzg1LWJhNzYtMmZiYmExZDUyODU3XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
      genre: 'Drama',
      rating: '9.0',
      director: 'Peter Jackson',
      actors: [
        'Elijah Wood',
        'Ian McKellen',
        'Viggo Mortensen',
        'Orlando Bloom',
      ],
      language: 'English',
      releaseDate: '2002-12-18',
      duration: 201,
      trailer:
        'https://www.youtube.com/watch?v=Pki6jbSbXIY',
    },
    {
      title:
        'Star Wars: Episode V - The Empire Strikes Back',
      poster:
        'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        'After the rebels are brutally overpowered by the Empire on their newly established base, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.',
      genre: 'Drama',
      rating: '9.0',
      director: 'Irvin Kershner',
      actors: [
        'Mark Hamill',
        'Harrison Ford',
        'Carrie Fisher',
        'Peter Cushing',
      ],
      language: 'English',
      releaseDate: '1980-05-17',
      duration: 124,
      trailer:
        'https://www.youtube.com/watch?v=5UfA_aKBGMc',
    },
    {
      title:
        'Star Wars: Episode IV - A New Hope',
      poster:
        'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        'Luke Skywalker, Han Solo, Princess Leia, C-3PO, R2-D2 and droids C-3PO and R2-D2 are taken hostage by the evil Empire on their home planet of Tatooine. They are forced to flee the besieged Rebel base and face the sinister First Order.',
      genre: 'Science Fiction',
      rating: '9.0',
      director: 'George Lucas',
      actors: [
        'Mark Hamill',
        'Harrison Ford',
        'Carrie Fisher',
        'Peter Cushing',
      ],
      language: 'English',
      releaseDate: '1977-05-25',
      duration: 121,
      trailer:
        'https://www.youtube.com/watch?v=1g3_CFmnU7k',
    },
    {
      title:
        'Star Wars: Episode VI - Return of the Jedi',
      poster:
        'https://m.media-amazon.com/images/M/MV5BYmViN2NiYzItMzhlMy00YTk5LWEwZWQtZmQxM2UxZjBkYzNjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        'Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt. Meanwhile, rebel spies have returned from reconnaissance to aid the gang in attacking the cluthes of the Empire.',
      genre: 'Science Fiction',
      rating: '9.0',
      director: 'George Lucas',
      actors: [
        'Mark Hamill',
        'Harrison Ford',
        'Carrie Fisher',
        'Peter Cushing',
      ],
      language: 'English',
      releaseDate: '1983-05-25',
      duration: 124,
      trailer:
        'https://www.youtube.com/watch?v=5UfA_aKBGMc',
    },
    {
      title: 'Conjuring',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTUxMzc3NzQyMV5BMl5BanBnXkFtZTgwNjQ2NzEwNzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.',
      genre: 'Horror',
      rating: '9.0',
      director: 'James Wan',
      actors: [
        'Holly Hunter',
        'Kurt Russell',
        'Vera Farmiga',
        'Patrick Wilson',
      ],
      language: 'English',
      releaseDate: '2013-09-09',
      duration: 101,
      trailer:
        'https://www.youtube.com/watch?v=5UfA_aKBGMc',
    },
    {
      title: 'The Shining',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMzA1NjQ2OTE4MV5BMl5BanBnXkFtZTgwNDQ4NTMxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
        "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
      genre: 'Horror',
      rating: '9.0',
      director: 'Stanley Kubrick',
      actors: [
        'Jack Nicholson',
        'Shelley Duvall',
        'Danny Lloyd',
        'Scatman Crothers',
      ],
      language: 'English',
      releaseDate: '1980-07-21',
      duration: 142,
      trailer:
        'https://www.youtube.com/watch?v=5UfA_aKBGMc',
    },
  ];
  return (

    <div className='flex scrollbar-hide font-josefin text-white  bg-slate-900 w-full h-full justify-center  items-center '>
     <Display data={data} />
    </div>
  );
}
