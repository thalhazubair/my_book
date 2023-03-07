import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Recent from '../../Components/User/Recent/Recent'
import SideBar from '../../Components/User/SideBar/SideBar'

function Recents() {

  const [bookData, setBookData] = useState([])

  useEffect(() =>{

    axios.get('https://www.googleapis.com/books/v1/volumes?q=car&maxResults=8&key=AIzaSyDmmF19-U-PVsZSH1C3OUGNxyEg_eRM_s4')
    .then(res=>{setBookData(res.data.items)})
    .catch(err=>console.log(err))

  },[])

  return (
    <>
    <SideBar/>
      <Recent book={bookData}/>
      </>
  )
}

export default Recents