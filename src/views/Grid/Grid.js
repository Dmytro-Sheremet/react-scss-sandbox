import React from 'react';
import style from './Grid.module.scss';

const Grid = () => {
	return (
		<div className={style.container}>
			<article>
				<section>
					<h1>grid</h1>
					<div className={style.grid}>
						<div className={style.item1}>1</div>
						<div className={style.item2}>2</div>
						<div className={style.item3}>3</div>
						<div className={style.item4}>4</div>
						<div className={style.item5}>5</div>
						<div className={style.item6}>6</div>
						<div className={style.item7}>7</div>
						<div className={style.item8}>8</div>
						<div className={style.item9}>9</div>
						<div className={style.item10}>10</div>
					</div>
				</section>
			</article>
		</div>
	);
};

export default Grid;
