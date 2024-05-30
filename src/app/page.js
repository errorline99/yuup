import Gone from './api';
export const runtime = 'edge';






const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTQ2MTI2M2ZmMzFhMGQ5ZjYzYTNjMjYzNGM4MzgxNSIsInN1YiI6IjY1YWMxNTQ4ZjI2M2JhMDBhZDg0MTBmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FdZIljZbFmb2i6pWPRyuFqOfbVqeDsJpGZnZo_2Umkg',
  },
  cache: 'no-cache',

  
};

const mostPopular = async () => {
  const e = await fetch(url, options)

  const pass = await e.json()
  var c = pass.results
  var first_name = "https://image.tmdb.org/t/p/w200"; 
  var titleRender = c.map((c) => c.title)
  var overview = c.map((c) => c.overview)
  var connet = c.map((c) =>  first_name.concat (c.poster_path))
  var idEd = c.map((c) =>  c.id)
  var array = [connet, idEd, titleRender, overview]

  return array

}









export default async function  Home  (req, res) {

  

 var cool = await mostPopular()

  return (<div >
    <Gone image={cool[0]} code={cool[1]} titles={cool[2]} summa={cool[3]} />
  </div>);
}

