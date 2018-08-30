import React, { Component } from 'react';
import './Home.css';



export default class Home extends Component {


 

	render() {
		return (
			<div className="Home">
				<div className="container">
					<div className="row">	
						<h2>The Best Design Professionals</h2>
						<p>Only the top 1% of Design Talent, vetted by senior design professionals.</p>
					</div>
					<div className="row">	
						<div className='col-6'>
							<h2>Recruiters</h2>
							<p>Get unlimited access to our premium designer list and a lot more.</p>
							<a href="/clients">Learn More</a>
						</div>
						<div className='col-6'>
							<h2>Designers</h2>
							<p>We're looking for experienced and passionate designers.</p>
							<a href="/designers">Learn More</a>
						</div>
					</div>
					<div className="row">	
						<h2>Need help defining your design roles?</h2>
						<p>We do consulting too. As experienced product designers we can work with you to understand the design role you need to fill. We understand that your company has a unique culture that needs a match.
						We can help you define that role then suggest several custom matches for you from our elite list of designers. </p>
						<a href="/consulting">Learn More</a>
					</div>
				</div>
			</div>
		);
	}
}

