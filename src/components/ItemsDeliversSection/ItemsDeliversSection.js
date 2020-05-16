import React from 'react'
import styled from 'styled-components';

import Item1 from '../../utils/imgs/weaponsSm/item1.png'
import Item2 from '../../utils/imgs/weaponsSm/item2.png'
import Item3 from '../../utils/imgs/weaponsSm/item3.png'
import Item4 from '../../utils/imgs/weaponsSm/item4.png'

const weaponsArr = [
  Item1,
  Item2,
  Item3,
  Item4
]

const Wrapper = styled.section`
  width: 100%;
  padding: 70px 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.3);
  position: relative;
  box-sizing: border-box;
  
  margin-bottom: 70px;
`

const Title = styled.div`
  color: #152f50;
  font-weight: 600;
  font-size: 1.7rem;
  margin-bottom: 20px;
  text-align: center;

  ${({ theme }) => theme.media.tablet} {
    font-size: 1.5rem;
  }

  ${({ theme }) => theme.media.tabletSm} {
    font-size: 1.3rem;
  }

  ${({ theme }) => theme.media.mobile} {
    font-size: 1rem;
  }
`

const DeliversWrapper = styled.div`
  display: flex;
`

const Deliver = styled.div`
  margin: 0 40px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  text-align: center;

  ${({ theme }) => theme.media.tablet} {
    font-size: 1rem;
    margin: 0 25px;
  }

  ${({ theme }) => theme.media.mobile} {
    font-size: 0.8rem;
    margin: 0 18px;
  }
`

const ImgsWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  display: flex;
  width: 70%;
  max-width: 1050px;
  min-width: 300px;
  justify-content: space-between;
`

const ImgDecorator = styled.img`
  width: 4vw;
  height: 2vw;
  min-width: 36px;
  min-height: 18px;
  max-width: 50px;
  max-height: 25px;
  box-shadow: 1px 2px 7px 0 rgba(0, 0, 0, 0.5);
  border: 2px solid #fff;
  transform: translateY(40%);
  border-radius: 10px;
  opacity: 0.9;

  ${({ theme }) => theme.media.tablet} {
    border-radius: 8px;
  }
  ${({ theme }) => theme.media.tabletSm} {
    border-radius: 6px;
  }

  &:nth-child(odd) {
    transform: translateY(60%);
  }
`

const ItemsDeliversSection = () => (
  <Wrapper>
    <Title>Osoby dostarczające bronie</Title>
    <DeliversWrapper>
      <Deliver>TGR Kabakk</Deliver>
      <Deliver>TGR Polski_Thor</Deliver>
    </DeliversWrapper>
    <ImgsWrapper>
      {weaponsArr.map(WeaponImg => <ImgDecorator src={WeaponImg} />)}
    </ImgsWrapper>
  </Wrapper>
)

export default ItemsDeliversSection