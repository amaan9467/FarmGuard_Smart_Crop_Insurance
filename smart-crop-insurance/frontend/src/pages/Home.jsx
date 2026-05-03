import React from 'react'
import ImageSection from '../components/ImageSevtion'
import Slides from '../components/Slides'
import Environment from '../components/Environment'
import Cards from '../components/cards'
import Farming from '../components/Farming'

const Home = () => {
  return (
    <div>
      <div className='p-0'>
        <ImageSection />
      </div>
      <div className='p-0'>
        <Slides />
      </div>
      <div className="bg-gray-100 min-h-screen py-10">
        <Environment />
      </div>
      <div className="bg-gray-100 min-h-screen py-10">
        <Cards />
      </div>

<div className="bg-gray-100 min-h-screen py-10">
        <Farming/>
      </div>


    </div>
  )
}

export default Home
