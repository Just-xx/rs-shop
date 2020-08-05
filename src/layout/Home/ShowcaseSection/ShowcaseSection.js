import React from 'react'
import styled from 'styled-components'
import ShowcaseCard from './ShowcaseCard'
import { faGem, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import Button from '../../../components/Button/Button'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Wrapper = styled.section`
  margin-top: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 1.5rem;
  color: #626e7f;
  font-weight: 700;
  margin-bottom: 25px;
`

const CardsWrapper = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.headerWidth};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;


  ${({ theme }) => theme.media.tablet} {
    grid-gap: 30px;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 40px;
  }
`

const ShopLinkBtn = styled(Button)`
  margin-top: 40px;
  text-decoration: none;
`

const cards = [
  {
    icon: faGem,
    title: "Dostawa w ciągu 24h",
    desc: "Nasz sklep zawsze stara się dostarczyć kupione itemy na czas"
  },
  {
    icon: faQuestionCircle,
    title: "Masz pytanie?",
    desc: "Masz pytanie dotyczące transakcji lub twoje zamówienie nie zostało dostarczone napisz do nas"
  },
  {
    icon: faQuestionCircle,
    title: "Masz pytanie?",
    desc: "Masz pytanie dotyczące transakcji lub twoje zamówienie nie zostało dostarczone napisz do nas"
  },
]

const Showcase = () => {
  return (
    <Wrapper>
      <Title>O nas</Title>
      <CardsWrapper>
        {cards.map(cardInfo => <ShowcaseCard {...cardInfo}/>)}
      </CardsWrapper>
      <ShopLinkBtn as={Link} to='/shop'>Przejdź do sklepu</ShopLinkBtn>
    </Wrapper>
  )
}

export default Showcase