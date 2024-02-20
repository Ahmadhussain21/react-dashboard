import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

//import from files
import NavBar from './components/NavBar';
import ContentTab from './components/ContentTab';


function App() {
    //state to save data received from the server
    const [mainData, setMainData] = useState([]);    
    //asynchronous function to fetch data from server and updating the state
    const getDataFromDB = async() => {
        try{
            const response = await axios.get("http://localhost:4000/api/data/all");
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }
    //calling the above function on first render
    useEffect(()=>{
        getDataFromDB();
    },[])
    //where a state is updated, we will print the length of data received just for the test purposes
    useEffect(()=>{
      console.log(mainData.length)
    },[mainData])

  return (
    <div>
      <NavBar/>
      <ContentTab data={mainData} setMainData={setMainData} />
    </div>
  );
}

export default App;
