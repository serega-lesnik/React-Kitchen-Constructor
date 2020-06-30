import React, { Component } from 'react';
import { Box } from '@material-ui/core';

import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';

import './styles/main.css';

export default class App extends Component {
	render() {
		return(
			<Box display='flex' flexDirection='column' className='root-container'>
				<Header />
				<Page />
				<Footer />
			</Box>
		);
	}
}