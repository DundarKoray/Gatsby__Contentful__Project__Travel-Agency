import React from 'react';
import TitleStyled from '../TitleStyled/TitleStyled'
import servicesData from './servicesData'
import styles from './services.module.css'

const Services = () => {
    return (
        <section className={styles.services}>
            <TitleStyled title="our" subtitle="services" />
            <div className={styles.center}>
                {
                    servicesData.map((item,index)=>{
                        return (
                            <article key={index} className={styles.service}>
                                <span>{item.icon}</span>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                            </article>
                        )
                    })
                }
            </div>

        </section>
    );
};

export default Services;