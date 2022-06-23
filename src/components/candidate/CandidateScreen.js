import { ThemeProvider } from '@mui/material/styles';
import theme from '../../themeConfig';

import { Grid } from '@mui/material';
import { CandidateHeader } from './CandidateHeader';
import { CandidateItem } from './CandidateItem';

export const CandidateScreen = () => {
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
						<CandidateHeader />
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
							<CandidateItem />
							<CandidateItem />
							<CandidateItem />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};
