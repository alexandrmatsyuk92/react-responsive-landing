import React from 'react';
import * as styles from './grid.module.scss';

const Grid = ({ component: RenderComponent, items = []}) => {
    return <div className={styles.grid}>{ items.map((data, ind)=> <RenderComponent {...data} key={ind}/>)}</div>;
}

export default Grid;