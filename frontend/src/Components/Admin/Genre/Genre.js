import React, {useEffect, useState} from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import './Genre.css'
import AddGenre from '../AddGenre/AddGenre';
import axios from '../../../Axios/Axios'

function Genre() {

  const [show, setShow] = useState(false);
  const [genre, setGenre] = useState([])

  const showModal = () => {
    setShow(true);
  };

  useEffect(()=>{
    axios.get("/admin/genre")
    .then((res)=>{
    if(res.data.success){
      setGenre(res.data.genre)
    }    
    })
  },[genre])

  

  return (
    <div style={{width:'100%'}}>
    <div className='admin-genre'>
    <MDBTable align='middle' className='genre-table-align'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Genre</th>
          <th scope='col'>Status</th>
          <th scope='col' className='action'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {genre.map((doc, index)=>{
 return(
  <tr>
  <td>
      <div key={index} className='d-flex align-items-center'>
        <div>
          <p className='fw-bold mb-1'>#{index+1}</p>
        </div>
      </div>
    </td>
    <td>
      <div className='d-flex align-items-center'>
        <div>
          <p className='fw-bold mb-1'>{doc.genre}</p>
        </div>
      </div>
    </td>
    <td>
      <p className='fw-normal mb-1'>{doc.status}</p>
    </td>
    <td>
      <MDBBtn color='link' rounded size='sm'>
        Edit
      </MDBBtn>
      <MDBBtn color='link' rounded size='sm'>
        Edit
      </MDBBtn>
    </td>
  </tr>
  )
        })}
       
        
      </MDBTableBody>
    </MDBTable>
    
    </div>
   
    <MDBBtn onClick={showModal} rounded color='info' style={{display:'flex',margin:'auto',top:'20px'}}>
        ADD
      </MDBBtn>
      <AddGenre show={show} setShow={setShow} />

    </div>
  );
}

export default Genre