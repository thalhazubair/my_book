import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Recent.css'
import Container from 'react-bootstrap/Container';

function Recent({book}) {
  return (
    
    <div className='recent'>
        <Container className='recent-book'>
        <Row className='recent-card-read' style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-between' }}>
        {book.map((item, index)=>{
            console.log(item);
            let thumbnail = item.volumeInfo.imageLinks.thumbnail
            console.log(thumbnail);
            return(
                <Col className='recent-pad recent-card-align' key={index}>
                <Card className='recent-main-card'>
                    <div>
                    <div className='card-button-recent'>

                <Card.Img variant="top" src={thumbnail} />
                

                <Card.Body className="card-body-container card-body-recent">
                  <Card.Title>{item.volumeInfo.title}</Card.Title>
                  <Card.Subtitle>Author : {item.volumeInfo.authors}</Card.Subtitle >
                  <Card.Text>Genre : {item.volumeInfo.categories}</Card.Text>
                  <Card.Text className='return-date'>Returned On : 01/01/2023</Card.Text>
                  <Card.Text className='user-rating'>Rating : 4.5</Card.Text>
                </Card.Body>
                </div>
                <Button variant="primary">Add Review</Button>
                </div>
              </Card>
              </Col>
            )
        })}
  </Row>
  </Container>
  </div>
  )
}

export default Recent