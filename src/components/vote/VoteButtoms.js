import { Button, Grid } from '@mui/material';

export const VoteButtoms = () => {
	return (
		<>
			<Grid item>
				<Button
					variant="contained"
					color="secondary"
					sx={{ width: '270px', height: '74px', padding: '15px', fontSize: '20px' }}
				>
					Limpiar
				</Button>
			</Grid>
			<Grid item>
				<Button
					variant="contained"
					color="primary"
					sx={{ width: '270px', height: '74px', padding: '15px', fontSize: '20px' }}
				>
					Terminar
				</Button>
			</Grid>
		</>
	);
};
