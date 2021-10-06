import React, { useState, useEffect } from 'react'; 
import './App.css';
import CardExampleCard from './Weather'
import  API_URL  from "./constant";

function App() {

  const [data, setData] = useState([]);
  const [location, setLocation] = useState("london"); 

  const fetchData = async () =>{
    await fetch(`http://api.weatherstack.com/current?access_key=0d2e05d174dec804d3198bf8a61c897c&query=${location}`)
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      setData(data); 
    })
  }

  useEffect(()=>{ 
    fetchData();
  },[location])

  const changeLocation = (e) => {
    console.log(e.target.value);
    setLocation(e.target.value);
    fetchData();
  }

  return (
    <div className="App">
      <input type="text" onChange={changeLocation} placeholder="Enter the city"/>
      {( data.length != 0) ? (<CardExampleCard weatherData={data}/>): (<div></div>)}
    </div>
  );
}

export default App;
