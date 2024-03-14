import { useEffect, useState } from 'react'

import './App.css'
import Watch from './components/Watch/Watch'

function App() {
//  backend ar api ready na hole amra kichu fake local api baniye nibo
  // const Watches= [
  //   {id  : 1 , name : 'apple watch' , price: 300 },
  //   {id  : 2, name : 'orange watch', price: 400 },
  //   {id  : 3, name : 'lemon watch', price: 500 },
  //   {id  : 4, name : 'banana watch', price: 600 },
  //   {id  : 5, name : 'watermelon watch', price: 700 },
  // ]


  // chat gpt diye customized json data create korbo tarpor useState () and for each mere kaj korbo jodi backend ar api ready na theke
   const [watches , setWatches] = useState([]);
   useEffect(()=>{
    fetch('watchs.json')
    .then(res=>res.json())
    .then(data => setWatches(data));
   },[])
  return (
    <>
      
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }

  
    </>
  )
}

export default App
