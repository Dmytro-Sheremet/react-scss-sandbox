import React from 'react';
// import CC from 'class-names';
import style from './Main.module.scss';
import Button from '../../components/Button/Button';

export default function Main() {
	return (
		<div className={style.container}>
			<h1> main </h1>

			<Button styles='btn primary' name='Primary' />
			<Button styles='btn secondary' name='SecoNdaRy' />
			<Button styles='btn success' name='success' />
			<Button styles='btn info' name='info' />
			<Button styles='btn error' name='error' />
		</div>
	);
}
