import React, { useState } from 'react'

export const Mytime = () => {
    const mytime = new Date().toLocaleTimeString()

    const [time,setTime]=useState(mytime)

    const handletime = () =>{
        let newtime = new Date().toLocaleTimeString()
        setTime(newtime)
    }
    setInterval(handletime,1000)
  return (
    <>
      <h1>{time}</h1>
      <button onClick={handletime}>Get Time</button>
      </>
  )
}
