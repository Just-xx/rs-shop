import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { rgba } from 'polished'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`

const IconWrapper = styled(Link)`
  color: #000;
  margin-right: 12px;
  font-size: 0.965rem;
  transition: background-color 70ms ease-in-out, color 140ms ease-in-out;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  background-color: transparent;

  ${({ theme }) => theme.media.tablet} {
    font-size: 0.85rem;
    margin-right: 5px;
  }

  :hover {
    background-color: ${({ theme }) => rgba(theme.colors.primary, 0.1)};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  :last-child {
    margin-right: 0;
  }
`


const SecondaryNav = props => {

  return (
    <Wrapper {...props}>
      <IconWrapper to="/login">
        <FontAwesomeIcon icon={faUser} />
      </IconWrapper>
      <IconWrapper to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </IconWrapper>
    </Wrapper>
  )
}

export default SecondaryNav