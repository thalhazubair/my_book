import React, {useEffect, useState} from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import './Members.css'
import axios from '../../../Axios/Axios'

function Member() {

  const[users, setusers] = useState([])

  useEffect(()=>{
    axios.get("/admin/members")
  .then((res)=>{
    if(res.data.success){
      setusers(res.data.users)
    }
  })
  },[])

  return (
    <div className='admin-members'>
    <MDBTable align='middle' className='member-table-align'>
      <MDBTableHead>
        <tr>
          <th scope='col'>FullName</th>
          <th scope='col'>UserName</th>
          <th scope='col'>Email</th>
          <th scope='col'>Mobile</th>
          <th scope='col'>Plan</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {users.map((doc, index)=>{
          return(
            <tr>
            <td>
                <div key={index} className='d-flex align-items-center'>
                  <div>
                    <p className='fw-bold mb-1'>{doc.fullname}</p>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div>
                    <p className='fw-bold mb-1'>{doc.username}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>{doc.email}</p>
              </td>
              <td>
              <p className='fw-normal mb-1'>{doc.phone}</p>
    
              </td>
              <td>None</td>
              <td>
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
  );
}

export default Member