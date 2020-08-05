import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 30px;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 19px 0 rgba(0, 0, 0, 0.18);
  box-sizing: border-box;
  max-width: 100%;
  height: 360px;
  margin: 12px;
`

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 350px;
  
  ${({ theme }) => theme.media.tablet} {
    width: 300px;
  }

  ${({ theme }) => theme.media.tabletSm} {
    width: 260px;
  }
`

const Title = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  margin-top: 40px;
  margin-bottom: 10px;

  ${({ theme }) => theme.media.tablet} {
    font-size: 1rem;
  }
`

const Desc = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  opacity: 0.85;

  ${({ theme }) => theme.media.tablet} {
    font-size: 0.7rem;
  }
`

const ShowcaseCard = ({ icon, title, desc, ...props}) => (
  <Wrapper {...props}>
    <InnerWrapper>
      <FontAwesomeIcon size='4x' icon={icon} />
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </InnerWrapper>
  </Wrapper>
)

ShowcaseCard.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}

export default ShowcaseCard