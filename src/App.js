import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle, setPrinciple] = useState(0);
  const [interest, setInterest] = useState(0);
  const [year, setYear] = useState(0);
  const [result, setResult] = useState(0);
  const [isPrinciple, setIsPrinciple] = useState(true);
  const [isInterest, setIsInterest] = useState(true);
  const [isYear, setIsYear] = useState(true);
  const calculateInterest = (e) => {
    e.preventDefault();
    console.log("======Principle amount=======", principle)
    console.log("=====Interest======", interest)
    console.log("======Year=======", year)
    const result = (principle * interest * year) / 100;
    setResult(result)
    console.log("Total=", result)
  }
  const handleReset = () => {
    setPrinciple(0);
    setInterest(0);
    setYear(0);
    setResult(0);
  }
  const validate = (e) => {
    const { name, value } = e.target;

    // console.log(name, value)
    if (name === 'principlevalue') {
      setPrinciple(value)
      let res = (!!value.match(/^[0-9]+$/));
      // console.log(res)
      if (res === true) {
        setIsPrinciple(true)
      } else {
        setIsPrinciple(false)
      }
    } else if (name === 'interestField') {
      setInterest(value)
      let res = (!!value.match(/^[0-9]+$/));
      // console.log(res)
      if (res === true) {
        setIsInterest(true)
      } else {
        setIsInterest(false)
      }
    } else {
      setYear(value);
      let res = (!!value.match(/^[0-9]+$/));
      // console.log(res)
      if (res === true) {
        setIsYear(true)
      } else {
        setIsYear(false)
      }
    }
  }
  return (
    <>
      <div className='d-flex justify-content-center align-items-center w-100 mt-5' style={{ height: '90vh' }}>
        <div className='bg-light p-5 rounded' style={{ width: '500px' }}>
          <h1>Simple Interest</h1>
          <p>Calculate your simple interest easily</p>
          <div style={{ height: '150px' }} className='flex-column bg-warning mt-3 rounded d-flex justify-content-center align-items-center '>
            <h2>&#8377;{result}</h2>
            <p>Total simple interest</p>
          </div>
          <form action="" className='mt-3' onSubmit={calculateInterest}>
            <TextField value={principle} onChange={(e) => validate(e)} name='principlevalue' className='w-100' id="outlined-basic" label="&#8377;Principle Amount" variant="outlined" />
            {
              !isPrinciple &&
              <div>
                <p className='text-danger'>Invalid Input</p>
              </div>
            }
            <TextField value={interest} name='interestField' onChange={(e) => validate(e)} className='w-100 mt-2' id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" />
            {
              !isInterest &&
              <div>
                <p className='text-danger'>Invalid Input</p>
              </div>
            }
            <TextField value={year} name='totalYear' onChange={(e) => validate(e)} className='w-100 mt-2' id="outlined-basic" label="Year(Yr)" variant="outlined" />
            {
              !isYear &&
              <div>
                <p className='text-danger'>Invalid Input</p>
              </div>
            }
            <Stack direction="row" spacing={2} className='mt-3'>
              <Button disabled={isPrinciple && isInterest && isYear?false:true} type='submit' variant="contained" className='bg-success' style={{ height: '50px', width: '200px' }}>Calculate</Button>
              <Button onClick={handleReset} variant="contained" className='bg-light' style={{ height: '50px', width: '200px', color: 'blue' }}>Reset</Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

