import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { rgba } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStoreAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`
const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 600;
  font-size: 0.77rem;
  margin-right: 10px;
  padding: 9px 11px;
  border-radius: 40px;
  transition: background-color 70ms ease-in-out, color 140ms ease-in-out;

  span {
    margin-left: 6px;
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: 0.7rem;
    margin-right: 2px;
  }

  :last-child {
    margin-right: 0;
  }

  :hover {
    background-color: ${({ theme }) => rgba(theme.colors.primary, 0.1)};
    color: ${({ theme }) => theme.colors.primary};
  }
`

const NavItem = ({ icon, title, to }) => (
  <NavLink to={to}>
      <FontAwesomeIcon icon={icon} />
      <span className="nav-title">{title}</span>
  </NavLink>
)

const Nav = props => (
  <Wrapper {...props}>
    <NavItem icon={faStoreAlt} title='Sklep' to='/shop' />
    <NavItem icon={faQuestionCircle} title='FAQ' to='/faq' />
  </Wrapper>
)

export default Nav