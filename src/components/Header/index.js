import React, { Component } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Badge
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import logotype from '../../images/fulogy-logo.png';
import './header.css';

export default class Header extends Component {
	render() {
		return(
			<AppBar color='transparent' position="static">
				<Toolbar className='header'>
					<Typography noWrap className='header-logo'>
            <img src={logotype} alt='Logotype Fulogy' />
          </Typography>
					<IconButton color="inherit" aria-label="add to shopping cart">
						<Badge badgeContent={4} color="primary">
							<AddShoppingCartIcon />
						</Badge>
					</IconButton>
					<IconButton color='inherit'>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		);
	}
}