import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { AnimatePresence, motion, useDomEvent } from 'framer-motion'
import theme from '../../utils/theme/theme'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStoreAlt, faQuestionCircle, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

const MotionWrapper = styled(motion.nav)`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  z-index: 1000;
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #cfcfcf;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 2px 1px 3px 0 rgba(0, 0, 0, 0.08);

  &.scrolled {
    top: 100%;
    border: none;
    border-top: 1px solid #cfcfcf;
    border-bottom: 1px solid #cfcfcf;
    border-radius: 0;
  }
`

const NavLinkWrapper = styled(Link)`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 0.825rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  user-select: none;

  span {
    margin-left: 10px;
  }
`

const menuLinks = [
  {
    to: '/shop',
    icon: faStoreAlt,
    text: 'Sklep'
  },
  {
    to: '/cart',
    icon: faShoppingCart,
    text: 'Koszyk'
  },
  {
    to: '/profile',
    icon: faUser,
    text: 'Profil'
  },
  {
    to: '/faq',
    icon: faQuestionCircle,
    text: 'FAQ'
  },
]

const MobileMenu = ({ visible, isScrolled }) => {
  
  const [isMedia, setIsMedia] = useState(true)
  
  useEffect(() => {
    setIsMedia(window.innerWidth < theme.media.sizes.mobile)
  }, [])

  useDomEvent(useRef(window), 'resize', () => {
    setIsMedia(window.innerWidth < theme.media.sizes.mobile)
  })

  return isMedia ? (
    <AnimatePresence>
      { visible && (
        <MotionWrapper
          className={isScrolled ? 'scrolled' : ''}
          initial={{ opacity: 0, y: '-12px', scale: 0.9 }}
          animate={{ opacity: 1, y: '0px', scale: 1 }}
          exit={{ opacity: 0, y: '-12px', scale: 0.9 }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut'
          }}
        >
          {
            menuLinks.map(item => (
              <NavLinkWrapper to={item.to}>
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.text}</span>
              </NavLinkWrapper>
            ))
          }
        </MotionWrapper>
      )}
    </AnimatePresence>
  ) : null
}


MobileMenu.propTypes = {
  visible: PropTypes.bool.isRequired,
  isScrolled: PropTypes.bool.isRequired
}

export default MobileMenu