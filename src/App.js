import { useEffect ,useState } from 'react';
import './style/App.scss';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b2491d5367msh013dcdf60d12e82p1f09dcjsnbd34f56ba993',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function App() {
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState('');
  
  let listRandomMovies = ['Justice',
                      'Avengers', 
                      'furious',
                      'Harry%20Potter',
                      'Scream',
                      'High%20School%20Musical',
                      'Amazing',
                      'World',
                      'Happy',
                      'Black',
                      'war'];

  let searchMovie = listRandomMovies[getRandomNumber(0,11)] 
  
  console.log("renderizou")
  // console.log(search)
  // //console.log(url)
  // console.log(movies && movies)
  // console.log(movies && movies.Response)
 
  useEffect(() => {    

  let url = 'https://movie-database-alternative.p.rapidapi.com/?s='+searchMovie+'&r=json&page=1'

  if(search.length > 1){
    url = 'https://movie-database-alternative.p.rapidapi.com/?s='+search+'&r=json&page=1';
  }
    fetch(url, options)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(err => console.error(err));
  }, [search])

  return (
    <div className="App">
      <h3>🎥Movie0📺</h3>

      <input 
        name="search" 
        type="text" 
        placeholder="Buscar filme (em inglês please)" 
        onChange={e => setSearch(e.target.value)}
        value={search}
      />
      
      {movies && movies.Response == 'True' && movies.Search.map(item => {
        return (
          <ul key={item.imdbID}>
            <li key={item.Title}>{item.Title} - {item.Year}</li>
            <img src={item.Poster} alt={item.Title}/>
          </ul>
        )
      })}
    </div>
  );
}

export default App;
