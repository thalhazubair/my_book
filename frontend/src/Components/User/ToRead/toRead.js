import React, {useState} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import './toRead.css'

function ToRead({book, data}) {
    const [open, setOpen] = useState(false);
    const [selectedThumbnail, setSelectedThumbnail] = useState(null);
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
  
  
    return (
      <div className='toread-main'>
        <h1>
          <span className='toRead'>Reserved Book</span>
        </h1>
  
        <div className="toReadBook-container-list">
          {book.map((item, index) => {
            let thumbnail = item.volumeInfo.imageLinks.thumbnail
            return (
              <div
                key={index}
                className="toReadBook-container"
                onClick={() => {
                  setSelectedThumbnail(thumbnail);
                  setTitle(item.volumeInfo.title)
                  setAuthor(item.volumeInfo.authors)
                  setOpen(true);
                }}
              >
                <img src={thumbnail} alt="" />
                {/* <h3 className="book-title">{item.title}</h3>
                <p className="book-author">{item.authors[0].name}</p> */}
              </div>
            );
          })}
        </div>
  
        <h1>
          <span className='toRead'>Favourites</span>
        </h1>
        <div className="toReadBook-container-list">
          {data.map((item, index) => {
            let thumbnail = item.volumeInfo.imageLinks.thumbnail
            return (
              <div key={index} className="toReadBook-container"
              onClick={() => {
                setSelectedThumbnail(thumbnail);
                setTitle(item.volumeInfo.title)
                setAuthor(item.volumeInfo.authors)
                setOpen(true);
              }}
              >
                <img src={thumbnail} alt="" />
                {/* <h3 className="book-title">{item.title}</h3>
                <p className="book-author">{item.authors[0].name}</p> */}
              </div>
            );
          })}
        </div>
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          
        >
          <Modal.Header>Select a Photo</Modal.Header>
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
    );
}

export default ToRead