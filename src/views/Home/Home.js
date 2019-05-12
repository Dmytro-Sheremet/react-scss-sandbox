import React from 'react';
import style from './Home.module.scss';
import Button from '../../components/Button/Button';

const Home = () => {
	return (
		<div className={style.container}>
			<article>
				<section>
					<h1>Home</h1>
					<Button styles='btn primary m-2' name='Primary' />
					<Button styles='btn secondary m-2' name='SecoNdaRy' />
					<Button styles='btn success m-2' name='success' />
					<Button styles='btn info m-2' name='info' />
					<Button styles='btn error m-2' name='error' />
				</section>
			</article>
		</div>
	);
};
export default Home;
