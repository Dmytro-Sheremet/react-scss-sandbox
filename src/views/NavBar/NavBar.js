import React from 'react';
import { Link } from 'react-router-dom';

import style from './NavBar.module.scss';
import Button from '../../components/Button/Button';

export default function NavBar() {
	return (
		<div className={style.container}>
			<div className={style.links}>
				<p className={style.logo}>
					<Link to={`/`}>
						<Button styles='btn primary' name='APP' />
					</Link>
				</p>

				<ul>
					<li>
						<Link to={`/`}>
							<Button styles='btn primary' name='Home' />
						</Link>
					</li>
					<li>
						<Link to={`/info`}>
							<Button styles='btn primary' name='info' />
						</Link>
					</li>
					<li>
						<Link to={`/grid`}>
							<Button styles='btn primary' name='grid' />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
