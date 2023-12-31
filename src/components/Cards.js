import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import cardimage from '../assets/images/one.png'
import cardimage2 from '../assets/images/two.png'
import cardimage3 from '../assets/images/three.png'
import cardimage4 from '../assets/images/four.png'
import cardimage5 from '../assets/images/five.png'

const Cards = () => {
  return (
    <div>
      <CardGroup>
        <Card
          style={{
            backgroundColor: '#464343',
            borderColor: '#464343',
            color: '#fff',
          }}
        >
          <Card.Img variant='top' src={cardimage} />
          <Card.Body>
            <Card.Title>Barfi</Card.Title>
            <Card.Text>Rs. 900/=</Card.Text>
            <Button variant='dark'>Order Now</Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            backgroundColor: '#464343',
            borderColor: '#464343',
            color: '#fff',
          }}
        >
          <Card.Img variant='top' src={cardimage2} />
          <Card.Body>
            <Card.Title>Barfi</Card.Title>
            <Card.Text>Rs. 900/=</Card.Text>
            <Button variant='dark'>Order Now</Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            backgroundColor: '#464343',
            borderColor: '#464343',
            color: '#fff',
          }}
        >
          <Card.Img variant='top' src={cardimage3} />
          <Card.Body>
            <Card.Title>Barfi</Card.Title>
            <Card.Text>Rs. 900/=</Card.Text>
            <Button variant='dark'>Order Now</Button>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card
          style={{
            backgroundColor: '#464343',
            borderColor: '#464343',
            color: '#fff',
          }}
        >
          <Card.Img variant='top' src={cardimage4} />
          <Card.Body>
            <Card.Title>Barfi</Card.Title>
            <Card.Text>Rs. 900/=</Card.Text>
            <Button variant='dark'>Order Now</Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            backgroundColor: '#464343',
            borderColor: '#464343',
            color: '#fff',
          }}
        >
          <Card.Img variant='top' src={cardimage5} />
          <Card.Body>
            <Card.Title>Barfi</Card.Title>
            <Card.Text>Rs. 900/=</Card.Text>
            <Button variant='dark'>Order Now</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  )
}

export default Cards
