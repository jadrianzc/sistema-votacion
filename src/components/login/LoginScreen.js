import { ThemeProvider } from '@mui/material/styles';
import theme from '../../themeConfig';

import { Grid } from '@mui/material';
import { LoginInputs } from './LoginInputs';
import { LoginHeader } from './LoginHeader';

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
					<LoginHeader />
				</Grid>

				<Grid item xs={6}>
					<LoginInputs />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};
