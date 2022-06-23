import { Avatar, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const CandidateItem = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('detalle');
	};

	return (
		<Grid
			item
			sx={{
				width: '1732px',
				height: '221px',
				border: '2px solid #575755',
				borderRadius: '15px',
				padding: '20px',
				cursor: 'pointer',
			}}
			onClick={handleClick}
		>
			<Grid container alignItems="center" justifyContent="space-between" sx={{ height: '100%' }}>
				<Grid item xs={2}>
					<Grid container alignItems="center" justifyContent="center">
						<Grid item>
							<Avatar sx={{ width: '136px', height: '114px' }} variant="rounded"></Avatar>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={5}>
					<Grid container spacing={2} alignItems="center" justifyContent="flex-start">
						<Grid item>
							<Typography variant="h4" component="h2" color="secondary" sx={{ fontSize: '28px' }}>
								Lista A
							</Typography>
						</Grid>
						<Grid item>
							<Typography textAlign="justify" variant="body1" component="p" color="secondary" sx={{ fontSize: '22px' }}>
								Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem Lorem ipsum Lorem ipsumLorem
								ipsumLorem ipsumLorem ipsumLorem ipsumLorem
							</Typography>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={5}>
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
