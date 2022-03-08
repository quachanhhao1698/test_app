import React, { useState,useEffect } from 'react'

export default function LoadAPI() {

      const [error, setError] = useState(null);
      const [isLoaded, setIsLoaded] = useState(false);
      const [items, setItems] = useState([]);

      useEffect(()=> {
            fetch("https://rjs101xbackend.herokuapp.com/staffs")
            .then(res => res.json())
            .then(
                  (result) => {
                        setIsLoaded(true);
                        setItems(result);
                  },
                  (error) =>{
                        setIsLoaded(false);
                        setError(error)
                  }
            )
      },[])

      if(error) {
            return <div>Error: {error.message}</div>
      }else if(!isLoaded){
            return <div>Loading . . .</div>
      }else{
            return (
              <ul>
                    {items.map((item) => (
                          <li key={item.id}>
                                id: {item.id} -{item.name}
                                </li>
                    ))}
              </ul>
            )
      }
}
