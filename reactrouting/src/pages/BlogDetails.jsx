import React from 'react'
import Header from '../common/Header'
import { useLocation } from 'react-router-dom'
import { blogs } from '../data/blogs';

export default function BlogDetails() {
    let uselocation=useLocation();
    //console.log(uselocation)
    let currentID=uselocation.pathname.split('/')[2];
    //console.log(uselocation.pathname.split('/'));
    let currentDATA=blogs.filter((v)=>v.id==currentID)[0];
    console.log(currentDATA);
  return (
    <div>
    <Header/>
    
      
      <div className='container'>
      <div className='blogItems'>
      <h3>{currentDATA.title}</h3>
      <p>{currentDATA.body}</p>
      </div>
    </div>
    </div>
  )
}
