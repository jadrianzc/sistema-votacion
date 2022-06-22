import { Person, Lock } from '@mui/icons-material';
import { Button, Grid, InputAdornment, TextField } from '@mui/material';

export const LoginInputs = () => {
	return (
		<form>
			<Grid container spacing={4} direction="column" alignItems="center" justifyContent="center">
				<Grid item>
					<TextField
						type="email"
						id="input-with-icon-textfield"
						label="Correo Institucional"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Person />
								</InputAdornment>
							),
						}}
						variant="filled"
						sx={{ background: '#FFFFFF', borderRadius: 1, width: '300px' }}
					/>
				</Grid>
				<Grid item>
					<TextField
						type="password"
						id="input-with-icon-textfield"
						label="Contraseña"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Lock />
								</InputAdornment>
							),
						}}
						variant="filled"
						sx={{ background: '#FFFFFF', borderRadius: 1, width: '300px' }}
					/>
				</Grid>
				<Grid item>
					<Button variant="contained" color="primary" sx={{ padding: '10px 15px', fontSize: '14px' }}>
						Ingresar
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};
