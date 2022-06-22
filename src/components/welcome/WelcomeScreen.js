import { ThemeProvider } from '@mui/material/styles';
import theme from '../../themeConfig';

import Typography from '@mui/material/Typography';
import { Avatar, Button, Grid } from '@mui/material';

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
					</Grid>
					<Grid item sx={{ width: '100%' }}>
						<Grid container alignItems="center" justifyContent="space-evenly">
							<Grid item>
								<Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
									<Grid item>
										<Avatar
											sx={{
												width: '50px',
												height: '50px',
												background: 'transparent',
												border: '1px solid #575755',
												color: '#53AE71',
												fontSize: '38px',
												fontWeight: 'bold',
											}}
										>
											1
										</Avatar>
									</Grid>
									<Grid item>
										<Avatar sx={{ width: '200px', height: '200px' }} variant="rounded">
											N
										</Avatar>
									</Grid>
								</Grid>
							</Grid>
							<Grid item>
								<Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
									<Grid item>
										<Avatar
											sx={{
												width: '50px',
												height: '50px',
												background: 'transparent',
												border: '1px solid #575755',
												color: '#53AE71',
												fontSize: '38px',
												fontWeight: 'bold',
											}}
										>
											1
										</Avatar>
									</Grid>
									<Grid item>
										<Avatar sx={{ width: '200px', height: '200px' }} variant="rounded">
											N
										</Avatar>
									</Grid>
								</Grid>
							</Grid>
							<Grid item>
								<Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
									<Grid item>
										<Avatar
											sx={{
												width: '50px',
												height: '50px',
												background: 'transparent',
												border: '1px solid #575755',
												color: '#53AE71',
												fontSize: '38px',
												fontWeight: 'bold',
											}}
										>
											1
										</Avatar>
									</Grid>
									<Grid item>
										<Avatar sx={{ width: '200px', height: '200px' }} variant="rounded">
											N
										</Avatar>
									</Grid>
								</Grid>
							</Grid>
							<Grid item>
								<Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
									<Grid item>
										<Avatar
											sx={{
												width: '50px',
												height: '50px',
												background: 'transparent',
												border: '1px solid #575755',
												color: '#53AE71',
												fontSize: '38px',
												fontWeight: 'bold',
											}}
										>
											1
										</Avatar>
									</Grid>
									<Grid item>
										<Avatar sx={{ width: '200px', height: '200px' }} variant="rounded">
											N
										</Avatar>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item sx={{ width: '100%' }}>
						<Grid item alignSelf="start">
							<Typography variant="body1" component="p" color="secondary" sx={{ fontSize: '30px' }}>
								Recuerda que si das continuar no podras regresar hasta que hayas concluido con tu voto.
							</Typography>
						</Grid>
					</Grid>
					<Grid item sx={{ width: '60%' }}>
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
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};
