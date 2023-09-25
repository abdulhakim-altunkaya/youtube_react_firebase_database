import React, {useState} from 'react';
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";

function Read() {

  let [fruitArray, setFruitArray] = useState([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "nature/fruits");
    const snapshot = await get(dbRef);
    if(snapshot.exists()) {
      setFruitArray(Object.values(snapshot.val()));
    } else {
      alert("error");
    }
  }

  return (
    <div>
      <button onClick={fetchData}> Display Data </button>
      <ul>
        {fruitArray.map( (item, index) => (
          <li key={index}> 
            {item.fruitName}: {item.fruitDefinition}
          </li>
        ) )}
      </ul>
    </div>
  )
}

export default Read