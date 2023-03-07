import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ToRead from '../../Components/User/ToRead/toRead'
import SideBar from '../../Components/User/SideBar/SideBar'

function ToReads() {

  const [bookData, setBookData] = useState([])
  const [newData, setNewData] = useState([])


  useEffect(()=>{
    axios.get('https://www.googleapis.com/books/v1/volumes?q=car&maxResults=2&key=AIzaSyDmmF19-U-PVsZSH1C3OUGNxyEg_eRM_s4')
    .then(res=>{setBookData(res.data.items)})
    .catch(err=>console.log(err))

    axios.get('https://www.googleapis.com/books/v1/volumes?q=football&maxResults=3&key=AIzaSyDmmF19-U-PVsZSH1C3OUGNxyEg_eRM_s4')
    .then(res=>{setNewData(res.data.items)})
    .catch(err=>console.log(err))

  },[])

  

  return (
    <>
    <SideBar/>
    <ToRead book={bookData} data={newData}/>
    </>
  )
}

export default ToReads