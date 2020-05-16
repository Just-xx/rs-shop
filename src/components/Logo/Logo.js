import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const LinkWrapper = styled(Link)`
  font-weight: 400;
  font-size: 1rem;
  text-decoration: none;
  color: #000;
  font-weight: 500;
`

const Contrast = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 5px 6px;
  margin-right: 4px;
  font-weight: 600;
  color: #fff;
`

const Logo = props => (
  <LinkWrapper to='/' {...props}>
    <Contrast>RŚ</Contrast>shop
  </LinkWrapper>
)

export default Logo;