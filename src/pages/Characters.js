import React, {useState, useEffect} from "react";
import axios from "axios";


function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://www.anapioficeandfire.com/api/characters')
      .then(response => {
        setCharacters(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <h2 class="alignRight">
        <button><a href="/">Home Page</a></button>
      </h2>
      <div class="characterList">
      {characters.map((character) => <Character name={character.name ? character.name : character.aliases} gender={character.gender} culture={character.culture}/>)}
      </div>
    </div>
  );
}

function Character({name, gender, culture}) {
  return(
    <div key={name}>
      <h2> Name : {name} </h2>
      <h2> Gender: {gender} </h2>
      <h2> Culture : {culture} </h2>
    </div>
  )
}

export default Characters;