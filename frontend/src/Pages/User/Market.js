import React, {useState, useEffect} from "react";
import Market from "../../Components/User/Market/market";
import axios from "axios";
import SideBar from "../../Components/User/SideBar/SideBar";
import '../../App.css'
import '../../Styles/Market.css'

function Markets() {
  const [bookData, setBookData] = useState([])

  useEffect(() =>{

    axios.get('https://gutendex.com/books?ids=17,11,12,133,14,15,16')
    .then(res=>{setBookData(res.data.results)})
    .catch(err=>console.log(err))

  },[])


  return (
    <div className="container">
       <SideBar/> 
      <Market book={bookData}  />

    </div>
  );
}

export default Markets;
