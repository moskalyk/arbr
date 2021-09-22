import {Grid, TextField, Button, Item} from '@material-ui/core';

const Choose = () => {
	return(
		<div>
		📦
		<Grid container spacing={2}>
		  <Grid item xs={8}>
		    <Item>xs=8</Item>
		  </Grid>
		  <Grid item xs={4}>
		    <Item>xs=4</Item>
		  </Grid>
		  <Grid item xs={4}>
		    <Item>xs=4</Item>
		  </Grid>
		  <Grid item xs={8}>
		    <Item>xs=8</Item>
		  </Grid>
		</Grid>
		</div>
	)
}

export default Choose;