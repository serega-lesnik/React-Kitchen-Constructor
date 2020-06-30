import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';

import Slider from '../Slider';
import Description from './Description';
import InfoPanel from './InfoPanel';
import ImageButtons from '../ImageButtons';

import { COLORS, IMAGE_VARIANS } from './stubData';

import './page.css';

/**
 * TODO: добавить обработку некорректных/пустых props в дочерних компонентах
 */
export default class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: null,
		};
		this.colorChange = this.colorChange.bind(this);
	}

	componentDidMount() {
		const { colors } = this.props;
		this.setState({ selected: colors[0].value });
	}

	colorChange(value) {
		this.setState({ selected: value });
	}

	imageButtonsProps() {
		const { colors } = this.props;
		const { selected } = this.state;
		const { colorChange } = this;
		return {
			colors,
			selected,
			colorChange,
		};
	}

	sliderProps() {
		const { imageVariants } = this.props;
		const { selected } = this.state;
		const images = selected ? imageVariants[selected] : [];
		return { images };
	}

	render() {
		return(
			<Grid container className='page' display='flex'>
				<Grid item xs={6}>
					<Box display='flex' flexDirection='column' justifyContent='center' className='page-container'>
						<Slider {...this.sliderProps()} />
					</Box>
				</Grid>
				<Grid  item xs={6}>
					<Box display='flex' flexDirection='column' justifyContent='space-around' className='page-container'>
						<Description />
						<InfoPanel />
						<ImageButtons {...this.imageButtonsProps()} />
					</Box>
				</Grid>
			</Grid>
		);
	}
}

Page.defaultProps = {
	colors: COLORS,
	imageVariants: IMAGE_VARIANS,
};

Page.propTypes = {
	colors: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string,
			label: PropTypes.string,
			image: PropTypes.string,
		}),
	),
	imageVariants: PropTypes.objectOf(
		PropTypes.array
	),
};