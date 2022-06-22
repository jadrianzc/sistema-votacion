import { ThemeProvider } from '@mui/material/styles';
import theme from '../../themeConfig';

import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import { LoginInputs } from './LoginInputs';

import './login.css';

export const LoginScreen = () => {
	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				spacing={2}
				direction="row"
				alignItems="center"
				justifyContent="center"
				sx={{
					minHeight: '100%',
					background: 'linear-gradient(-60deg, #575755 0%, #575755 50%, #FFFFFF 50%, #FFFFFF 100%)',
				}}
			>
				<Grid item xs={6} className="grid-item-left">
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
							Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
							ipsum
						</Typography>

						<Button variant="contained" color="primary" sx={{ padding: '15px', fontSize: '14px' }}>
							Leer más
						</Button>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<LoginInputs />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};
