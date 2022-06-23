import { Avatar, Grid } from '@mui/material';

export const CandidateDetailItem = () => {
	return (
		<Grid container wrap="wrap" spacing={3} alignItems="center" justifyContent="space-between">
			<Grid item alignSelf="center">
				<Avatar sx={{ width: '200px', height: '200px' }} variant="rounded">
					N
				</Avatar>
			</Grid>
			<Grid item>
				<Avatar sx={{ width: '200px', height: '200px' }} variant="rounded">
					N
				</Avatar>
			</Grid>
			<Grid item>
				<Avatar sx={{ width: '200px', height: '200px' }} variant="rounded">
					N
				</Avatar>
			</Grid>
			<Grid item>
				<Avatar sx={{ width: '200px', height: '200px' }} variant="rounded">
					N
				</Avatar>
			</Grid>
			<Grid item>
				<Avatar sx={{ width: '200px', height: '200px' }} variant="rounded">
					N
				</Avatar>
			</Grid>
		</Grid>
	);
};
