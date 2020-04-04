import React, { Component, Fragment } from 'react';
import { Carousel } from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import slide2 from '../images/slide2.jpeg'
import slide3 from '../images/slide3.jpeg'
import slide1 from '../images/slide1.jpeg'

class Profile extends Component {
	render() {
		return (
			<Fragment>
				<Carousel>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={slide1}
							alt="First slide"
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
						/>
						<Carousel.Caption>
							<h1>Freshaluck Assets</h1>
							<p>Freshaluck is a tech company where thousands of codes are being implemented everyday. we keep track of the companies assets here</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>

				<h1 className="p-4">Our Assets</h1>
			</Fragment>
		)
	}
}
export default Profile;