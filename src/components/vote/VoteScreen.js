import { ThemeProvider } from '@mui/material/styles';
import theme from '../../themeConfig';

import { Grid } from '@mui/material';

import { VoteItem } from './VoteItem';
import { VoteButtoms } from './VoteButtoms';
import { VoteHeader } from './VoteHeader';

export const VoteScreen = () => {
	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				spacing={2}
				direction="row"
				alignItems="center"
				justifyContent="center"
				sx={{
					margin: '80px 0 40px 0',
				}}
			>
				<Grid container sx={{ width: '90%', height: '100%' }} alignContent="space-between0" justifyContent="center">
					<Grid item sx={{ width: '100%', marginTop: '20px' }}>
						<VoteHeader />
					</Grid>

					<Grid item sx={{ width: '100%' }}>
						<Grid container alignItems="center" justifyContent="space-between" sx={{ height: '100%' }}>
							<VoteItem />
							<VoteItem />
							<VoteItem />
							<VoteItem />
						</Grid>
					</Grid>

					<Grid item sx={{ width: '50%' }}>
						<Grid container alignItems="center" justifyContent="space-around" sx={{ height: '100%' }}>
							<VoteButtoms />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};
