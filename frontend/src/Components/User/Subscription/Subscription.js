import React from 'react'
import './Subscription.css'
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
  
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
  import useRazorpay from 'react-razorpay'
  import { razorpayId } from '../../../Constance/Constance';
  import { membershipPaymentAPI, verifyPaymentAPI } from '../../../Services/userServices'

function Subscription() {
  const Razorpay = useRazorpay();
  const navigate = useNavigate();

  const standardplan = ()=> {
    console.log("naan");
    const price = {
      price:350
    }
    membershipPaymentAPI(price)
    .then((res)=>{
      console.log(res.data)
      if (res.status === 200) {
        const options = {
          key: razorpayId,
          amount: (res.data.price)*100,
          currency: "INR",
          name: "MyBook",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: res.data.order.id,
          handler: function (response) {
            verifyPayment(response, res.data);
          },
          prefill: {
            name: "MyBook",
            email: "mybook@gmail.com",
            contact: "9999999999",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        const rzp1 = new Razorpay(options);
        rzp1.on("payment.failed", function () {
          message.error("payment failed");
          navigate("/profile");
        });

        rzp1.open();
      }
    })

  }

  const verifyPayment = (payment,details)=> {
    verifyPaymentAPI(payment,details)
    .then((response)=>{
      message.success(<span style={{color: 'black' }}>Payment Completed Succesfully</span>)
      navigate('/profile')
    })
  }

  return (

    <div className='subscription' style={{display:'flex',gap:'50px',margin:'100px auto auto auto'}}>
 <MDBCard className='suscription-card' style={{alignItems:'center',top:'30px',paddingBottom:'0px',margin:'auto'}}>
      <MDBCardBody className='bidding-card-body' style={{width:'330px', margin:'auto', display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center',minHeight:'auto',background:'#262222'}}>
        <MDBCardTitle>Standard Plan</MDBCardTitle>
        <MDBCardText>
          If you take monthly plan you can have access to features such as reserving books and you can also checkout more than one book at a time.
        </MDBCardText>
      </MDBCardBody>
      <MDBCardBody style={{width:'330px',padding:'6px',minHeight:'auto',margin:'0px'}}>
        <MDBListGroupItem style={{color:'black'}}> <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '280px' }}>
    <div style={{ width: '50%', textAlign: 'left'}}>
    <h5 style={{fontFamily:'monospace',fontSize:'15px',margin:'auto'}}>Price</h5>
    </div>
    <div style={{ width: '50%'}}>
    <h5 className='text-right' style={{fontFamily:'monospace',fontSize:'15px',margin:'auto'}}>$350</h5>
    </div>
  </div></MDBListGroupItem>
  <MDBListGroupItem>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '280px' }}>
    <div style={{ width: '50%', textAlign: 'left'}}>
    <h5 style={{fontFamily:'monospace',fontSize:'15px',margin:'auto'}}>Members</h5>
    </div>
    <div style={{ width: '50%'}}>
    <h5 className='text-right' style={{fontFamily:'monospace',fontSize:'15px',margin:'auto'}}>0</h5>
    </div>
  </div>
  </MDBListGroupItem>
  <MDBListGroupItem>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '280px' }}>
    <div style={{ width: '50%', textAlign: 'left'}}>
    <h5 style={{fontFamily:'monospace',fontSize:'15px',margin:'auto'}}>Bid Participation</h5>
    </div>
    <div style={{ width: '50%'}}>
    <h5 className='text-right' style={{fontFamily:'monospace',fontSize:'15px',margin:'auto'}}>No</h5>
    </div>
  </div>
  </MDBListGroupItem>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',paddingTop:'5px' }}>
  <MDBBtn style={{marginTop:'4px',padding:'10px 80px'}} rounded color='warning' onClick={standardplan}>
        Pay Now
      </MDBBtn>
      </div>
      </MDBCardBody>
    </MDBCard>










    <MDBCard className='suscription-card' style={{alignItems:'center', margin:'auto',top:'30px',paddingBottom:'0px'}}>
      <MDBCardBody className='bidding-card-body' style={{width:'330px', margin:'auto', display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center',minHeight:'auto',background:'#262222'}}>
        <MDBCardTitle>Premium Plan</MDBCardTitle>
        <MDBCardText>
          If you take yearly plan you can have access to features such as Participation in Bidding and you can also checkout more than one book at a time.
        </MDBCardText>
      </MDBCardBody>
      <MDBCardBody style={{width:'330px',padding:'6px',minHeight:'auto',margin:'0px'}}>
        <MDBListGroupItem style={{color:'black'}}> <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '280px' }}>
    <div style={{ width: '50%', textAlign: 'left'}}>
    <h5 style={{fontFamily:'monospace',fontSize:'15px',margin:'auto'}}>Price</h5>
    </div>
    <div style={{ width: '50%'}}>
    <h5 className='text-right' style={{fontFamily:'monospace',fontSize:'15px',margin:'auto'}}>$450</h5>
    </div>
  </div></MDBListGroupItem>
  <MDBListGroupItem>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '280px' }}>
    <div style={{ width: '50%', textAlign: 'left'}}>
    <h5 style={{fontFamily:'monospace',fontSize:'15px',margin:'auto'}}>Members</h5>
    </div>
    <div style={{ width: '50%'}}>
    <h5 className='text-right' style={{fontFamily:'monospace',fontSize:'15px',margin:'auto'}}>0</h5>
    </div>
  </div>
  </MDBListGroupItem>
  <MDBListGroupItem>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '280px' }}>
    <div style={{ width: '50%', textAlign: 'left'}}>
    <h5 style={{fontFamily:'monospace',fontSize:'15px',margin:'auto'}}>Bid Participation</h5>
    </div>
    <div style={{ width: '50%'}}>
    <h5 className='text-right' style={{fontFamily:'monospace',fontSize:'15px',margin:'auto'}}>Yes</h5>
    </div>
  </div>
  </MDBListGroupItem>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',paddingTop:'5px' }}>
  <MDBBtn style={{marginTop:'4px',padding:'10px 80px'}} rounded color='warning'>
        Pay Now
      </MDBBtn>
      {/* <BidModal show={show} setShow={setShow} /> */}
      </div>
      </MDBCardBody>
    </MDBCard>
    </div>

    
  )
}

export default Subscription