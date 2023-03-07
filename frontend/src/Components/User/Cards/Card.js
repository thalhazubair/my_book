import React, { useState } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import "./Cards.css";

function Card({ book, data }) {
  const [open, setOpen] = useState(false);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')


  return (
    <div>
      
<div className="home-content">
<div class="input-group" style={{justifyContent:'end',right:'20px',bottom:'30px'}}>
  <div class="form-outline" style={{display:'flex'}} >
    <input style={{background:'black',border:'1px solid #ffff',borderRadius:'20px'}} type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1" style={{color:'white', paddingLeft: '10px'}}>Search</label>
  </div>
</div>
<div class="container-fluid">
    <h2 class="font-weight-light novel">NOVEL</h2>
    <div class="d-flex flex-row overflow-auto flex-nowrap card-home">
      {book.map((item, index)=>{
        let thumbnail = item.formats["image/jpeg"];
        return(
          <div 
          key={index} class="card card-body"
          onClick={() => {
            setSelectedThumbnail(thumbnail);
            setTitle(item.title)
            setAuthor(item.authors[0].name)
            setOpen(true);
          }}
        > <img src={thumbnail} alt="" />
        </div>
        )
      })}
    </div>
</div>
     

   
      <div class="container-fluid">
    <h2 class="font-weight-light novel">NOVEL</h2>
    <div class="d-flex flex-row overflow-auto flex-nowrap card-home">
      {data.map((item, index)=>{
        let thumbnail = item.formats["image/jpeg"];
        return(
          <div 
          key={index} class="card card-body"
          onClick={() => {
            setSelectedThumbnail(thumbnail);
            setTitle(item.title)
            setAuthor(item.authors[0].name)
            setOpen(true);
          }}
        > <img src={thumbnail} alt="" />
        </div>
        )
      })}
    </div>
</div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Content image>
          <Image
            size="medium"
            src={selectedThumbnail}
            wrapped
          />
          <Modal.Description>
            <Header><span>Title : {title}</span></Header>
            <p className="modal-paragraph">
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p className="modal-author">author : {author}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
      </div>
    </div>
  );
}

export default Card;
