import { Button, Grid, Typography } from '@mui/material';

export const LoginHeader = () => {
	return (
		<Grid
			container
			spacing={4}
			direction="column"
			alignItems="flex-start"
			justifyContent="space-around"
			width="630px"
			height="428px"
		>
			<Typography variant="h2" component="h1" color="secondary" width="463px" fontSize="50px">
				Bienvenidos al sistema de votación
			</Typography>

			<Typography variant="body1" component="p" color="secondary" width="619px">
				Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
			</Typography>

			<Button variant="contained" color="primary" sx={{ padding: '15px', fontSize: '14px' }}>
				Leer más
			</Button>
		</Grid>
	);
};
