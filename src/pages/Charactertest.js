import {useState, useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {CgGenderMale, CgGenderFemale} from "react-icons"

import {LoadingContext} from "../../context/LoadingProvider";

function Characters() 
{
   const [characters, setCharacters] = useState([])
   const {enableLoading, disableLoading} = useContext(LoadingContext);
   
   useEffect(() => {
    async function getCharacters() {
    const response = await axios.get('https://www.anapioficeandfire.com/api/characters');
    setCharacters(response.data);
   }
   getCharacters()
}, []
);


return (
    <div>
      <div>
        {
          characters.map(
            (character, index) =>
              <div
                key={index}
                className={styles["character"]}
              >
                <div
                  className={styles["character__genderContainer"]}
                  onClick={(event) => handleClickOfGenderContainer(event, index)}
                >
                  {
                    character.gender === "Male"
                    ?
                    <div
                      src={spacecraft.pictureUrl}
                      alt={`The spacecraft ${spacecraft.name}`}
                      className={styles["spacecraft__image"]}
                    />
                    :
                    <span className={styles["spacecraft__image--default"]}>🚀</span>
                  }
                </div>

                <div className={styles["spacecraft__infoContainer"]}>
                  <div className={styles["spacecraft__info"]}>
                    <span>Name:</span>
                    <span>{spacecraft.name}</span>
                  </div>

                  <div className={styles["spacecraft__info"]}>
                    <span>Capacity:</span>
                    <span>{spacecraft.capacity}</span>
                  </div>
                </div>
              </div>
          )
        }
      </div>
    </div>
  );
}