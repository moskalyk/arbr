import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import CPPort from './cpport/index.js'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const TagList = (props) => {

	const list = props.tags.map((tag, i) => {
		return <p key={i}>{tag}</p>
	})
	const shortList = list.slice(0,5) // sorry 
	return(<div>{shortList}</div>)
}	

const Choose = () => {
	let trees;
	// let tiles = [];
  	const history = useHistory();

  	const [loaded, setLoaded] = useState(false)
  	const [tiles, setTiles] = useState([])

	useEffect(async () => {
		const apiKey = ''
		const cpPort = new CPPort(apiKey)

		const photonAddress = ''
		const ethersProvider = ''

		trees = [
				['1', 'A'],
				['2', 'B'],
				['3', 'C']
			]

		// load trees from nft port
		if(!loaded){
			// right now a flat array, but will be MxN
			const tags = await cpPort.getCloud(photonAddress)
			trees[0] = tags;

			let tilesTemp = trees.map((tags) => {
				return <Grid item xs={4}>
					    <Item className="tree-tile" style={{height: '244px', hover:'pointer'}} onClick={() => history.push(`/grow/${tags[0]}`)}><TagList tags={tags}/></Item>
					  </Grid>
			})
			setLoaded(true)
			setTiles(tilesTemp)
		}
	}, [loaded,tiles])


	return(
		<div>
		<div style={{margin: '69px', textAlign: 'center'}}>
			🚪
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