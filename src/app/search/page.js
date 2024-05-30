import Outputs from "./searchser";
export const runtime = 'edge';







const searchUrl = `https://api.themoviedb.org/3/search/movie?query=harry&include_adult=false&language=en-US&page=1`;
const searchOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTQ2MTI2M2ZmMzFhMGQ5ZjYzYTNjMjYzNGM4MzgxNSIsInN1YiI6IjY1YWMxNTQ4ZjI2M2JhMDBhZDg0MTBmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FdZIljZbFmb2i6pWPRyuFqOfbVqeDsJpGZnZo_2Umkg'
  },

};



export const find = async (fish)  => {
    var search = await fetch(`https://api.themoviedb.org/3/search/movie?query=${fish}&include_adult=false&language=en-US&page=1`, searchOptions)
    var found = await search.json()
    var finished = found.results
    var imp = "https://image.tmdb.org/t/p/w200"

    return finished

}



export default async function Browse(props){
    const userRequest = await find()

    return(
        <div>
            <h1 className="no">browse</h1>
            <p className="no">{'userRequest'}</p>
            <Outputs  />
        </div>
    )

}
