import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import Logo from '../Logo/Logo'
import Nav from './Nav'
import SecondaryNav from './SecondaryNav'
import MobileMenu from './MobileMenu'
import { useIntersection } from 'react-use'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  margin-top: 40px;
  width: ${({ theme }) => theme.headerWidth};;
  height: 64px;
`

const MotionInnerWrapper = styled(motion.header)`
  height: 100%;
  width: 100%;
  background-color: #fff;
  box-shadow: 1px 2px 20px -1px rgba(0, 0, 0, .13), 1px 1px 2px 0 rgba(0, 0, 0, .08);
  border-radius: 8px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 40px;
  border: 1px solid #e4e4e4;

  ${({ theme }) => theme.media.tablet} {
    padding: 0 28px;
  }

  &.scrolled {
    position: fixed;
    top: 0;
    left: 0;
    height: 80px;
  }
`

const headerVariants = {
  default: {
    borderRadius: '8px',
    borderColor: '#e4e4e4'
  },
  scrolled: {
    borderRadius: '0',
    borderColor: '#fff'
  }
}

const NavLogo = styled(Logo)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ theme }) => theme.media.mobile} {
    position: static;
    transform: none;
  }
`

const HamburgerIcon = styled(FontAwesomeIcon)`
  display: none;
  cursor: pointer;

  ${({ theme }) => theme.media.mobile} {
    display: block;
  }
`

const Header = () => {

  const [ isScrolled, setIsScrolled ] = useState(false)
  const [ hmenu, setHmenu ] = useState(false)

  const headerRef = useRef(null)
  
  const headerIntersection = useIntersection(headerRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0
  })


  useEffect(() => setIsScrolled(headerIntersection && !headerIntersection.isIntersecting ? true : false), [headerIntersection])
  

  return (
    <Wrapper ref={headerRef}>
      <MotionInnerWrapper
        className={ isScrolled ? "scrolled" : ""}
        animate={isScrolled ? "scrolled" : "default"}
        variants={headerVariants}
        layoutTransition={{
          duration: 0.4,
          ease: "easeInOut"
        }}
      >
        <NavLogo />
        <Nav />
        <SecondaryNav />
        <HamburgerIcon icon={!hmenu ? faBars : faTimes} onClick={() => setHmenu(prevState => !prevState)}/>
        <MobileMenu visible={hmenu} isScrolled={isScrolled} setVisible={setHmenu} />
      </MotionInnerWrapper>
    </Wrapper>
  )
}

export default Header