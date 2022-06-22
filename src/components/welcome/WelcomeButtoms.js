import { Button, Grid } from '@mui/material';

export const WelcomeButtoms = () => {
	return (
		<Grid container alignItems="center" justifyContent="space-around">
			<Grid item>
				<Button
					variant="contained"
					color="secondary"
					sx={{ width: '270px', height: '74px', padding: '15px', fontSize: '14px' }}
				>
					Salir
				</Button>
			</Grid>
			<Grid item>
				<Button
					variant="contained"
					color="primary"
					sx={{ width: '270px', height: '74px', padding: '15px', fontSize: '14px' }}
				>
					Continuar
				</Button>
			</Grid>
		</Grid>
	);
};
