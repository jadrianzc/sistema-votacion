import { AppBar, Avatar, Grid, IconButton, Toolbar } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import LogoUleam from '../../assets/logoUleam.png';
import { NavbarItem } from './NavbarItem';

import './navbar.css';

export const NavBar = ({ drawerWidth = 0, appBarStyle = '' }) => {
	return (
		<AppBar
			position="fixed"
			sx={{
				width: { sm: `calc(100% - ${drawerWidth}px)` },
				ml: { sm: `${drawerWidth}px` },
				boxShadow: 'none',
				height: '80px',
			}}
			color="transparent"
			className={`app-bar ${appBarStyle}`}
		>
			<Toolbar sx={{ width: '90%' }}>
				<IconButton color="inherit" edge="start" sx={{ mr: 2, display: { sm: 'none' } }}>
					<MenuOutlined />
				</IconButton>

				<Grid container direction="row" justifyContent="space-between" alignItems="center">
					<Avatar alt="Logo Uleam" src={LogoUleam} sx={{ width: '263px', height: '80px', borderRadius: '0px' }} />

					<Grid container justifyContent="space-between" alignItems="center" sx={{ width: '540px', height: '80px' }}>
						<NavbarItem />
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
