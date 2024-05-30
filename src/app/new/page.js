import Cliz from "./mainClient";




var first_name = "https://image.tmdb.org/t/p/w200"; 


const weekApi = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
const weekOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTQ2MTI2M2ZmMzFhMGQ5ZjYzYTNjMjYzNGM4MzgxNSIsInN1YiI6IjY1YWMxNTQ4ZjI2M2JhMDBhZDg0MTBmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FdZIljZbFmb2i6pWPRyuFqOfbVqeDsJpGZnZo_2Umkg',
    Cache: 'no-store'
  },

  

};



const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1+2';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTQ2MTI2M2ZmMzFhMGQ5ZjYzYTNjMjYzNGM4MzgxNSIsInN1YiI6IjY1YWMxNTQ4ZjI2M2JhMDBhZDg0MTBmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FdZIljZbFmb2i6pWPRyuFqOfbVqeDsJpGZnZo_2Umkg',
  },
  cache: 'no-store',
};


const rated = async () => {

    var get = await fetch(url, options)
    var rec = await get.json()
    var bac = rec.results
    var first_name = "https://image.tmdb.org/t/p/original"
    var gotItAll = bac.map((f) =>first_name.concat( f.poster_path))
    var backWall = first_name.concat(rec.results[0].backdrop_path)
    var wallDes = rec.results[0].overview
    var wallTitle = rec.results[0].title
    var kk = wallDes.substring(0, 48) 
    var bb = wallDes.substring(49, 144)
    var cc = wallDes.substring(144 , 210)
    var dd = wallDes.substring(210, 277)
    var ee = wallDes.substring(277, 3466)
    var ff = bac.map((c) => c.vote_average)
    var titles = bac.map((c) => c.title)
    var needs = [gotItAll, backWall, kk, bb, cc, dd, ee, wallTitle, titles, ff]
    needs[0].splice(17, 1)
    needs[0].splice(11, 1)
    needs[8].splice(11, 1)
    needs[8].splice(16, 1)

    return needs
}



const weekRated = async () => {
  var weekGet = await fetch(weekApi, weekOptions)
  var weekRec = await weekGet.json()
  var want =  weekRec.results
  var weekImg = want.map((c) => first_name.concat(c.poster_path))
  var weekTitle = want.map((c) => c.title )
  var weekScores = want.map((c) => c.vote_average)
  var wants = [weekImg, weekScores, weekTitle]

  wants[0].splice(16, 1)
  wants[2].splice(16, 1)

  return  wants
}



export default async function top(props){
    var getIt = await rated()
    var getweek = await weekRated()
    var weekImgs = getweek[0]
    var weekblight = getweek[1]
    var weekTi = getweek[2]
    var lineBreak = getIt[2]
    var lineBreak2 = getIt[3]
    var lineBreak3 = getIt[4]
    var lineBreak4 = getIt[5]
    var lineBreak5 = getIt[6]
    var lineBreak6 = getIt[7]
    var score = getIt[9]





    return(
        <div className="kkl">
            <div className="box-man">
            <img className="back-img" src={getIt[1]} alt={""}/>
            <p className="wallTitle">{lineBreak6} </p>
            </div>
            <br />
            <div className="hii-con">
              <div>
                <h3 className="hii-cli">All time Movies</h3></div>
            </div>
  
            <div className="image-flask">
              {getIt[0].map((user, index) => <div key={index} className="image-wrapper">
            <img className='try' id={'' +index} src={user} alt={""}/>
            <p className="image-name"></p>
            <div className="star-line">
              <span className="stars"></span>
            </div>

            
            <div>
            </div>
          </div>
          )}
            </div>

            <div className="week-block">
              <h3 className="week">Weekly Trending</h3>
            </div>

            <div className="imgae-flask-week">
            {weekImgs.map((user, index) => <div key={index} className="image-wrapper">
            <img className='try' id={'' +index} src={user} alt={""}/>
            <p className="image-title"></p>
            <div className="star-line">
              <span className="westars"></span>
            </div>
          </div>
          )}
            </div>

          <Cliz point={score}  name={getIt[8]} weekFlash={weekblight} weekName={weekTi}/>
        </div>
    )
}
