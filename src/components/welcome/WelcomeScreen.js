import { ThemeProvider } from '@mui/material/styles';
import theme from '../../themeConfig';

import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

import { WelcomeItems } from './WelcomeItems';
import { WelcomeButtoms } from './WelcomeButtoms';
import { WelcomeHeader } from './WelcomeHeader';

export const WelcomeScreen = () => {
	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				spacing={2}
				direction="row"
				alignItems="center"
				justifyContent="center"
				sx={{
					margin: '80px 0',
				}}
			>
				<Grid
					container
					sx={{ width: '90%', height: '100%' }}
					direction="column"
					alignItems="center"
					justifyContent="space-between"
				>
					<Grid item sx={{ width: '100%', marginTop: '20px' }}>
						<WelcomeHeader />
					</Grid>

					<Grid item sx={{ width: '100%' }}>
						<WelcomeItems />
					</Grid>

					<Grid item sx={{ width: '100%' }}>
						<Grid item alignSelf="start">
							<Typography variant="body1" component="p" color="secondary" sx={{ fontSize: '30px' }}>
								Recuerda que si das continuar no podras regresar hasta que hayas concluido con tu voto.
							</Typography>
						</Grid>
					</Grid>

					<Grid item sx={{ width: '60%' }}>
						<WelcomeButtoms />
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};
