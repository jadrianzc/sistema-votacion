import { Avatar, Grid, Typography } from '@mui/material';

export const VoteItem = () => {
	return (
		<Grid
			item
			sx={{
				width: '395px',
				height: '600px',
				border: '2px solid #575755',
				borderRadius: '15px',
				padding: '20px',
			}}
		>
			<Grid container direction="column" alignItems="center" justifyContent="space-around" sx={{ height: '100%' }}>
				<Grid item>
					<Typography variant="h2" component="h1" color="secondary" sx={{ fontSize: '150px', fontWeight: '800' }}>
						A
					</Typography>
				</Grid>
				<Grid item>
					<Avatar sx={{ width: '184px', height: '133px' }} variant="rounded"></Avatar>
					<Typography variant="body1" component="p" color="secondary" sx={{ fontSize: '26px' }}>
						nombre nombre
					</Typography>
				</Grid>
				<Grid item>
					<Grid container wrap="wrap" spacing={3} alignItems="center" justifyContent="center">
						<Grid item alignSelf="center">
							<Avatar sx={{ width: '83px', height: '63px' }} variant="rounded">
								N
							</Avatar>
						</Grid>
						<Grid item>
							<Avatar sx={{ width: '83px', height: '63px' }} variant="rounded">
								N
							</Avatar>
						</Grid>
						<Grid item>
							<Avatar sx={{ width: '83px', height: '63px' }} variant="rounded">
								N
							</Avatar>
						</Grid>
						<Grid item>
							<Avatar sx={{ width: '83px', height: '63px' }} variant="rounded">
								N
							</Avatar>
						</Grid>
						<Grid item>
							<Avatar sx={{ width: '83px', height: '63px' }} variant="rounded">
								N
							</Avatar>
						</Grid>
						<Grid item>
							<Avatar sx={{ width: '83px', height: '63px' }} variant="rounded">
								N
							</Avatar>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
