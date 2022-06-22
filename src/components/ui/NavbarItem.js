import { NavLink } from 'react-router-dom';

export const NavbarItem = () => {
	return (
		<>
			<NavLink className={({ isActive }) => `nav-link-menu ${isActive ? 'active' : ''}`} to="/login">
				Votar
			</NavLink>
			<NavLink className={({ isActive }) => `nav-link-menu ${isActive ? 'active' : ''}`} to="/candidatos">
				Candidatos
			</NavLink>
			<NavLink className={({ isActive }) => `nav-link-menu ${isActive ? 'active' : ''}`} to="/resultados">
				Resultados
			</NavLink>
		</>
	);
};
