
import React from 'react';
import { useState,useEffect } from 'react';
import CharacterCard from './CharacterCard';

import './styles/CharacterDisplay.css'



const Characterdispay = () => {
    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/get-info")
      .then(res => res.json() )
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(items);
          
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
                  <div className='character-display-wrapper'>

        {items.map(item => (
            <CharacterCard key={item.id} items={item}></CharacterCard>
   
        ))}
                </div>
      </>
    ); }} 
    export default Characterdispay;


//     const CharacterData = data.map(function(items){
//         return(<>
//             
//         </>)
//     })
//     return (
//    
//             {CharacterData}
//       
//     );
// }


