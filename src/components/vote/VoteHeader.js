import { Grid, Typography } from '@mui/material';

export const VoteHeader = () => {
	return (
		<Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
			<Grid item sx={{ height: '100%' }}>
				<Typography variant="h2" component="h1" color="secondary" sx={{ fontSize: '48px', fontWeight: '800' }}>
					Seleccione un Candidato
				</Typography>
			</Grid>
		</Grid>
	);
};
