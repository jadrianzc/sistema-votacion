import { Grid, Typography } from '@mui/material';

export const WelcomeHeader = () => {
	return (
		<Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
			<Grid item>
				<Typography variant="h2" component="h1" color="secondary" sx={{ fontSize: '48px', fontWeight: '800' }}>
					Bienvenidos al Sistema de Votación
				</Typography>
			</Grid>
			<Grid item alignSelf="start">
				<Typography variant="h3" component="h2" color="secondary" sx={{ fontSize: '38px', fontWeight: '700' }}>
					Hola, {'NOMBRE DE LA VARIABLE'}.
				</Typography>
			</Grid>
			<Grid item alignSelf="start">
				<Typography variant="body1" component="p" color="secondary" sx={{ fontSize: '30px' }}>
					Instrucciones de como votar:
				</Typography>
			</Grid>
		</Grid>
	);
};
