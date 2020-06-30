import React, { Component } from 'react';
import { Box, Divider, Container } from '@material-ui/core';

import { STEPS } from '../../constants';
import './footer.css';

const currentStep = 5;

export default class Footer extends Component {
	render() {
		return(
			<Container className='footer'>
				<Box display='flex' flexDirection='row' justifyContent='space-between'>
					{STEPS.map((step, i) => {
						const classArr = ['footer-step'];
						if (i <= currentStep) {
							classArr.push('done');
							if (currentStep === i) classArr.push('selected');
						}
						return (
							<Box className={classArr.join(' ')} key={i}>
								<Box className='footer-step-text'>{step}</Box>
								<Divider className='divider' />
							</Box>
						);
					})}
				</Box>
			</Container>
		);
	}
}