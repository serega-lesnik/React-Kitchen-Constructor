import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';

import ImageButton from './ImageButton';

import './image-buttons.css';

export default class ImageButtons extends Component {
	render() {
		const { colors, selected, colorChange } = this.props
		return(
			<Container>
				<Grid container justify="center" spacing={5}>
					{colors.map((color, i) => (
						<Grid key={i} item>
							<ImageButton
								onChange={colorChange}
								selected={selected}
								{...color}
							/>
						</Grid>
          ))}
			</Grid>
			</Container>
		);
	}
}