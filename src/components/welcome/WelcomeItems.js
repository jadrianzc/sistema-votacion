import { Avatar, Grid } from '@mui/material';

export const WelcomeItems = () => {
	return (
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
	);
};
