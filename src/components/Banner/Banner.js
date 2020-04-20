import React from 'react';
import styles from './banner.module.css';

const Banner = ( { title, info, children } ) => {
    return (
        <div className={styles.banner}>
            <h1 className={styles.bannerTitle}>{title}</h1>
            <p className={styles.bannerInfo}>{info}</p>
            {children}
        </div>
    );
};

export default Banner;