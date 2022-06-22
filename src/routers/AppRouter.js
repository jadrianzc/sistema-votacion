import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CandidateScreen } from '../components/candidate/CandidateScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { ResultScreen } from '../components/result/ResultScreen';
import { WelcomeScreen } from '../components/welcome/WelcomeScreen';
import { VoteScreen } from '../components/vote/VoteScreen';
import { NavBar } from '../components/ui/Navbar';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="login" element={<LoginScreen />} />
				<Route path="inicio" element={<WelcomeScreen />} />
				<Route path="votar" element={<VoteScreen />} />
				<Route path="candidatos" element={<CandidateScreen />} />
				<Route path="resultados" element={<ResultScreen />} />

				<Route path="/" element={<Navigate to={'/login'} />} />
			</Routes>
		</BrowserRouter>
	);
};
