import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"

const getBackgroundImage = graphql

const HeroStyled = ({ img, className, children, fullSize }) => {
  return (
    <BackgroundImage className={className} fluid={img} fullSize={fullSize}>
      {children}
    </BackgroundImage>
  )
}

export default styled(HeroStyled)`
  min-height: ${props => (props.fullSize 
      ? "calc(100vh - 62px)" 
      : "50vh")};

  background: ${props => props.fullSize
      ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
      : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
