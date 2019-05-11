import React from 'react';
import CC from 'class-names';
import style from './Main.module.scss';
import Button from '../../components/Button/Button';

export default function Main() {
	return (
		<div className={style.container}>
			<h1> main </h1>

			<Button style={['btn', 'primary']} name='Primary' />
			<Button style={['btn', 'secondary']} name='SecoNdaRy' />
			<Button style={['btn', 'success']} name='success' />
			<Button style={['btn', 'info']} name='info' />
			<Button style={['btn', 'error']} name='error' />
		</div>
	);
}
