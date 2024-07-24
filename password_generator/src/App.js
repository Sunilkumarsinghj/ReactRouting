import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {SC,UC,LC,NC} from './data/Data.jsx'
import { useState } from 'react';

function App() {
  let[uppercase,setUppercase]=useState(false);
  let[lowercases,setLowercase]=useState(false);
  let[number,setNumber]=useState(false);
  let[symbols,setSymbols]=useState(false);
  let[input,setInput]=useState('');
  let[passLength,setPassLength]=useState(10)

  




  let generatePass=()=>{
    let finalPassword='';
     let charSet='';
       if(uppercase===true||lowercases===true||number===true||symbols===true){
        if(uppercase){charSet+=UC}
        if(lowercases){charSet+=LC}
        if(number){charSet+=NC}
        if(symbols){charSet+=SC}
        for(let i=0;i<passLength;i++){
          finalPassword=charSet.charAt(Math.floor(Math.random( )*charSet.length))+finalPassword;
        
        }
       setInput(finalPassword);
          
      }
      else{
        toast.error('please select at least one checkbox')
      }
  }
  let copyPassword=()=>{
    navigator.clipboard.writeText(input);
    toast.success("copied")
  }
  return (
    <>
    <ToastContainer/>
    <div className='passwordBox'><h2>
      Password Generator</h2>
     <div className='passwordBoxin'>
      <input type='text' readOnly value={input}/> <button onClick={copyPassword} >copy</button>
     </div>
     <div className='passwordLength'>
       <label>Password Length</label>
       
       <input type='number' max={20} min={10} value={passLength} onChange={(evnt)=>setPassLength(evnt.target.value)}/>
     </div>

     <div className='passwordLength'>
       <label onClick={()=>setUppercase(!uppercase)}>Include uppercase letters</label>
       <input type='checkbox'   checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
     </div>
     <div className='passwordLength'>
       <label onClick={()=>setLowercase(!lowercases)}>Include lowercases letters</label>
       <input type='checkbox' checked={lowercases} onChange={()=>setLowercase(!lowercases)}/>
     </div>
     <div className='passwordLength'>
       <label onClick={()=>setNumber(!number)}>include number</label>
       <input type='checkbox' checked={number} onChange={()=>setNumber(!number)}/>
     </div>
     <div className='passwordLength'>
       <label onClick={()=>setSymbols(!symbols)}>Include symbols</label>
       <input type='checkbox' checked={symbols} onChange={()=>setSymbols(!symbols)}/>
     </div>
     
     <button className='btn' onClick={()=>generatePass()}>Generate Password</button>

    

      </div>
    </>
  );
}

export default App;
