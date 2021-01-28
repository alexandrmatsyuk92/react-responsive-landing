import React, { useEffect, useCallback, useState } from 'react';
import * as styles from './card.module.scss';

const Card = ({ icon, text, title}) => {
    const [ src, setSrc ] = useState(null);
    
    const loadIcon = useCallback(async () => {
        try {
            const { default: iconSrc } = await import(`../../assets/icons/${icon}.svg`);
            setSrc(iconSrc);
        } catch (e) {
            console.error(e.message);
        }
    }, [icon]);
    useEffect(() => loadIcon(), [loadIcon]);
    return <div title={title} className={styles.card}>
        <img src={src} alt={title}/>
        <h3>{title}</h3>
        <p>{text}</p>
        </div>
}

export default Card;