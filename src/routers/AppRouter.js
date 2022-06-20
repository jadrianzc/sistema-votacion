import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="login" element={<LoginScreen />} />
				<Route path="/" element={<Navigate to={'/login'} />} />
			</Routes>
		</BrowserRouter>
	);
};
