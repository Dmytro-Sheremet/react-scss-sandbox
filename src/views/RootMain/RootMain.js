import React from 'react';

import style from './RootMain.module.scss';
import SideBar from '../SideBar';
import Main from '../Main';

const Root = () => {
	return (
		<div className={style.container}>
			<SideBar />
			<Main />
		</div>
	);
};

export default Root;
