import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Choose = () => {
	let trees;
	// let tiles = [];
  	const history = useHistory();

  	const [loaded, setLoaded] = useState(false)
  	const [tiles, setTiles] = useState([])

	useEffect(() => {
		// load trees from nft port
		trees = [
				['1', 'A'],
				['2', 'B'],
				['3', 'C']
			]

		let tilesTemp = trees.map((el) => {
			return el.map((tag) => {
				return <Grid item xs={4}>
					    <Item className="tree-tile" style={{height: '244px', hover:'pointer'}} onClick={() => history.push(`/grow/${el}`)}>{el}</Item>
					  </Grid>
			})
		})
		setLoaded(true)
		setTiles(tilesTemp)
	}, [loaded,tiles])


	return(
		<div>
		<div style={{margin: '69px', textAlign: 'center'}}>
			📦
			<br/>
			<br/>
			<br/>
			choose
		</div>
		<div style={{margin: '88px'}}>
			<Grid container spacing={8}>
			  {loaded ? tiles : null}
			</Grid>
		</div>
		</div>
	)
}

export default Choose;