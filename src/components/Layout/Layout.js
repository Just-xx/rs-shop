import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../utils/theme/theme'

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

  html, body {
    width: 100%;
    min-height: 100vh;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.rootBgc};
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const GlobalContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${({ center }) => center ? 'center' : 'flex-start'};
  background-color: ${({ theme }) => theme.colors.rootBgc};
`


const Layout = ({ children, center }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <GlobalContainer center={center}>
        {children}
      </GlobalContainer>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

Layout.defaultProps = {
  center: true
}

export default Layout