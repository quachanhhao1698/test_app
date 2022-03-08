import React, { useState,useEffect } from 'react';

function formatDate(date){
      const hours = `0${date.getHours()}`.slice(-2);
      const minutes = `0${date.getMinutes()}`.slice(-2);
      const seconds = `0${date.getSeconds()}`.slice(-2);

      return `${hours}:${minutes}:${seconds}`
}

export default function Clock() {
      const [timeString, setTimeString] = useState('');
      useEffect(() => {
            const clockInterval = setInterval(() => {
                  const now = new Date();
                  // HH:MM:SS
                  const newTimeString = formatDate(now);
                  setTimeString(newTimeString);
            },1000);

            return () =>{
                  clearInterval(clockInterval);
            }
      },[]);

      return (
            <>
                  <h1 style={{color: "red",fontSize: "50px"}}>{timeString}</h1>
            </>
      )
}