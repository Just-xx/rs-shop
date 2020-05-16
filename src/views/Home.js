import React from 'react'
import Layout from '../components/Layout/Layout'
import Header from '../components/Header/Header'
import ShowcaseSection from '../components/ShowcaseSection/ShowcaseSection'
import DottsPointer from '../components/DottsPointer/DottsPointer'
import ItemsDeliversSection from '../components/ItemsDeliversSection/ItemsDeliversSection'
import SliderSection from '../components/SliderSection/SliderSection'

const Home = () => {
  return (
    <Layout>
      <Header />
      <ShowcaseSection />
      <DottsPointer />
      <ItemsDeliversSection />
      <SliderSection />
    </Layout>
  )
}

export default Home