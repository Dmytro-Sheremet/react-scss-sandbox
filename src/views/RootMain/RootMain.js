import React from 'react';
import style from './RootMain.module.scss';

import Main from '../Main';
import SideBar from '../SideBar';

export default function Root() {
	return (
		<div className={style.container}>
			<SideBar />
			<Main />
		</div>
	);
}
