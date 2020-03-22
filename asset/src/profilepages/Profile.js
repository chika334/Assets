import React, { Component } from 'react';
import {AppProvider, Page} from '@shopify/polaris';
import jwt_decode from 'jwt-decode';

class Profile extends Component {
	render() {
		return(
			<div className="constainer">
					<div className="jumbotron mt-5">
							<div className="col-sm-8 mx-auto">
									<h1 className="text-center">Profile</h1>
							</div>
							
					</div>
			</div>
			)
	}
}
export default Profile;