import { useEffect, useState } from 'react'
import fbLogo from '/facebook-48.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  let [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/orgs/facebook/repos?per_page=5&page=1')
      .then(res => {
        console.log(res.data[0]);
        setData(res.data.map( item => {
          return {
            name: item.name,
            description: item.description,
            visibility: item.visibility,
            topics: item.topics            
          }
        }))
      }) 
      .catch( error => console.log("Something went wrong.", error))
      .finally( () => console.log("It's done!"))

  }, [])

  console.log(data);

  const initialData = data.map( item => {
    return(
      <div>
        <h1>{item.name}</h1>
        <h2>{item.description}</h2>
      </div>
    )
  })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={fbLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Week-4 Assignment4</h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          More {count}
        </button>
      </div>
    </>
  )
}

export default App
