import styled from 'styled-components'

const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  background-color: #fff;
  border-radius: 6px;
  padding: 11px 24px;
  font-weight: 600;
  font-size: 0.95rem;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 1px 2px 15px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: color 80ms linear, background-color 80ms linear;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`

export default Button;