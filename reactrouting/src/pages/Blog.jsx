//import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../common/Header.jsx'
import { blogs } from '../data/blogs.jsx'
import { Link } from 'react-router-dom'

export default function Blog() {
    let allblogs=blogs.map((v,i)=>{
        return( 
            <div className='blogItems' key={i}>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
                <button><Link to={`/blog/${v.id}`}>Read More</Link></button>
            </div>        
        )
    })
  return(
    <>
        <Header/>
    <h1>blog page</h1>
    <div className='container'>
      {allblogs}
    </div>
    </>
  )
  
}

//const styles = StyleSheet.create({})