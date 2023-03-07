import React, { useState, useEffect} from 'react'
import axios from 'axios'
import DueDate from '../../Components/User/DueDate/DueDate'
import SideBar from '../../Components/User/SideBar/SideBar'

function DueDates() {
  const [bookData, setBookData] = useState([])

  useEffect(() =>{

    axios.get('https://www.googleapis.com/books/v1/volumes?q=car&maxResults=2&key=AIzaSyDmmF19-U-PVsZSH1C3OUGNxyEg_eRM_s4')
    .then(res=>{setBookData(res.data.items)})
    .catch(err=>console.log(err))

  },[])

  return (
    <>    <SideBar/> 

      <DueDate book={bookData}/>
      </>

  )
}

export default DueDates