import React from 'react';
import TitleStyled from '../TitleStyled/TitleStyled'
import styles from './about.module.css'
import img from './images/defaultBcg.jpeg'

const About = () => {
    return (
        <section className={styles.about}>
            <TitleStyled title="about" subtitle="us"/>
            <div className={styles.center}>
                <article className={styles.img}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="about company"/>
                    </div>
                </article>
                <article className={styles.info}>
                    <h4>explore the difference</h4>
                    <p>Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis</p>
                    <p>Habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
                    <button type="button" className="btn-primary">red more</button>
                </article>
            </div>
        </section>
    );
};

export default About;