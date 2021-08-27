
// import  List  from "./components-birth/List"
// import { useState } from 'react';
// import data from "./components-birth/data"



// // Birth Day 
// function App() {

//   const [people, setPeople] = useState(data)

//   const clear = () => {
//     setPeople([])
//   }
//     return (
//     <div className="App">
//       <h1>{people.length} BirthDay Today</h1>
//       <List people={people} />
//       <button onClick={clear}>Clear All</button>
//     </div>
//   );
// }

// export default App;

// Tours


import { useEffect, useState} from "react";
import { Loading } from "./tour-compo/Loading";
import { Tours } from "./tour-compo/Tours"
import './App.css';

const url = 'https://course-api.com/react-tours-project'

const App = () => {

  const [loading, setLoading] = useState(true)
  const [tours,setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  }

const fetchTours = async () => {
  setLoading(true);
  
  try {
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false)
    setTours(tours)
  } catch (error) {
  setLoading(false)
  console.log(error)
  }

  
  
}

useEffect (() => {
 fetchTours()
},[])

  if(loading) {
    return (
      <main>
      <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>No Tours Left</h2>
        <button className="btn" onClick={fetchTours}>Refresh</button>
      </div>
    </main>
  }
  return (
  <div>
     <Tours tours={tours} removeTour={removeTour} />
     </div>
  )
}

export default App;

