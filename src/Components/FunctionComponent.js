import React, { useState,useEffect } from 'react';
import Clock from './clock';

export default function FunctionComponent(props) {
      let [count, setCount] = useState(0);
      let [showClock, setShowClock] = useState(true)
      let [user, setUser] = useState({
            name: 'Nguyễn Văn A',
            sdt: '123456'
      })
          
          const a= Number(props.a);
          const b = Number(props.b);
          const c = a + b

          const handleClick = () => {

            setCount((prevState) => {
                  return prevState +1
            });

            setUser((prevState) => {
                  return {
                        ...prevState,
                        name: "Trần Văn B",
                  }
            });
          }

          useEffect(()=> {
                document.title = `You click ${count} times`
          });


      
      return (
            <div>
                  <h1>Function Component</h1>
                  <h2>{count}</h2>
                  <button onClick={() => {handleClick()}}>Click me</button>
                  <h2>{props.a} + {props.b} = {c}</h2>
                  <h3>{JSON.stringify(user)}</h3>
                  { showClock && <Clock/>}
                  <button onClick={()=>{setShowClock(false)}}>hide</button>

                  <hr/>
            </div>
      );
}
