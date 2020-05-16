import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 105px;
  margin: 60px 0;
`

const Dott = styled.div`
  width: 10px;
  height: 10px;
  background-color: #000;
  opacity: 0.25;
  border-radius: 50%;
`

const DottsPointer = () => (
  <Wrapper>
    <Dott />
    <Dott />
    <Dott />
    <Dott />
  </Wrapper>
)

export default DottsPointer