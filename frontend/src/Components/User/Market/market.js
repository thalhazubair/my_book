import React, { useState } from "react";
import "./market.css";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Market({ book }) {
  const [open, setOpen] = useState(false);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <>

        <div className="market-center">
          <div className="book-container-list-market">
            {book.map((item, index) => {
              let thumbnail = item.formats["image/jpeg"];
              return (
                <div key={index} className="book-container-market">
                  <div
                    className="book-image"
                    onClick={() => {
                      setSelectedThumbnail(thumbnail);
                      setTitle(item.title);
                      setAuthor(item.authors[0].name);
                      setOpen(true);
                    }}
                  >
                    <img src={thumbnail} alt="" />
                  </div>

                  <div className="book-content">
                    <Link to = "/bid">
                    <button>BID</button>
                    </Link>
                  </div>
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
              <Image size="medium" src={selectedThumbnail} wrapped />
              <Modal.Description>
                <Header>
                  <span>Title : {title}</span>
                </Header>
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
    </>
  );
}

export default Market;
