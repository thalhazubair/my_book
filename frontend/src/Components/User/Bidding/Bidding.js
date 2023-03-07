import React,{useState} from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import BidModal from '../BidModal/BidModal'

 function Bidding() {

    const [show, setShow] = useState(false);

    const showModal = () => {
      setShow(true);
    };
  
    

  return (
    <MDBCard style={{alignItems:'center', margin:'auto',top:'30px'}}>
      <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' style={{width:'160px'}}/>
      <MDBCardBody className='bidding-card-body' style={{width:'330px', margin:'auto', display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center',minHeight:'auto',background:'#262222'}}>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush style={{padding:'0px'}}>
        <MDBListGroupItem style={{background:'#F3F2F2'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '280px' }}>
    <div style={{ width: '50%', textAlign: 'left',borderRight: '1px solid #ccc', paddingRight: '1rem' }}>
    <h5 style={{fontFamily:'monospace'}}>Starting Bid Price:</h5>
      <span style={{color:'black'}}>$100</span>
    </div>
    <div style={{ width: '50%',borderLeft: '1px solid #ccc', paddingLeft: '1rem'}}>
    <h5 style={{fontFamily:'monospace'}}>Current Bid Price:</h5>
      <span style={{color:'black'}}>$1020</span>
    </div>
  </div>
        </MDBListGroupItem>
      </MDBListGroup>
      <MDBCardBody style={{width:'330px',padding:'6px',minHeight:'auto',margin:'0px'}}>
        <MDBListGroupItem style={{color:'black'}}> <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '280px' }}>
    <div style={{ width: '50%', textAlign: 'left'}}>
    <h5 style={{fontFamily:'monospace',fontSize:'15px',margin:'auto'}}>Live Auction</h5>
    </div>
    <div style={{ width: '50%'}}>
    <h5 className='text-right' style={{fontFamily:'monospace',fontSize:'15px',margin:'auto'}}>Bids Made: 20</h5>
    </div>
  </div></MDBListGroupItem>
  <MDBListGroupItem>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '280px' }}>
    <div style={{ width: '50%', textAlign: 'left'}}>
    <h5 style={{fontFamily:'monospace',fontSize:'15px',margin:'auto'}}>Thalha Zubair</h5>
    </div>
    <div style={{ width: '50%'}}>
    <h5 className='text-right' style={{fontFamily:'monospace',fontSize:'15px',margin:'auto'}}>$250</h5>
    </div>
  </div>
  </MDBListGroupItem>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',paddingTop:'5px' }}>
  <MDBInput label="Enter your bid amount" style={{borderRadius: '20px', borderColor: '#333333'}} />
  <MDBBtn  onClick={showModal} style={{marginTop:'4px',padding:'10px 80px'}} rounded color='warning'>
        Bid
      </MDBBtn>
      <BidModal show={show} setShow={setShow} />
      </div>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Bidding