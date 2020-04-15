import React, { Component, Fragment } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
// import jwt_decode from 'jwt-decode';
import slide2 from '../images/slide2.jpeg'
import slide3 from '../images/slide3.jpeg'
import slide1 from '../images/slide1.jpeg'
import laptopone from '../images/laptopone.jpg';
import '../css/proform.css';

class Profile extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<Carousel>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={slide1}
								alt="First slide"
								height="450"
							/>
							<Carousel.Caption>
								<h1>Freshaluck Assets</h1>
								<p>Freshaluck is a tech company where thousands of codes are being implemented everyday. we keep track of the companies assets here</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={slide2}
								alt="Third slide"
								height="450"
							/>
							<Carousel.Caption>
								<h1>Freshaluck Assets</h1>
								<p>Freshaluck is a tech company where thousands of codes are being implemented everyday. we keep track of the companies assets here</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={slide3}
								alt="Third slide"
								height="450"
							/>
							<Carousel.Caption>
								<h1>Freshaluck Assets</h1>
								<p>Freshaluck is a tech company where thousands of codes are being implemented everyday. we keep track of the companies assets here</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
					<h1 className="p-4">Our Assets</h1>
				</div>
				<section className="container d-flex h-100">
					<div className="row justify-content-center align-self-center">
						<Card style={{ width: '18rem', margin: '30px' }}>
							<Card.Img variant="top" src={laptopone} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of
									the card's content.
										</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>

						<Card style={{ width: '18rem', margin: '30px' }}>
							<Card.Img variant="top" src={laptopone} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of
									the card's content.
									</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>

						<Card style={{ width: '18rem', margin: '30px' }}>
							<Card.Img variant="top" src={laptopone} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of
									the card's content.
										</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</div>
				</section>
			</Fragment>
		)
	}
}

export default Profile