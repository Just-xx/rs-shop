import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Wrapper = styled.section`
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  overflow-x: hidden;
  margin-bottom: 100px;
`

const sliderItemWidth = 700; // in px
const sliderItemMargin = 34

const SliderWrapper = styled(motion.div)`
  display: flex;
  height: 100%;
  position: absolute;
  left: 50%;
`


const SliderItem = styled.div`
  width: ${sliderItemWidth}px;
  height: 100%;
  background-color: #000;
  margin-right: ${sliderItemMargin}px;
  border-radius: 10px;

  :last-child {
    margin-right: 0;
  }
`

let sliderItems = [
  {
  },
  {
  },
  {
  },
  {
  },
  {
  }
]

const SliderSection = () => {

  const [ sliderItems, setSliderItems ] = useState([
    {
    },
    {
    },
    {
    },
    {
    },
    {
    }
  ])

  const [ activeItem, setActiveItem ] = useState(!(sliderItems.length % 2) ? sliderItems.length / 2 : sliderItems.length / 2 - 0.5)
  const currTransformX = activeItem * (sliderItemWidth + sliderItemMargin) + sliderItemWidth/2
  
  const itemDec = () => {
    setActiveItem(activeItem - 1)
    if (activeItem === 1) {
      setSliderItems([sliderItems[sliderItems.length - 1], ...sliderItems.slice(0, sliderItems.length - 1)])
    }
  }
  const itemInc = () => {
    setActiveItem(activeItem + 1)
  }

  return (
    <>
      <button onClick={itemDec}>left</button>
      <button onClick={itemInc}>right</button>
      <Wrapper>
        <SliderWrapper
          initial={{
            x: `-${currTransformX}px`
          }}
          animate={{
            x: `-${currTransformX}px`
          }}
        >
          {sliderItems.map(item => <SliderItem />)}
        </SliderWrapper>
      </Wrapper>
    </>
  )
}

export default SliderSection