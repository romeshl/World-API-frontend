import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetchData();
  },[])
  
  async function fetchData() {
    try {
      const response = await ((await fetch('http://localhost:4000')).json());
      setData(response);
    }
    catch (error) {
      console.log("Error occured :" + error);
      setData({});
    }
  }


  return (
    <div className='my-[100px] mx-auto w-[500px] p-[20px] border font-mono'>
      <h1 className="text-red-500 text-5xl underline">Countries</h1>
      { Object.entries(data).map((item, index) => {
        return (
          <div key={index} className="flex gap-3">
            <h1>{index + 1}</h1>
            <p>{item[1]['Name']}</p>
           </div>
        )
      })}
     </div>
  
  )
}

export default App
