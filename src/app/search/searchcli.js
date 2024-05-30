"use client"
import { useState } from "react";
import { find } from "./page";
// import '../Gone.css'

export function getValue() {
  return 'Hello, World!';
}




export default function Inputs(props) {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([]);

  const handleImageError = (event) => {
    event.target.style.display = 'none';
    event.target.style.position = 'relative';
  };


  const handleSearch = async () => {
    if (searchText) {
      const results = await find(searchText);
      console.log(results)
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  

    return (
      <div>
       
          <div className="searchBox">

            <input className="searchInput"type="text" name="" placeholder="Search" onKeyDown={handleKeyPress} onChange={e => setSearchText(e.target.value)}></input>
            <button onClick={handleSearch} className="searchButton" href="#">
            🔍
            </button>
          </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {searchResults.length > 0 && ( 
        <div className="image-search-container">
          {searchResults.map((item, index) => (
            <div key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
              alt={item.title}
              className="image-item"/>  
            <p className="search-title">{item.title.substring(0, 30) + "\n" + item.title.substring(30, 68) + "\n" + item.title.substring(68, 100)}</p>

            </div>



          ))}
        </div>
      )}
      </div>
    );
  }


