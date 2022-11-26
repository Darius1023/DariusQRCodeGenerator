import { useState, useEffect } from 'react'
import styles from './Home.module.css'
import {urlWeather} from '../../endpoints.js';

export default function Home() {

  const [word , setWord] = useState("")
  const [qrCode, setQrCode] = useState("")
 
  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const response = await fetch(`${urlWeather}/WeatherForecast`);
    const data = await response.json();
    console.log({data});
  }

  const handleClick = (e)=> {
    e.preventDefault()
    setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${word}`)
    updateData();
    
  }

  const handleUpdateName = () => {
    // console.log('clicked')
    updateData();
    
  }

  const updateData = async () => {
    
    var bodyParams = JSON.stringify({
      "QRCode": word,
    
          

    });

    const response = await fetch(`${urlWeather}/WeatherForecast/UpdateUser`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: bodyParams
    })

    var data = await response.json();
    console.log(data);

  }
  
  return (
    <div>
       <h1>Welcome to Darius QRCode Generator</h1>
       <form onSubmit={handleClick}>
       <div className={styles['input-box']}>
          <label>
              <span>Enter Data</span>
              <input 
            type="text"
            onChange={(e)=> setWord(e.target.value)}
            value={word}
            required
              />
          </label>
          <button>Generate</button>
       </div>
       <div className={styles['output-box']}>
          <img src={qrCode} alt={word} />
       </div>
       </form>

       <br />

{/* 
      //  <button
      //           type="button"
      //           className=""
      //           onClick={() => handleUpdateName()}
      //         >
      //           Update User
      //         </button> */}
    </div>
  )
}
