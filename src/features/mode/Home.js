import React from 'react'
import { useSelector } from 'react-redux'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Navbar } from '../components/Navbar'

export const Home = () => {

    const mode = useSelector(state => state.mode)

  return (
    <div className={mode}>
        <Navbar />
        <Main />
        <Footer />
    </div>
  )
}
