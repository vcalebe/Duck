import { useEffect ,useState } from 'react';
import './style/App.scss';

const url = 'https://movie-database-alternative.p.rapidapi.com/?s=justice&r=json&type=movie&page=1';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b2491d5367msh013dcdf60d12e82p1f09dcjsnbd34f56ba993',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};


function App() {
  const [movies, setMovies] = useState();

  console.log("renderizou")

  useEffect(() => {
    fetch(url, options)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(err => console.error(err));
  }, [])

  const results = movies && movies.Search
  console.log(results && results)

  return (
    <div className="App">
      <h3>🎥Movie0📺</h3>
      {results && results.map(item => {
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
