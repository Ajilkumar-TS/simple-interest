
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const[Principle, setPrinciple]=useState("")
  const[rate, setRate]=useState("")
  const[year, setYear]=useState("")
  const[interest, setInterest]=useState(0)
  const[isprinciple , setisprinciple]=useState(true)
  const[isRate ,setIsRate]=useState(true)
  const[isYear , setIsYear]=useState(true)
  
  const validate=(e)=>{
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(!!e.target.value.match('^[0-9]*$'));
    if(!!e.target.value.match('^[0-9]*$')){
      if(e.target.name=='Principle'){
        setPrinciple(e.target.value)
        setisprinciple(true)
      }else if(e.target.name=='Rate'){
        setRate(e.target.value)
        setIsRate(true)
      }else if(e.target.name=='Year'){
        setYear(e.target.value)
        setIsYear(true)

      }
    }else{
      if(e.target.name=='Principle'){
        setPrinciple(e.target.value)
        setisprinciple(false)
      }else if(e.target.name=='Rate'){
        setRate(e.target.value)
        setIsRate(false)
      }else if(e.target.name=='Year'){
        setYear(e.target.value)
        setIsYear(false)
    }
  }
  
}
  const handleReset =()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setisprinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
    
  }
  const handleCalculate =()=>{
    setInterest((Principle*rate*year)/100)
  }


    
  
  return (
    <>
     <div style={{height:'100vh'}} className='bg-dark w-100 d-flex justify-content-center align-items-center' >
      <div style={{width:'500px'}}className='p-5 bg-light rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple inerest Easly</p>
        <div style={{height:'150px'}}className='p-2 bg-warning rounded d-flex justify-content-center align-items-center flex-column'>
          <h1>
          ₹{interest}
        </h1>
        <p>Total simple intersest</p>
        </div>
        <div className="my-3"><TextField value={Principle} name='Principle' id="outlined-basic" label="₹ Principle amount" variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
          {!isprinciple && <span className='text-danger'>Invalid input</span>}
        </div>
        <div className="mb-3"><TextField value={rate} name='Rate' id="outlined-basic" label="Rate of interest (p.a)%" variant="outlined"  className='w-100' onChange={(e)=>validate(e)}/>
        {!isRate && <span className='text-danger'>Invalid input</span>}
        </div>
        <div className="mb-3"><TextField value={year} name='Year' id="outlined-basic" label="year(yr)" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
        {!isYear && <span className='text-danger'>Invalid input</span>}
        </div>
        <div className='mb-3 d-flex justify-content-between'>
      <Button disabled={isprinciple && isRate && isYear?false:true} onClick={handleCalculate} style={{width:'190px' , height:'60px'}} variant="contained" color='success'>calculate</Button>
      <Button onClick={handleReset}  style={{width:'190px', height:'60px'}} variant="outlined">Reset</Button>

      </div>
      </div>
     
      
     </div>
    </>
  )
}

export default App
