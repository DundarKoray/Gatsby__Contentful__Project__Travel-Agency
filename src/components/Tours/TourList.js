import React, { Component } from 'react';
import styles from './tourList.module.css'
import Tour from './Tour'
import TitleStyled from '../TitleStyled/TitleStyled'

class TourList extends Component {
    state = {
        tours: [],
        sortedTours: []
    }

    componentDidMount() {
        this.setState({
            tours: this.props.tours.edges,
            sortedTours: this.props.tours.edges
        })
    }

    render() {
        
        // console.log(this.state.sortedTours)
        return (
            <section className={styles.tours}>
                <TitleStyled title="our" subtitle="tours" />
                <div className={styles.center}>
                    {
                        this.state.sortedTours.map(({node})=>{
                            return <Tour key={node.contentful_id} tour={node} />
                        })
                    }
                </div>
            </section>
        );
    }
}

export default TourList;