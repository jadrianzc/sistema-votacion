import { ThemeProvider } from '@mui/material/styles';
import theme from '../../themeConfig';

import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { VoteItem } from './VoteItem';
import { VoteButtoms } from './VoteButtoms';

export const VoteScreen = () => {
	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				spacing={2}
				direction="row"
				alignItems="center"
				justifyContent="center"
				sx={{
					margin: '80px 0 40px 0',
				}}
			>
				<Grid container sx={{ width: '90%', height: '100%' }} alignContent="space-between0" justifyContent="center">
					<Grid item sx={{ width: '100%', marginTop: '20px' }}>
						<Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
							<Grid item sx={{ height: '100%' }}>
								<Typography variant="h2" component="h1" color="secondary" sx={{ fontSize: '48px', fontWeight: '800' }}>
									Seleccione un Candidato
								</Typography>
							</Grid>
						</Grid>
					</Grid>

					<Grid item sx={{ width: '100%' }}>
						<Grid container alignItems="center" justifyContent="space-between" sx={{ height: '100%' }}>
							<VoteItem />
							<VoteItem />
							<VoteItem />
							<VoteItem />
						</Grid>
					</Grid>

					<Grid item sx={{ width: '50%' }}>
						<Grid container alignItems="center" justifyContent="space-around" sx={{ height: '100%' }}>
							<VoteButtoms />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};
