import React, {useState, useEffect} from "react";
import axios from "axios";


function Houses() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios.get('https://www.anapioficeandfire.com/api/houses')
      .then(response => {
        setHouses(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h1>Houses</h1>
      <h2 class="alignRight">
        <button><a href="/">Home Page</a></button>
      </h2>
      <div class="houseList">
      {houses.map((house) => <House name={house.name} region={house.region} currentLord={house.currentLord} swornMembers={house.swornMembers} />)}
      </div>
    </div>
  );
}

function House({name, region, currentLord, swornMembers}) {
  return(
    <div key={name}>
      <h2> Name : {name} </h2>
      <h2> Region: {region} </h2>
      <h2> Current Lord: {currentLord} </h2>
      <h2> Sworn Members: {swornMembers} </h2>
    </div>
  )
}


export default Houses;