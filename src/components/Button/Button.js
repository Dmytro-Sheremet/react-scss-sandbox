import React from 'react';
import style from './Button.module.scss';
import { tools } from '../../tools';

export default function Button({ ...props }) {
	let styles = tools.styling.takeFrom(props.styles, style);
	return (
		<div>
			<button className={styles}>
				{props.name ? props.name : 'NO_NAME'}
			</button>
		</div>
	);
}
