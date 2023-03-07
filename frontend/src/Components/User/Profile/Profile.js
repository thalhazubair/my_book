import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './Profile.css'
import { Button, Header, Icon, Modal, Form  } from 'semantic-ui-react';
import { Link,useNavigate } from 'react-router-dom';

export default function ProfileStatistics() {

  const navigate = useNavigate()

    const handleLogOut = ()=> {
      console.log("haaa");
      localStorage.removeItem('userToken');
      navigate("/")
    }

  const [open, setOpen] = React.useState(false)

  return (
    <div className='profile-main'>
    <div className="vh-100" style={{ backgroundColor: 'rgb(58 57 57)' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4" className='profile-res' style={{ height: '500px',  width: '400px', marginLeft: '250px' }}>
            <MDBCard className='profile-card-body' style={{ borderRadius: '15px', height: '100%' }}>
              <MDBCardBody className="text-center profile-center">
                <div >
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px',margin:'auto' }} />
                </div>
                <MDBTypography tag="h4" style={{ padding: '5px' }}>Julie L. Arsenault</MDBTypography>
                <MDBCardText className="text-muted mb-1">
                  @Julie433 
                </MDBCardText>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Button className='profile-btn' variant="primary"  onClick={() => setOpen(true)}>Edit Profile</Button>
                <Link to="/subscription">
                <Button className='profile-btn' variant="primary" style={{backgroundColor:'blue'}}>Subscription</Button>
                </Link>
                </div>
                <div className="card-body-stats">
                  <div>
                    
                    <MDBCardText className="small text-muted mb-0">Total Checkout</MDBCardText>
                    <MDBCardText className="mb-1 h5 profile-text">11</MDBCardText>
                  </div>
                  <div className="px-3">
                   
                    <MDBCardText className="small text-muted mb-0">Total Reserved</MDBCardText>
                    <MDBCardText className="mb-1 h5 profile-text">2</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="small text-muted mb-0">Subscription</MDBCardText>
                    <MDBCardText className="mb-1 h5 profile-text">Monthly</MDBCardText>

                  </div>
                  <Button className='profile-btn' variant="primary" style={{backgroundColor:'black'}} onClick={handleLogOut}>LogOut</Button>

                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      className='modal-profile'
    >
      <Modal.Content className='modal-content-profile'>
      <Form>
    <Form.Group widths={2}>
      <Form.Input label='Full Name' placeholder='Full Name' />
      <Form.Input label='Username' placeholder='Username' />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='Email' placeholder='Email' />
      <Form.Input label='Phone' placeholder='Phone' />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='Address' placeholder='Address' />
      <Form.Input label='Password' placeholder='Password' />
    </Form.Group>
    <Button type='submit'>Submit</Button>
    <Modal.Actions className='profile-action'>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon className='profile-icon' name='remove' /> Cancel
        </Button>
      </Modal.Actions>
  </Form>
      </Modal.Content>
      
    </Modal>
    </div>
    </div>
  );
}