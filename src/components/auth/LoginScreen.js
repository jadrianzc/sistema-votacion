import { ThemeProvider } from '@mui/material/styles';
import theme from '../../themeConfig';

import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export const LoginScreen = () => {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<div>
					<div>
						<Typography variant="h1" component="h1" color="secondary">
							Bienvenidos al sistem de votación
						</Typography>
						<p>Lorem ipsum</p>

						<Button variant="contained" color="primary">
							Leer más
						</Button>
					</div>
					<div></div>
				</div>
			</div>
		</ThemeProvider>
	);
};
