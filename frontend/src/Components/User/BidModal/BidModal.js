import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

 function BidModal({show, setShow}) {
    const toggleModal = () => setShow(!show);

  return (
    <>
      <MDBModal staticBackdrop tabIndex='-1' show={show} setShow={setShow}  style={{ zIndex: show ? 9999 : -1 }}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Confirm Bid</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleModal}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>You have placed a bid for $26,000. Should we place this as your Bid?</MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleModal}>
                Close
              </MDBBtn>
              <MDBBtn>Understood</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default BidModal