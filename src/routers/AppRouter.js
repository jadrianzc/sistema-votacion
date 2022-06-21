import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CandidateScreen } from '../components/candidate/CandidateScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { NavBar } from '../components/ui/Navbar';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="login" element={<LoginScreen />} />
				<Route path="candidatos" element={<CandidateScreen />} />
				<Route path="/" element={<Navigate to={'/login'} />} />
			</Routes>
		</BrowserRouter>
	);
};
