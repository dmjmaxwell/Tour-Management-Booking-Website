import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import './NewsLetter.css';
import maleTourist from '../assets/images/male-tourist.png';

const NewsLetter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful travel information </h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email'/>
                        <button className="btn newsletter__btn">Subscribe</button>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default NewsLetter