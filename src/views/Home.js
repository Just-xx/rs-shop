import React from 'react'
import Layout from '../components/Layout/Layout'
import Header from '../components/Header/Header'
import ShowcaseSection from '../layout/Home/ShowcaseSection/ShowcaseSection'
import DottsPointer from '../layout/Home/DottsPointer/DottsPointer'
import ItemsDeliversSection from '../layout/Home/ItemsDeliversSection/ItemsDeliversSection'
import SliderSection from '../layout/Home/SliderSection/SliderSection'

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