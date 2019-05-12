import React from 'react';
import { Switch, Route } from 'react-router-dom';

import style from './Main.module.scss';
import Home from '../Home/Home';
import Info from '../Info/Info';
import Grid from '../Grid/Grid';

const Main = () => {
	return (
		<main className={style.container}>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/info' component={Info} />
				<Route exact path='/grid' component={Grid} />
			</Switch>
		</main>
	);
};

export default Main;
