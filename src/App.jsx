import './App.css'
import LineChart from './Components/DaisyNav/LineChart/LineChart';
import PriceOptions from './Components/DaisyNav/PriceOptions/PriceOptions';
import Navber from './Components/DaisyNav/Navber/Navber';
import DaisyNav from './Components/DaisyNav/DaisyNav'



function App() {
 

  return (
    <>
     <div>
     <Navber></Navber>
    {/*<DaisyNav></DaisyNav>*/}
     <PriceOptions></PriceOptions>
     <LineChart></LineChart>
      </div> 
    </>
  )
}

export default App
