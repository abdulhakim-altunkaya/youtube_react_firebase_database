import React, {useState, useEffect} from 'react';
import app from "../firebaseConfig";
import { getDatabase, ref, get, set } from "firebase/database";
import { useParams, useNavigate } from 'react-router-dom';

function UpdateWrite() {
    const { firebaseId } = useParams();
    const navigate = useNavigate();

  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const db = getDatabase(app);
            const dbRef = ref(db, "nature/fruits/"+firebaseId);
            const snapshot = await get(dbRef);
            if(snapshot.exists()) {
              const targetObject = snapshot.val();
              setInputValue1(targetObject.fruitName);
              setInputValue2(targetObject.fruitDefinition);
            } else {
              alert("error");
            }
        }
        fetchData();
    }, [firebaseId])
    

  const overWriteData = () => {
    const db = getDatabase();
    set(ref(db, 'nature/fruits/'+firebaseId), {
        fruitName: inputValue1,
        fruitDefinition: inputValue2
    }).then(() => {
      alert('Data written successfully!');
    }).catch((error) => {
      alert('Failed to write data:', error);
    });
  };


  return (
    <div>

      <input type='text' value={inputValue1} 
      onChange={(e) => setInputValue1(e.target.value)}/> 

      <input type='text' value={inputValue2} 
      onChange={(e) => setInputValue2(e.target.value)}/> <br/>

      <button onClick={overWriteData}>UPDATE DATA</button>

    </div>
  )
}

export default UpdateWrite