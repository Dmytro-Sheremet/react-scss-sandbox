import React from 'react';
import CC from 'class-names';
import style from './Button.module.scss';

export default function Button({ ...props }) {
	let styles = CC(
		props.style.reduce((container, string) => {
			if (string in style) {
				container.push(style[string]);
			}
			return container;
		}, []),
	);

	return (
		<div>
			<button className={styles}>
				{props.name ? props.name : 'NO_NAME'}
			</button>
		</div>
	);
}
