import { Avatar, Grid, Typography } from '@mui/material';

export const CandidateDetailHeader = () => {
	return (
		<>
			<Grid item xs={8}>
				<Grid container spacing={3} alignItems="center" justifyContent="flex-start">
					<Grid item>
						<Typography variant="h4" component="h2" color="secondary" sx={{ fontSize: '48px', fontWeight: 'bold' }}>
							Lista A
						</Typography>
					</Grid>
					<Grid item>
						<Typography textAlign="justify" variant="body1" component="p" color="secondary" sx={{ fontSize: '22px' }}>
							Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem Lorem ipsum Lorem ipsumLorem
							ipsumLorem ipsumLorem ipsumLorem ipsumLorem Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
							ipsumLorem Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem Lorem ipsum Lorem
							ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem
							ipsumLorem ipsumLorem Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem Lorem ipsum
							Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem Lorem ipsum Lorem ipsumLorem ipsumLorem
							ipsumLorem ipsumLorem ipsumLorem Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={4}>
				<Grid container alignItems="center" justifyContent="center">
					<Avatar sx={{ width: '465px', height: '465px' }} variant="rounded">
						N
					</Avatar>
				</Grid>
			</Grid>
		</>
	);
};
