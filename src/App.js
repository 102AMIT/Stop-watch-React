import './App.css';
import {useState,useEffect} from 'react'
function App() {
  const [sec , setSec] = useState(0);
  const [min , setMin] = useState(0);
  const [hour , setHour] = useState(0);
  const [stop ,setStop] = useState(true);
 
  const startCounter = () =>{
    setStop(false);
    
    
  }
  const pauseCounter = () =>{
    setStop(true)
  }
  const clearCounter = () =>{
    setSec(0);
    setMin(0);
    setHour(0);
  }
  useEffect(()=>{
    let interval =null;
    if(!stop){
    interval=setInterval(()=>{
      if(hour === 12){
        window.alert("Press Ok..!")
        setSec(0);
        setMin(0);
        setHour(0);
      }
      if(min > 59){
        setHour(hour => hour+1);
        setMin(0);
      }
      if(sec > 59){
      setMin(min +1);
      console.log("object");
      setSec(0)
      }
      if(sec <=59){
        setSec(sec => sec +1);
      }

      },1000)
    }
    return () => clearInterval(interval)
  },[startCounter])
  
  return (
    <div className="App">
      <div className="container">
      <h1 style={{borderBottom:"5px solid yellowgreen "}}>Stop Watch </h1>
      <h1> H : M : S </h1>
      <h1> {hour} : {min}  : {sec} </h1>
      <div className="btn">
      <button class="button-64" role="button" onClick={startCounter}><span class="text">Start</span></button>
      <button class="button-64" role="button" onClick={pauseCounter}><span class="text">Pause</span></button>
      <button class="button-64" role="button" onClick={clearCounter}><span class="text">Clear</span></button>
      </div>
    </div>
    </div>
  );
}

export default App;
