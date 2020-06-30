import React, { Component } from 'react';
import {
	Button,
	Container,
	withStyles,
	TableContainer,
	Table,
	TableBody,
	TableRow,
	TableCell,
} from '@material-ui/core';

import { DESCRIPTIONS } from './stubData';

const StyledTableCell = withStyles((theme) => ({
	root: {
		border: 0,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

export default class Description extends Component {
	render() {
		return(
			<Container>
				<TableContainer>
					<Table>
						<TableBody>
							{DESCRIPTIONS.map((row, i) => (
								<TableRow key={i}>
									<StyledTableCell>{`${row.label}:`}</StyledTableCell>
									{
										row.isBtn ?
										<StyledTableCell><Button variant='contained'>{row.value}</Button></StyledTableCell>
										:
										<StyledTableCell>{row.value}</StyledTableCell>
									}
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Container>
		);
	}
}