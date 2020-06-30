import React, { Component } from 'react';
import {
	withStyles,
	Radio,
	Typography,
	Card,
	CardContent,
	CardMedia,
} from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const StyledCard = withStyles((theme) => ({
	root: {
		maxWidth: 140,
		backgroundColor: '#302d2c',
		color: '#fcfdfd',
		textAlign: 'center',
	},
}))(Card);

const StyledRadio = withStyles((theme) => ({
	root: {
		position: 'absolute',
		top: 0,
		left: 0,
		padding: 0,
		width: '100%',
		height: '100%',
		color: '#00b6ff !important',
	},
}))(Radio);

/**
 * TODO: поведение кнопки по hover
 */
export default class ImageButtons extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const { onChange } = this.props;
		onChange(e.target.value);
	}

	checkedIcon() {
		return (
			<CheckBoxIcon className='image-btn-checkbox checked' color='inherit' />
		);
	}

	uncheckButton() {
		return (
			<div className='image-btn-checkbox' />
		);
	}

	render() {
		const { value, label, image, selected } = this.props;
		return(
			<StyledCard className='image-btn'>
				<StyledRadio
					checked={selected === value}
					onChange={this.handleChange}
					value={value}
					name="radio-button-demo"
					inputProps={{ 'aria-label': 'A' }}
					checkedIcon={this.checkedIcon()}
					icon={this.uncheckButton()}
				/>
				<CardMedia
					component='img'
					alt={label}
					width={140}
					image={image}
				/>
				<CardContent>
					<Typography>
						{label}
					</Typography>
				</CardContent>
			</StyledCard>
		);
	}
}