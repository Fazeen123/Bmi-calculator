import { useState } from 'react'
import './App.css'
import bmimage from "/Images/Bmi-image1.jpg"


function App() {
  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [bmi,setBmi]=useState(null);
  const [result,setResult]=useState("");
  const [err,setErr]=useState("");
  
  
  const BmiCalculation = ()=>{
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if(isValidHeight && isValidWeight){
      const h=height/100;
      const bmiVal=weight/(h*h);
      setBmi(bmiVal.toFixed(2));

      if(bmiVal<18.5){
        setResult("Under Weight");
      }else if(bmiVal>=18.5 && bmiVal<24.9){
        setResult("Normal Weight");
      }else if(bmiVal>=25 && bmiVal<29.9){
        setResult("Over Weight");        
      }else{
        setResult("Obese");
      }
      setErr("");

    }else{
      setBmi(null);
      setResult("");
      setErr("Error : Height and Weight are Incorrect");
    }
  };
  const Clear = ()=>{
    setHeight("");
    setWeight("");
    setBmi(null);
    setResult("");
  }

  return (
    <>
    <div className='Outter'>
    <div className='Main-containor'>
      <div className='Image-containor'>

      </div>
      <div className='Content'>
        <div className='heading'>BMI Calculator</div>
        <div className='err-msg'>{err}</div>
        <label htmlFor="height">Height (cm): </label>
        <input type="text"  id='height' value={height} onChange={(e)=>{setHeight(e.target.value)}}/>
        <label htmlFor="weight">Weight (kg): </label>
        <input type="text" id='weight' value={weight} onChange={(e)=>{setWeight(e.target.value)}}/>
        <div className='Btn'>
        <button className='Cal' onClick={BmiCalculation}>Calculate</button>
        <button className='Clear' onClick={Clear}>Clear</button>
        </div>
        {bmi!==null &&(<div className='Result-box'>
          <div className='Result-value'>Bmi value : {bmi}</div>
          <div className='Result-status'>Status for Bmi : {result}</div>
        </div>)}
      </div>
      
    </div>
    <footer>Design by<div> Fazeen</div></footer>
    </div>
    </>
  )
}

export default App
