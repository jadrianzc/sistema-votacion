import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../themeConfig';

import { Grid } from '@mui/material';
import { CandidateDetailItem } from './CandidateDetailItem';
import { CandidateDetailHeader } from './CandidateDetailHeader';

export const CandidateDetail = () => {
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
						<Grid container alignItems="center" justifyContent="center">
							<CandidateDetailHeader />
						</Grid>
					</Grid>

					<Grid item sx={{ width: '100%' }}>
						<Grid
							container
							spacing={2}
							direction="column"
							alignItems="center"
							justifyContent="space-between"
							sx={{ height: '100%' }}
						>
							<CandidateDetailItem />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};
