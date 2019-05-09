import React from 'react';
import './App.scss';
import RootMain from './views/RootMain';
import NavBar from './views/NavBar';
import Footer from './views/Footer';

export default function App() {
	return (
		<div>
			<NavBar />
			<RootMain />
			<Footer />
		</div>
	);
}
