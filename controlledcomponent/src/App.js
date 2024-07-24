
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { useState } from 'react';

function App() {
  let[uname,setUname]=useState('');
  let[upassword,setUpassword]=useState('');
  let handleSubmit=(event)=>{
      event.preventDefault()
      console.log(uname,upassword)
}
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
           <form onSubmit={handleSubmit}>
            <div className='text-start my-3'>
              <label>USERNAME</label>
              <input type='text' onChange={(event)=>{setUname(event.target.value)}} className='form-control' name='allo' value={uname}/>
            </div>
            <div className='text-start my-3'> 
              <label>PASSWORD</label>
              <input type='text' onChange={(event)=>{setUpassword(event.target.value)}} className='form-control' value={upassword}/>
            </div>
            <div className='text-start my-3'>
            <button>LOGIN</button>
            </div>
           </form>
          </div>
        </div>
      </div>
         
    </div>
  );
}

export default App;
