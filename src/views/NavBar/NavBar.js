import React from 'react';
import style from './NavBar.module.scss';

export default function NavBar() {
	return (
		<div className={style.container}>
			<div className={style.links}>
				<p className={style.logo}>Home</p>
				<ul>
					<li>link 1</li>
					<li>link 2</li>
					<li>link 3</li>
					<li>link 4</li>
					<li>link 5</li>
				</ul>
			</div>
		</div>
	);
}
