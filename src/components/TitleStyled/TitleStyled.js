import React from 'react';
import styled from 'styled-components';


const TitleStyled = ({ title, subtitle }) => {
    return (
        <TitleWrapper>
            <h4>
                <span className="title">{title}</span>
                <span>{subtitle}</span>
            </h4>
        </TitleWrapper>
    );
};

const TitleWrapper = styled.div `
    text-transform: uppercase;
    font-size: 2.3rem;
    margin-bottom: 2rem;
    
    h4 {
        text-align: center;
        letter-spacing: 7px;
        color: var(--primaryColor);
    }
    
    .title {
        color: var(--mainBlack);
    }
    
    span {
        display: block;
    }

    @media (min-width: 576px){
        span {
            display: inline-block; /* this gives space between titles */
            margin: 0 0.35rem;
        }
    }
`

export default TitleStyled;



/*
// alternative

const TitleStyled = ({ title, subtitle, className }) => {
    return (
        <div className={className}>
            <h4>
                <span className="title">{title}</span>
                <span>{subtitle}</span>
            </h4>
        </div>
    );
};

export default styled(TitleStyled) `
    text-transform: uppercase;
    font-size: 2.3rem;
    margin-bottom: 2rem;
    
    h4 {
        text-align: center;
        letter-spacing: 7px;
        color: var(--primaryColor);
    }
    
    .title {
        color: var(--mainBlack);
    }
    
    span {
        display: block;
    }

*/