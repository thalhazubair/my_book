import React, { useEffect, useState } from 'react'
import Card from '../../Components/User/Cards/Card'
import axios from 'axios'
import SideBar from '../../Components/User/SideBar/SideBar'

function Home() {
  const [bookData, setBookData] = useState([])
  const [newData, setNewData] = useState([])

  useEffect(() =>{

    axios.get('https://gutendex.com/books?ids=17,11,12,133,14,15,16')
    .then(res=>{setBookData(res.data.results)})
    .catch(err=>console.log(err))

    axios.get('https://gutendex.com/books?ids=765,2,3,4,565,676,723,8,9')
    .then(res=>{setNewData(res.data.results)})
    .catch(err=>console.log(err))

  },[])
  
  return (
    <div className='card-home-main'>
    <SideBar/> 
    <Card book={bookData} data={newData}/>
    </div>
    
  )
}

export default Home