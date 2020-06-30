import React, { Component } from 'react';
import {
	withStyles,
	Container,
	Card,
	CardMedia,
} from '@material-ui/core';

const StyledCard = withStyles((theme) => ({
	root: {
		backgroundColor: 'inherit',
		textAlign: 'center',
	},
}))(Card);

/**
 * TODO: добавить слайдер по массиву images
 */
export default class Slider extends Component {
	render() {
		const { images } = this.props;
		return(
			<Container>
				<StyledCard>
					{images.map((image, i) => (
						<CardMedia
							component='img'
							image={image}
							key={i}
						/>
					))}
				</StyledCard>
			</Container>
		);
	}
}