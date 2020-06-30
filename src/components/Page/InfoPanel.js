import React, { Component } from 'react';
import {
	withStyles,
	Box,
	Button,
	Card,
	CardContent
} from '@material-ui/core';

const StyledCard = withStyles((theme) => ({
	root: {
		borderRadius: 0,
		backgroundColor: '#00b6ff',
		color: '#fcfdfd',
		textAlign: 'center',
		flexGrow: 2,
	},
}))(Card);

const StyledButton = withStyles((theme) => ({
	root: {
		borderRadius: 0,
		backgroundColor: '#00abf0',
		color: '#fcfdfd',
		textAlign: 'center',
		textTransform: 'lowercase',
		fontSize: '1.6em'
	},
}))(Button);

export default class InfoPanel extends Component {
	render() {
		return(
			<Box display='flex' flexDirection='row' className='infopanel'>
				<StyledButton variant="contained" color="primary">i</StyledButton>
				<StyledCard>
					<CardContent>
						Выберите цвет свечения
					</CardContent>
				</StyledCard>
			</Box>
		);
	}
}