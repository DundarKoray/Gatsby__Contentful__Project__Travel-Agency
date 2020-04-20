import React from 'react';
import styles from './simpleHero.module.css'

const SimpleHero = ({children}) => {
    return (
        <header className={styles.defaultHero}>
            {children}
        </header>
    );
};

export default SimpleHero;